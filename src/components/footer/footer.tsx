import { Link } from '@/i18n/navigation';
import { NAV_LINKS, socials } from '@/utils/constants';
import { useTranslations } from 'next-intl';
import { SocialIcon } from 'next-social-icons';

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="flex flex-col items-center justify-center w-full py-10 bg-orange-500 dark:bg-gray-800">
      <div className="hidden sm:ml-6 sm:block content-center items-center">
        <div className="flex space-x-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-white text-lg hover:underline hover:underline-offset-4"
            >
              {t(link.name)}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-4 mt-10">
          {socials.map((link) => (
            <SocialIcon
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              size={64}
              platform={link.name}
              bgColor="white"
              fgColor="black"
            />
          ))}
        </div>
        <div className="flex items-center justify-center space-x-4 mt-10 text-white">
          {t.rich('Shared.copyright', { date: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
};
