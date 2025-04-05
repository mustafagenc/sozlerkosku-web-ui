'use client';

import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Loader } from '@/components/icons/loader';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from '@/i18n/navigation';
import { sendEmail } from '@/utils/apis/resend';
import {
  ContactFormSchema,
  TContactFormSchema,
} from '@/utils/validators/contact-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const ContactForm = () => {
  const t = useTranslations('Contact');

  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(ContactFormSchema(t)),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const handleFormSubmit: SubmitHandler<TContactFormSchema> = async (
    data: TContactFormSchema
  ) => {
    const { success } = await sendEmail(data);
    if (!success) return toast.error('Something went wrong!');
    toast.success('Message sent successfully!');
    form.reset();
  };

  return (
    <section className="flex flex-col gap-8 w-full max-w-4xl px-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-400">
                      {t('Form.Name')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        autoFocus
                        placeholder={t('Form.NameEnter')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-rose-500" />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-400">
                      {t('Form.Email')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder={t('Form.EmailEnter')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-rose-500" />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-400">
                      {t('Form.Phone')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="phone"
                        placeholder={t('Form.PhoneEnter')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-rose-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-400">
                      {t('Form.Message')}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={8}
                        id="message"
                        placeholder={t('Form.MessageEnter')}
                        className="max-h-72"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-rose-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full disabled:opacity-50 bg-orange-500"
            >
              {form.formState.isSubmitting ? (
                <Loader className="mr-2 size-5 animate-spin" />
              ) : null}
              {t('Form.Send')}
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {t.rich('Privacy', {
              PrivacyPolicy: (chunks) => (
                <Link
                  href="/privacy"
                  className="font-bold hover:text-foreground hover:underline hover:underline-offset-2 hover:transition"
                  target="_blank"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </form>
      </Form>
    </section>
  );
};
