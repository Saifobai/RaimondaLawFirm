// import { contactMail } from "../services/contactMailService.js";
// import { appendAnfrageRow } from "../services/googleSheetsService.js";
// import escape from "escape-html";

// export const sendAnfrage = async (req, res) => {
//     try {
//         const {
//             debt,
//             claims,
//             income,
//             marital,
//             children,
//             jobField,
//             job,
//             unemployed,
//             selfEmployed,
//             garnished,
//             vehicle,
//             property,
//             knowCreditors,
//             firstname,
//             lastname,
//             email,
//             phone,
//             notes,
//         } = req.body;

//         if (!firstname || !lastname || !email) {
//             return res.status(400).json({
//                 error: "Missing required fields",
//             });
//         }

//         // sanitize
//         const safeFirst = escape(firstname);
//         const safeLast = escape(lastname);
//         const safeEmail = escape(email);
//         const safePhone = escape(phone || "Not provided");

//         // EMAIL CONTENT
//         const html = `
//       <h2>Neue Schuldnerberatung Anfrage</h2>

//       <h3>Kontakt</h3>
//       <p><b>Name:</b> ${safeFirst} ${safeLast}</p>
//       <p><b>Email:</b> ${safeEmail}</p>
//       <p><b>Telefon:</b> ${safePhone}</p>

//       <h3>Finanzen</h3>
//       <p>Schulden: ${escape(debt || "")}</p>
//       <p>Forderungen: ${escape(claims || "")}</p>
//       <p>Einkommen: ${escape(income || "")}</p>

//       <h3>Details</h3>
//       <p>Familienstand: ${escape(marital || "")}</p>
//       <p>Kinder: ${escape(children || "")}</p>

//       <h3>Beruf</h3>
//       <p>Feld: ${escape(jobField || "")}</p>
//       <p>Job: ${escape(job || "")}</p>
//       <p>Arbeitslos: ${unemployed}</p>

//       <h3>Status</h3>
//       <p>Selbstständig: ${selfEmployed}</p>
//       <p>Lohnpfändung: ${garnished}</p>
//       <p>Fahrzeug: ${vehicle}</p>
//       <p>Immobilie: ${property}</p>
//       <p>Gläubiger bekannt: ${knowCreditors}</p>

//       <h3>Notizen</h3>
//       <p>${escape(notes || "")}</p>
//     `;

//         // SEND EMAIL
//         await contactMail.sendMail({
//             from: `"Raimonda Laws" <${process.env.CONTACT_MAIL_USER}>`,
//             to: process.env.CONTACT_MAIL_USER,
//             replyTo: safeEmail,
//             subject: `Neue Anfrage - ${safeFirst} ${safeLast}`,
//             html,
//         });

//         // SAVE TO GOOGLE SHEETS
//         await appendAnfrageRow(req.body);

//         return res.json({ success: true });

//     } catch (error) {
//         console.error("❌ Anfrage error:", error);

//         return res.status(500).json({
//             error: "Server error",
//         });
//     }
// };

//====================================================================
//====================================================================
import { contactMail } from "../services/contactMailService.js";
import PDFDocument from "pdfkit";
import escape from "escape-html";

