import {
  BiLogoApple,
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoPatreon,
  BiLogoPlayStore,
  BiLogoSpotify,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';

export const PUBLIC_MAIL = 'iletisim@sozlerkosku.com';
export const SHARE_URL = 'https://sozlerkosku-share.vercel.app/';
export const DAVA_OKULU_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfOa5RylyYQ17cuL1NFnVl5GajMybNUeiYLLja7ZTzETSeIpA/viewform';

export const CONTACT_DATA: {
  phone: string;
  email: string;
  address: string;
  googlemap: string;
} = {
  phone: '+90 (553) 177-2089',
  email: 'iletisim@sozlerkosku.com',
  address: 'Pınartepe mah. Kubilay 1 sok. No:2 Büyükçekmece/İstanbul',
  googlemap: 'https://maps.google.com.ua/maps?q=Sözler Köşkü&output=embed',
};

export const ROUTES = [
  '',
  '/about',
  '/applications',
  '/contact',
  '/privacy',
  '/blog/merak-edilenler/',
  '/blog/dava-okulu/',
  '/blog/roportaj-ekibi/',
  '/blog/genclik-merkezimiz/',
];

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

export const YOUTUBE_CHANNELS: {
  lang: string;
  name: string;
  id: string;
  defaultSubs: number;
  defaultVideos: number;
  defaultView: number;
}[] = [
  {
    lang: 'tr',
    name: '@sozlerkosku',
    id: 'UCN5t14BCdTIQ-116TxJuBMg',
    defaultSubs: 4380000,
    defaultVideos: 882,
    defaultView: 861082173,
  },
  {
    lang: 'en',
    name: '@TowardsEternity',
    id: 'UCPubBVDCzu7IWWnitlkEsNw',
    defaultSubs: 2730000,
    defaultVideos: 790,
    defaultView: 402563155,
  },
  {
    lang: 'ar',
    name: '@TowardsEternityArabic',
    id: 'UCgTGCJjooFkpX1FOzoLsjVw',
    defaultSubs: 1110000,
    defaultVideos: 700,
    defaultView: 112609824,
  },
  {
    lang: 'ur',
    name: '@TowardsEternityUrduHindi',
    id: 'UCgN5eQUn0eciX4JoaV8PrLg',
    defaultSubs: 698000,
    defaultVideos: 566,
    defaultView: 64779424,
  },
  {
    lang: 'fr',
    name: '@TowardsEternityFrancais',
    id: 'UCBvhgS9IWN1fVaUjeF_D_SQ',
    defaultSubs: 223000,
    defaultVideos: 450,
    defaultView: 21660390,
  },
  {
    lang: 'es',
    name: '@TowardsEternityEspanol',
    id: 'UC_iQV4qC9D-_yaHTrOMA61w',
    defaultSubs: 37600,
    defaultVideos: 125,
    defaultView: 4827151,
  },
  {
    lang: 'ru',
    name: '@TowardsEternityRussian',
    id: 'UC-sp5a6FjwCeVL80dWyyzYg',
    defaultSubs: 425000,
    defaultVideos: 470,
    defaultView: 91612439,
  },
  {
    lang: 'id',
    name: '@TowardsEternityIndonesian',
    id: 'UCpkeqRS00JaweS8lpqRKWYw',
    defaultSubs: 706000,
    defaultVideos: 551,
    defaultView: 75765934,
  },
  {
    lang: 'bn',
    name: '@TEBangla',
    id: 'UCLHhk-N4E_SsehT83_1g-Ww',
    defaultSubs: 831000,
    defaultVideos: 288,
    defaultView: 75121257,
  },
  {
    lang: 'hi',
    name: '@TowardsEternity-Hindi',
    id: 'UCXobZaU5MGSD9tdZIZC5lIw',
    defaultSubs: 18300,
    defaultVideos: 123,
    defaultView: 1260011,
  },
  {
    lang: 'de',
    name: '@TowardsEternityDeutsch',
    id: 'UCXgw5eMqrQ-CsJG6kMNTJUg',
    defaultSubs: 36200,
    defaultVideos: 283,
    defaultView: 3673272,
  },
  {
    lang: 'uz',
    name: '@TowardsEternity-Uzbek',
    id: 'UC8rFHt55QcgqcuNxtFU4C5Q',
    defaultSubs: 30900,
    defaultVideos: 125,
    defaultView: 3557062,
  },
  {
    lang: 'fa',
    name: '@TowardsEternityPersian',
    id: 'UCIQmsB2MW_nExgNb-tkVrrA',
    defaultSubs: 4070,
    defaultVideos: 114,
    defaultView: 360538,
  },
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
    name: 'patreon',
    url: 'https://www.patreon.com/towardseternity',
    icon: BiLogoPatreon,
  },
  {
    name: 'github',
    url: 'https://github.com/sozlerkosku',
    icon: BiLogoGithub,
  },
  {
    name: 'googleplay',
    url: 'https://play.google.com/store/apps/developer?id=Fatih+Ya%C4%9Fc%C4%B1',
    icon: BiLogoPlayStore,
  },
  {
    name: 'appstore',
    url: 'https://apps.apple.com/tr/developer/s%C3%B6zler-k%C3%B6%C5%9Fk%C3%BC/id1782541070',
    icon: BiLogoApple,
  },
];

export interface ISocialIcon {
  name: string;
  url: string;
  icon: React.ElementType;
}
