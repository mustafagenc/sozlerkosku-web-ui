import { SocialIconProps } from 'next-social-icons';

export const NAV_LINKS = [
  { name: 'Navigation.home', path: '/' },
  { name: 'Navigation.about', path: '/about/' },
  { name: 'Navigation.applications', path: '/applications/' },
  { name: 'Navigation.contact', path: '/contact/' },
];

export const locales = [
  { id: 'ar', name: 'العربية' },
  { id: 'de', name: 'Deutsch' },
  { id: 'en', name: 'English' },
  { id: 'fr', name: 'Français' },
  { id: 'ru', name: 'Русский' },
  { id: 'tr', name: 'Türkçe' },
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
