import * as React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { domain } from "@/constants/routes";

interface WelcomeNewsLetterEmailProps {
  email: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeNewsLetterEmail = ({
  email,
}: WelcomeNewsLetterEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Japan Tour Guide Agency"
          style={logo}
        />
        <Text style={paragraph}>Hello {email},</Text>
        <Text style={paragraph}>Welcome to the JTGA newsletter.</Text>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href={domain}>
            Discover more
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The JTGA team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Here comes the address - Tokyo, Japan</Text>
      </Container>
    </Body>
  </Html>
);

WelcomeNewsLetterEmail.PreviewProps = {
  email: "visitor@fromabroad.com",
} as WelcomeNewsLetterEmailProps;

export default WelcomeNewsLetterEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#1a56db",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
