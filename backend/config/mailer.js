import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT == 465, // true for 465, false for others
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export default async function sendMail({ to, subject, html }) {
    await transporter.sendMail({
        from: `"Lovely" <${process.env.SMTP_FROM}>`,
        to,
        subject,
        html,
    });
}
