"use server";

import WelcomeNewsLetterEmail from "../../../../emails/WelcomeNewsLetter";
import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";
import validator from "email-validator";

const apiKey = process.env.SENDGRID_API_KEY;

if (!apiKey) {
  throw Error(
    "no Sendgrid api key environement variable defined. Please check your .env file"
  );
}
sendgrid.setApiKey(apiKey);

export const sendNewsLetterEmail = async (email: string): Promise<void> => {
  if (!validator.validate(email)) {
    throw Error("invalid email address");
  }

  const emailHtml = render(WelcomeNewsLetterEmail({ email: email.trim() }));

  const options = {
    from: "atcheri@gmail.com",
    to: email,
    subject: "Thank you for signing up to our news letter",
    html: emailHtml,
  };

  await sendgrid.send(options);
  console.log("news letter email successfully sent to ", email);
};
