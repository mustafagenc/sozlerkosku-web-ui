import { TContact } from '@/types/TContact';
import { promises as fs } from 'fs';
import path from 'path';

export async function getContactData(): Promise<TContact> {
  const filePath = path.join(process.cwd(), 'content', 'data', 'contact.json');
  const file = await fs.readFile(filePath, 'utf8');
  const contactData: TContact = JSON.parse(file);
  return contactData;
}
