import { SocialIconProps } from 'next-social-icons';

export const NAV_LINKS = [
  { name: 'Navigation.home', path: '/' },
  { name: 'Navigation.about', path: '/about/' },
  { name: 'Navigation.applications', path: '/applications/' },
  { name: 'Navigation.contact', path: '/contact/' },
];

export const locales = [
  { id: 'ar', name: 'العربية', flag: '/flags/sa.svg' },
  { id: 'bn', name: 'বাংলা', flag: '/flags/bn.svg' },
  { id: 'de', name: 'Deutsch', flag: '/flags/de.svg' },
  { id: 'en', name: 'English', flag: '/flags/us.svg' },
  { id: 'es', name: 'Español', flag: '/flags/es.svg' },
  { id: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  { id: 'id', name: 'Indonesia', flag: '/flags/id.svg' },
  { id: 'ru', name: 'Русский', flag: '/flags/ru.svg' },
  { id: 'uz', name: 'Oʻzbek', flag: '/flags/uz.svg' },
  { id: 'tr', name: 'Türkçe', flag: '/flags/tr.svg' },
  { id: 'ur', name: 'اردو', flag: '/flags/pk.svg' },
];

export const socials: ISocialIcon[] = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@sozlerkosku',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/sozlerkosku',
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@sozlerkoskutiktok',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/SozlerKoskuIzmir',
  },
  { name: 'twitter', url: 'https://x.com/sozler_kosku' },
];

export interface ISocialIcon {
  name: SocialIconProps['platform'];
  url: string;
}
