import { contactMail } from "../services/contactMailService.js";
import { appendAnfrageRow } from "../services/googleSheetsService.js";
import escape from "escape-html";

export const sendAnfrage = async (req, res) => {
    try {
        const {
            debt,
            claims,
            income,
            marital,
            children,
            jobField,
            job,
            unemployed,
            selfEmployed,
            garnished,
            vehicle,
            property,
            knowCreditors,
            firstname,
            lastname,
            email,
            phone,
            notes,
        } = req.body;

        if (!firstname || !lastname || !email) {
            return res.status(400).json({
                error: "Missing required fields",
            });
        }

        // sanitize
        const safeFirst = escape(firstname);
        const safeLast = escape(lastname);
        const safeEmail = escape(email);
        const safePhone = escape(phone || "Not provided");

        // EMAIL CONTENT
        const html = `
      <h2>Neue Schuldnerberatung Anfrage</h2>

      <h3>Kontakt</h3>
      <p><b>Name:</b> ${safeFirst} ${safeLast}</p>
      <p><b>Email:</b> ${safeEmail}</p>
      <p><b>Telefon:</b> ${safePhone}</p>

      <h3>Finanzen</h3>
      <p>Schulden: ${escape(debt || "")}</p>
      <p>Forderungen: ${escape(claims || "")}</p>
      <p>Einkommen: ${escape(income || "")}</p>

      <h3>Details</h3>
      <p>Familienstand: ${escape(marital || "")}</p>
      <p>Kinder: ${escape(children || "")}</p>

      <h3>Beruf</h3>
      <p>Feld: ${escape(jobField || "")}</p>
      <p>Job: ${escape(job || "")}</p>
      <p>Arbeitslos: ${unemployed}</p>

      <h3>Status</h3>
      <p>Selbstständig: ${selfEmployed}</p>
      <p>Lohnpfändung: ${garnished}</p>
      <p>Fahrzeug: ${vehicle}</p>
      <p>Immobilie: ${property}</p>
      <p>Gläubiger bekannt: ${knowCreditors}</p>

      <h3>Notizen</h3>
      <p>${escape(notes || "")}</p>
    `;

        // SEND EMAIL
        await contactMail.sendMail({
            from: `"Raimonda Laws" <${process.env.CONTACT_MAIL_USER}>`,
            to: process.env.CONTACT_MAIL_USER,
            replyTo: safeEmail,
            subject: `Neue Anfrage - ${safeFirst} ${safeLast}`,
            html,
        });

        // SAVE TO GOOGLE SHEETS
        await appendAnfrageRow(req.body);

        return res.json({ success: true });

    } catch (error) {
        console.error("❌ Anfrage error:", error);

        return res.status(500).json({
            error: "Server error",
        });
    }
};