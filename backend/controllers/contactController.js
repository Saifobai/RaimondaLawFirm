// import { contactMail } from "../services/contactMailService.js";

// import escape from "escape-html";

// export const sendContactMessage = async (req, res) => {
//     const { name, email, message, phone } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).json({ error: "Missing fields" });
//     }

//     const safeName = escape(name);
//     const safeEmail = escape(email);
//     const safePhone = escape(phone || "Not provided");
//     const safeMessage = escape(message);

//     try {

//         // SEND EMAIL
//         await contactMail.sendMail({
//             from: `"Raimonda Laws" <${process.env.CONTACT_MAIL_USER}>`,
//             to: process.env.CONTACT_MAIL_USER,
//             replyTo: safeEmail,
//             subject: `Contact Message - ${safeName}`,
//             html: `
//         <div style="background-color: #050505; color: #cbd5e1; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; line-height: 1.6;">
//             <div style="max-width: 600px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; overflow: hidden; background-color: rgba(255,255,255,0.01);">

//                 <div style="height: 2px; background: linear-gradient(to right, transparent, #3B82F6, transparent);"></div>

//                 <div style="padding: 40px;">
//                     <h1 style="color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; font-style: italic; margin: 0 0 10px 0;">
//                         RAIMONDA
//                     </h1>

//                     <p style="font-family: monospace; font-size: 10px; color: #3B82F6; text-transform: uppercase; letter-spacing: 0.4em; margin: 0 0 40px 0;">
//                         Incoming Email
//                     </p>

//                     <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px; margin-bottom: 40px;">

//                         <p style="margin: 0; font-size: 11px; font-family: monospace; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em;">
//                           Sender Name
//                         </p>
//                         <p style="margin: 5px 0 15px 0; color: #ffffff; font-weight: bold; font-style: italic;">
//                           ${safeName}
//                         </p>

//                         <p style="margin: 0; font-size: 11px; font-family: monospace; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em;">
//                           Sender Email
//                         </p>
//                         <p style="margin: 5px 0 15px 0; color: #3B82F6;">
//                           ${safeEmail}
//                         </p>

//                         <p style="margin: 0; font-size: 11px; font-family: monospace; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em;">
//                           Phone
//                         </p>
//                         <p style="margin: 5px 0 0 0; color: #ffffff;">
//                           ${safePhone}
//                         </p>

//                     </div>

//                     <div style="background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 30px; border-radius: 16px;">
//                         <p style="margin: 0 0 10px 0; font-size: 11px; font-family: monospace; color: #64748b; text-transform: uppercase; letter-spacing: 0.2em;">
//                           Message Content
//                         </p>

//                         <div style="color: #e2e8f0; font-size: 15px; white-space: pre-line; font-weight: 300;">
//                             ${safeMessage}
//                         </div>
//                     </div>

//                     <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
//                         <span style="font-family: monospace; font-size: 9px; color: #475569; text-transform: uppercase; letter-spacing: 0.2em;">
//                             Raimonda Law Contact Form
//                         </span>

//                         <span style="font-family: monospace; font-size: 9px; color: #475569;">
//                             ${new Date().toLocaleString()}
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             <p style="text-align: center; font-family: monospace; font-size: 9px; color: #334155; text-transform: uppercase; letter-spacing: 0.3em; margin-top: 30px;">
//                 Automated Website Message
//             </p>
//         </div>
//       `,
//         });



//         res.json({ success: true });

//     } catch (err) {
//         console.error("Contact email error:", err);
//         res.status(500).json({ error: "Failed to send message" });
//     }
// };

//===============================
import { contactMail } from "../services/contactMailService.js";
import escape from "escape-html";

export const sendContactMessage = async (req, res) => {
    try {
        console.log("CONTACT BODY:", req.body);

        const { name, email, message, phone } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: "Missing fields" });
        }

        const safeName = escape(name);
        const safeEmail = escape(email);
        const safePhone = escape(phone || "Not provided");
        const safeMessage = escape(message);

        await contactMail.sendMail({
            from: `"Raimonda Laws" <${process.env.CONTACT_MAIL_USER}>`,
            to: process.env.CONTACT_MAIL_USER,
            replyTo: safeEmail,
            subject: `Contact Message - ${safeName}`,
            html: `
                <h2>New Contact Message</h2>
                <p><b>Name:</b> ${safeName}</p>
                <p><b>Email:</b> ${safeEmail}</p>
                <p><b>Phone:</b> ${safePhone}</p>
                <p><b>Message:</b><br>${safeMessage}</p>
            `,
        });

        return res.json({ success: true });

    } catch (error) {
        console.error("CONTACT ERROR:", error);
        return res.status(500).json({ success: false, error: "Failed to send message" });
    }
};
