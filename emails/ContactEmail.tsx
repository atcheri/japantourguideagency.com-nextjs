import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

import { ContactEmailType } from "@/app/contact/types";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

type ContactEmailProps = Pick<ContactEmailType, "message">;

export const ContactEmail = ({ message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Japan Tour Guide Agency: Contact</Preview>

      <Body className="bg-offwhite text-base font-sans">
        <Img
          src={`${baseUrl}/assets/images/jtga-logo.png`}
          width="184"
          height="75"
          alt="Japan Tour Guide Agency"
          className="mx-auto my-20"
        />
        <Container className="bg-white p-45">
          <Heading className="text-center">Thank you for contacting us</Heading>

          <Section>
            <Row>
              <Text className="text-base">
                Please give us 2 to 3 working days to process your request.
              </Text>
            </Row>
          </Section>

          <Section>
            <Row>
              <Heading as="h3" className="text-base text-md">
                Recap of your message:
              </Heading>
              <Text className="italic">{message}</Text>
            </Row>
          </Section>

          <Section className="text-center">
            <Button
              className="bg-brand text-white rounded-lg"
              href={baseUrl}
              pY={12}
              pX={18}
            >
              Visit our website
            </Button>
          </Section>
        </Container>

        {/* <Container className="mt-20">
            <Section>
              <Column className="text-right px-20">
                <Link>Unsubscribe</Link>
              </Column>
              <Column className="text-left">
                <Link>Manage Preferences</Link>
              </Column>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              Netlify, 44 Montgomery Street, Suite 300 San Francisco, CA
            </Text>
          </Container> */}
      </Body>
    </Html>
  );
};

export default ContactEmail;
