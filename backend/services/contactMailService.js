import nodemailer from "nodemailer";


export const contactMail = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // REQUIRED for port 465
    auth: {
        user: process.env.CONTACT_MAIL_USER,
        pass: process.env.CONTACT_MAIL_PASS,
    },
});

