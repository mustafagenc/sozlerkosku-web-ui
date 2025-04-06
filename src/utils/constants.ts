import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoPatreon,
  BiLogoSpotify,
  BiLogoTelegram,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';

export const PUBLIC_MAIL = 'eposta@mustafagenc.info';
export const ROUTES = ['', '/about', '/applications', '/contact', '/privacy'];

export const NAV_LINKS = [
  { name: 'Navigation.home', path: '/' },
  { name: 'Navigation.about', path: '/about/' },
  { name: 'Navigation.applications', path: '/applications/' },
  { name: 'Navigation.contact', path: '/contact/' },
];

//https://github.com/lipis/flag-icons
export const locales = [
  { id: 'ar', name: 'العربية', flag: '/flags/sa.svg' },
  { id: 'bn', name: 'বাংলা', flag: '/flags/bn.svg' },
  { id: 'de', name: 'Deutsch', flag: '/flags/de.svg' },
  { id: 'en', name: 'English', flag: '/flags/us.svg' },
  { id: 'es', name: 'Español', flag: '/flags/es.svg' },
  { id: 'fa', name: 'فارسی', flag: '/flags/ir.svg' },
  { id: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  { id: 'hi', name: 'हिन्दी', flag: '/flags/in.svg' },
  { id: 'id', name: 'Indonesia', flag: '/flags/id.svg' },
  { id: 'ru', name: 'Русский', flag: '/flags/ru.svg' },
  { id: 'tr', name: 'Türkçe', flag: '/flags/tr.svg' },
  { id: 'ur', name: 'اردو', flag: '/flags/pk.svg' },
  { id: 'uz', name: 'Oʻzbek', flag: '/flags/uz.svg' },
];

export const socials = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@sozlerkosku',
    icon: BiLogoYoutube,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/sozlerkosku',
    icon: BiLogoInstagram,
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@sozlerkoskutiktok',
    icon: BiLogoTiktok,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/SozlerKoskuIzmir',
    icon: BiLogoFacebookCircle,
  },
  { name: 'twitter', url: 'https://x.com/sozler_kosku', icon: BiLogoTwitter },
  {
    name: 'spotify',
    url: 'https://open.spotify.com/show/2KOaKlh1uqEn13CMgc3ALQ?si=bfc10ae318ca47d3&nd=1&dlsi=147f12c677634bfd',
    icon: BiLogoSpotify,
  },
  {
    name: 'telegram',
    url: 'https://t.me/sozlerkoskuresmi',
    icon: BiLogoTelegram,
  },
  {
    name: 'patreon',
    url: 'https://www.patreon.com/towardseternity',
    icon: BiLogoPatreon,
  },
];

export interface ISocialIcon {
  name: string;
  url: string;
  icon: React.ElementType;
}
