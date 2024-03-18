
import nodeMailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';



const transporter = nodeMailer.createTransport({
	service: process.env.EMAIL_SERVICE,
	secure: true,
	auth: {
		user: process.env.EMAIL_ADRESS,
		pass: process.env.EMAIL_PASSWORD,
<<<<<<< HEAD
=======
	},
	tls: {
		rejectUnauthorized: false
>>>>>>> 5b9ed56 (modify modules)
	}
});


type SendMailProps = {
	to: string,
	html: string,
	subject: string
};


export const sendMail = async ({ to, html, subject }: SendMailProps) => {
	const mailOptions: MailOptions = {
		from: process.env.EMAIL_ADRESS,
		to,
		subject,
		html
	};
	return await transporter
		.sendMail(mailOptions);
};



