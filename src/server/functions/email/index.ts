
import nodeMailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';



const transporter = nodeMailer.createTransport({
	service: process.env.EMAIL_SERVICE,
	secure: true,
	auth: {
		user: process.env.EMAIL_ADRESS,
		pass: process.env.EMAIL_PASSWORD,
	}
});


export const sendMail = async (to: string, html: string) => {
	const mailOptions: MailOptions = {
		from: process.env.EMAIL_ADRESS,
		to,
		subject: process.env.EMAIL_SUBJECT,
		html
	};
	return await transporter
		.sendMail(mailOptions);
};



