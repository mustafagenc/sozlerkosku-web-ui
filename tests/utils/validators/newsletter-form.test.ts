import { NewsletterFormSchema } from '../../../src/utils/validators/newsletter-form';

// filepath: src/utils/validators/newsletter-form.test.ts

describe('NewsletterFormSchema', () => {
  const mockTranslation = (key: string) => {
    const translations: Record<string, string> = {
      'Form.EmailRequired': 'Email is required',
      'Form.EmailInvalid': 'Invalid email format',
    };
    return translations[key] || key;
  };

  const schema = NewsletterFormSchema(mockTranslation);

  it('should validate a valid email', () => {
    const validData = { email: 'test@example.com' };
    expect(() => schema.parse(validData)).not.toThrow();
  });

  it('should throw an error for missing email', () => {
    const invalidData = { email: '' };
    expect(() => schema.parse(invalidData)).toThrow('Email is required');
  });

  it('should throw an error for invalid email format', () => {
    const invalidData = { email: 'invalid-email' };
    expect(() => schema.parse(invalidData)).toThrow('Invalid email format');
  });
});
