import { ContactFormSchema } from '../../../src/utils/validators/contact-form';

// filepath: src/utils/validators/contact-form.test.ts

describe('ContactFormSchema', () => {
  const t = (key: string) => key; // Mock translation function

  const schema = ContactFormSchema(t);

  it('should validate correct input', () => {
    const validData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      message: 'This is a valid message.',
    };

    expect(() => schema.parse(validData)).not.toThrow();
  });

  it('should fail if name is missing', () => {
    const invalidData = {
      email: 'john.doe@example.com',
      phone: '1234567890',
      message: 'This is a valid message.',
    };

    expect(() => schema.parse(invalidData)).toThrowError();
  });

  it('should fail if email is missing', () => {
    const invalidData = {
      name: 'John Doe',
      phone: '1234567890',
      message: 'This is a valid message.',
    };

    expect(() => schema.parse(invalidData)).toThrow();
  });

  it('should fail if message is missing', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
    };

    expect(() => schema.parse(invalidData)).toThrow();
  });

  it('should fail if email is invalid', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      phone: '1234567890',
      message: 'This is a valid message.',
    };

    expect(() => schema.parse(invalidData)).toThrow('Form.EmailInvalid');
  });

  it('should fail if name is too short', () => {
    const invalidData = {
      name: 'J',
      email: 'john.doe@example.com',
      phone: '1234567890',
      message: 'This is a valid message.',
    };

    expect(() => schema.parse(invalidData)).toThrow('Form.NameLength');
  });

  it('should fail if message is too short', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      message: 'Short',
    };

    expect(() => schema.parse(invalidData)).toThrow('Form.MessageLength');
  });

  it('should pass if phone is missing (optional field)', () => {
    const validData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'This is a valid message.',
    };

    expect(() => schema.parse(validData)).not.toThrow();
  });
});
