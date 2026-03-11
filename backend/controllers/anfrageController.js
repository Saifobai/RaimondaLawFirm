import { contactMail } from "../services/contactMailService.js";
import { appendAnfrageRow } from "../services/googleSheetsService.js";
import escape from "escape-html";

export const sendAnfrage = async (req, res) => {

    const {
        debt,
        claims,
        income,
        marital,
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
        notes
    } = req.body;

    if (!firstname || !lastname || !email) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const safeFirst = escape(firstname);
    const safeLast = escape(lastname);
    const safeEmail = escape(email);
    const safePhone = escape(phone || "Not provided");

    try {

        const html = `
      <h2>Neue Schuldnerberatung Anfrage</h2>

      <h3>Kontakt</h3>
      <p><b>Name:</b> ${safeFirst} ${safeLast}</p>
      <p><b>Email:</b> ${safeEmail}</p>
      <p><b>Telefon:</b> ${safePhone}</p>

      <h3>Finanzielle Situation</h3>
      <p><b>Schulden:</b> ${escape(debt)}</p>
      <p><b>Forderungen:</b> ${escape(claims)}</p>
      <p><b>Einkommen:</b> ${escape(income)}</p>

      <h3>Familienstand</h3>
      <p>${escape(marital)}</p>

      <h3>Beruf</h3>
      <p><b>Feld:</b> ${escape(jobField)}</p>
      <p><b>Job:</b> ${escape(job)}</p>
      <p><b>Arbeitslos:</b> ${unemployed}</p>

      <h3>Status</h3>
      <p>Selbstständig: ${selfEmployed}</p>
      <p>Lohnpfändung: ${garnished}</p>
      <p>Fahrzeug: ${vehicle}</p>
      <p>Immobilie: ${property}</p>
      <p>Gläubiger bekannt: ${knowCreditors}</p>

      <h3>Notizen</h3>
      <p>${escape(notes || "")}</p>
    `;

        await contactMail.sendMail({
            from: `"Raimonda Laws" <${process.env.CONTACT_MAIL_USER}>`,
            to: process.env.CONTACT_MAIL_USER,
            replyTo: safeEmail,
            subject: `Schuldnerberatung Anfrage - ${safeFirst} ${safeLast}`,
            html
        });

        await appendAnfrageRow(req.body);

        res.json({ success: true });

    } catch (error) {

        console.error("Anfrage error:", error);

        res.status(500).json({
            error: "Failed to send Anfrage"
        });

    }
};
