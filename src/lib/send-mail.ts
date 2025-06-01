"use server";
import { contact } from "@/lib/templates/contact";
import nodemailer from "nodemailer";

export async function sendMail({
   
    sendTo,
    templateName,
    subject,
    variables,
}: {
    sendTo: string;
    templateName: string;
    subject: string;
    variables: any;
}) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: process.env.MAIL_SECURE === "true",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        variables.year = new Date().getFullYear();
        const html = contact(variables);

        let info = await transporter.sendMail({
            from: `"Sohan PortFolio" <${process.env.MAIL_USER}>`,
            to: sendTo,
            subject: subject,
            text: `Hello ${variables.name}, Welcome to our platform!`,
            html: html,
        });

        // console.log("Message sent: %s", info.messageId);
        return { status: "success", message: "Email sent successfully!" };
    } catch (error) {
        console.error("Email sending error:", error);
        return { status: "error", message: "Failed to send email", error };
    }
}
