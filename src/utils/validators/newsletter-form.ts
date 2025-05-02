import { z } from 'zod';

export const NewsletterFormSchema = (t: (key: string) => string) => {
  return z.object({
    email: z
      .string()
      .min(1, { message: t('Form.EmailRequired') })
      .email(t('Form.EmailInvalid')),
  });
};

export type TNewsletterFormSchema = z.infer<
  ReturnType<typeof NewsletterFormSchema>
>;
