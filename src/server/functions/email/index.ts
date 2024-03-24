import nodeMailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';

const transporter = nodeMailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

type SendMailProps = {
    to: string;
    mailBody: string;
    subject: string;
};

export const sendMail = async ({ to, mailBody, subject }: SendMailProps) => {
    const mailOptions: MailOptions = {
        from: process.env.EMAIL_ADRESS,
        to,
        subject,
        html: mailBody,
    };
    return await transporter.sendMail(mailOptions);
};
