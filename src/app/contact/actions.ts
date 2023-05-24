"use server";

import { ContactEmailType, ContactEmailValidator } from "./types";

import ContactEmail from "../../../emails/ContactEmail";
import { NO_REPLY_EMAIL } from "@/constants/misc";
import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;

if (!apiKey) {
  throw Error(
    "no Sendgrid api key environement variable defined. Please check your .env file"
  );
}

sendgrid.setApiKey(apiKey);

export const sendContactEmail = async (
  data: ContactEmailType
): Promise<void> => {
  try {
    ContactEmailValidator.parse(data);
    const { email, message } = data;
    const emailHtml = render(ContactEmail({ message }));

    const options = {
      from: NO_REPLY_EMAIL,
      to: email.trim(),
      subject: "Thank you for contacting our support",
      html: emailHtml,
    };

    await sendgrid.send(options);
    console.log("contact email successfully sent to ", email);
  } catch (err) {
    throw err;
  }
};
