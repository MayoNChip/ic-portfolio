"use server";

import { createTransport, SendMailOptions } from "nodemailer";
import { z } from "zod";

const FormValidation = z.object({
	from: z.string().email(),
	message: z.string().min(8, "Minimun 8 characters"),
});

export async function sendEmail(prevState: any, formData: FormData) {
	console.log(formData.get("from"));
	const transporter = createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "idocodev@gmail.com",
			pass: process.env.GOOGLE_APP_PASSWORD,
		},
	});
	try {
		const data = FormValidation.parse({
			from: formData.get("from"),
			message: formData.get("message"),
		});
		const emailOptions: SendMailOptions = {
			from: "idocodev@gmail.com",
			to: "idocodev@gmail.com",
			subject: "New Potential Empoloyer!",
			//   text: data.message,
			html: `<body> <h1>Sender:</h1><div>${data.from}</div>
	  <br/>
	  <h1>Message:</h1>
	  <br/>
	  <div>${data.message}</div> </body>`,
		};

		transporter.sendMail(emailOptions, (err, info) => {
			if (err) {
				console.log(err);
			} else {
				console.log("message send", info.response);
			}
		});
		return { message: "message sent" };
	} catch (error) {
		console.log(error);
		return { message: "message failed to send" };
	}
}
