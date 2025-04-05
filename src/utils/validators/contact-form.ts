import { z } from 'zod';

export const ContactFormSchema = (t: (key: string) => string) => {
  return z.object({
    name: z
      .string()
      .min(1, { message: t('Form.NameRequired') })
      .min(2, { message: t('Form.NameLength') }),
    email: z
      .string()
      .min(1, { message: t('Form.EmailRequired') })
      .email(t('Form.EmailInvalid')),
    phone: z.string().optional(),
    message: z
      .string()
      .min(1, { message: t('Form.MessageRequired') })
      .min(10, { message: t('Form.MessageLength') }),
  });
};

export type TContactFormSchema = z.infer<ReturnType<typeof ContactFormSchema>>;
