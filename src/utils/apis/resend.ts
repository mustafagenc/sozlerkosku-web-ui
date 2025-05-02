'use server';
import { CreateContactResponse, Resend } from 'resend';
import { z } from 'zod';

import { ContactFormEmailTemplate } from '@/components/contact/contact-email-template';
import { PUBLIC_MAIL } from '@/utils/constants';
import { env } from '@/utils/env';
import { TContactFormSchema } from '@/utils/validators/contact-form';
import { TNewsletterFormSchema } from '@/utils/validators/newsletter-form';

const resend = new Resend(env.RESEND_API_KEY);

type TResponse = {
  error: { message: string } | null;
  success: boolean;
};

type TSendEmailResponse = TResponse;

//ToDo:https://github.com/amannn/next-intl/discussions/437
export async function saveContactsResend(
  data: TNewsletterFormSchema
): Promise<CreateContactResponse> {
  const { email } = data;
  return await resend.contacts.create({
    email,
    audienceId: env.RESEND_AUDIENCE_ID,
  });
}

async function sendEmailResend(data: TContactFormSchema) {
  const senderEmail = env.RESEND_FROM_EMAIL;
  const { email, name, message, phone } = data;
  return await resend.emails.send({
    from: senderEmail,
    to: PUBLIC_MAIL,
    cc: [senderEmail, email],
    subject: 'Website: Contact Form Submission',
    text: `${name}<br />${email}<br />${message}`,
    react: await ContactFormEmailTemplate({
      name,
      email,
      phone: phone ?? '',
      message,
    }),
  });
}

export async function sendEmail(
  data: TContactFormSchema
): Promise<TSendEmailResponse> {
  const schema = z.object({
    name: z.string().min(1).min(2),
    email: z.string().min(1).email(),
    message: z.string().min(1),
  });

  const validatedResponse = schema.safeParse(data);
  if (!validatedResponse.success) {
    const errorMessage = JSON.stringify(validatedResponse.error.format());
    return { error: { message: errorMessage }, success: false };
  }

  try {
    const { data: resendData, error: resendError } = await sendEmailResend(
      validatedResponse.data
    );
    if (!resendData || resendError) {
      return { success: false, error: { message: String(resendError) } };
    }

    return { success: true, error: null };
  } catch (error) {
    return {
      success: false,
      error: {
        message: error instanceof Error ? error.message : String(error),
      },
    };
  }
}
