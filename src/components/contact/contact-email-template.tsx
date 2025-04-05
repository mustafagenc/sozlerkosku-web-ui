interface ContactFormEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactFormEmailTemplate: React.FC<
  Readonly<ContactFormEmailTemplateProps>
> = ({ name, email, phone, message }) => (
  <div>
    <h1>Website: Contact Form Submission</h1>
    <p>New contact from submission with the following details: </p>
    <p>
      From: <strong>{name}</strong>, Email: {email}, Phone: {phone}
    </p>

    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