export const sendAnfrage = async (req, res) => {
    try {
        const data = req.body;

        if (!data.firstname || !data.lastname || !data.email) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const safe = (v) => escape(v || "");

        // =========================
        // 📄 PDF INIT
        // =========================
        const doc = new PDFDocument({ size: "A4", margin: 50 });

        const buffers = [];
        doc.on("data", buffers.push.bind(buffers));

        const pdfPromise = new Promise((resolve) => {
            doc.on("end", () => resolve(Buffer.concat(buffers)));
        });

        // =========================
        // 🎨 COLORS
        // =========================
        const gold = "#BA8C61";
        const dark = "#0D0F16";
        const lightGray = "#F5F5F5";

        // =========================
        // 🧠 HEADER (MODERN BAR)
        // =========================
        doc
            .rect(0, 0, 595, 90)
            .fill(dark);

        doc
            .fillColor(gold)
            .fontSize(20)
            .text("RAIMONDA LAWS", 50, 30);

        doc
            .fillColor("white")
            .fontSize(10)
            .text("SCHULDNERBERATUNG – ANFRAGEBERICHT", 50, 55);

        doc.moveDown(2);

        // =========================
        // 📦 TABLE ROW FUNCTION
        // =========================
        const row = (label, value) => {
            const y = doc.y;

            doc
                .fillColor("#111")
                .fontSize(10)
                .text(label, 50, y, { width: 200 });

            doc
                .fillColor("#333")
                .fontSize(10)
                .text(value || "-", 260, y, { width: 280 });

            // line separator
            doc
                .strokeColor("#E5E5E5")
                .lineWidth(1)
                .moveTo(50, y + 15)
                .lineTo(540, y + 15)
                .stroke();

            doc.moveDown(1);
        };

        // =========================
        // 📌 SECTION TITLE
        // =========================
        const section = (title) => {
            doc.moveDown(1);

            doc
                .fillColor(gold)
                .fontSize(13)
                .text(title, 50);

            doc
                .strokeColor(gold)
                .lineWidth(1)
                .moveTo(50, doc.y + 2)
                .lineTo(200, doc.y + 2)
                .stroke();

            doc.moveDown(1);
        };

        // =========================
        // 📄 CONTENT
        // =========================

        section("KONTAKT");

        row("Name", `${safe(data.firstname)} ${safe(data.lastname)}`);
        row("Email", safe(data.email));
        row("Telefon", safe(data.phone));

        section("FINANZEN");

        row("Schulden", data.debt);
        row("Forderungen", data.claims);
        row("Einkommen", data.income);

        section("PERSÖNLICH");

        row("Familienstand", data.marital);
        row("Kinder", data.children);
        row("Berufsfeld", data.jobField);

        section("STATUS");

        row("Arbeitslos", data.unemployed ? "Ja" : "Nein");
        row("Selbstständig", data.selfEmployed ? "Ja" : "Nein");
        row("Pfändung", data.garnishedType || "Nein angegeben");

        row("Fahrzeug", data.vehicle ? "Ja" : "Nein");
        row("KFZ-Brief", data.vehicleDocs || "-");

        row("Immobilie", data.property ? "Ja" : "Nein");
        row("Gläubiger bekannt", data.knowCreditors ? "Ja" : "Nein");

        section("NOTIZEN");

        doc
            .fillColor("#333")
            .fontSize(10)
            .text(safe(data.notes || "-"), 50, doc.y, {
                width: 490,
                lineGap: 4,
            });

        // =========================
        // 📎 FOOTER
        // =========================
        doc
            .moveDown(2)
            .fillColor("gray")
            .fontSize(9)
            .text(
                `Erstellt am: ${new Date().toLocaleString("de-DE")}`,
                { align: "center" }
            );

        doc.end();

        const pdfBuffer = await pdfPromise;

        // =========================
        // 📧 EMAIL
        // =========================
        await contactMail.sendMail({
            from: `"Raimonda Laws" <${process.env.CONTACT_MAIL_USER}>`,
            to: "sam@lovely.com.de",
            replyTo: safe(data.email),
            subject: `Neue Anfrage - ${safe(data.firstname)} ${safe(data.lastname)}`,
            html: `
                <h2>Neue Anfrage eingegangen</h2>
                <p>Die vollständigen Daten befinden sich im PDF-Anhang.</p>
            `,
            attachments: [
                {
                    filename: `anfrage_${Date.now()}.pdf`,
                    content: pdfBuffer,
                },
            ],
        });

        return res.json({ success: true });

    } catch (error) {
        console.error("❌ ERROR:", error);
        return res.status(500).json({ error: "Server error" });
    }
};