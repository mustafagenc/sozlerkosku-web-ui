import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { NAV_LINKS } from '@/utils/constants';
import { SocialIcons } from './social-icons';

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="flex flex-col items-center justify-center w-full py-10 bg-orange-500 dark:bg-gray-800">
      <div className="flex space-x-4 flex-col lg:flex-row items-center justify-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-2xl text-white hover:underline lg:text-xl p-2"
          >
            {t(link.name)}
          </Link>
        ))}
      </div>
      <SocialIcons />
      <div className="flex items-center justify-center space-x-4 mt-10 text-white">
        {t.rich('Shared.copyright', { date: new Date().getFullYear() })}
      </div>
    </footer>
  );
};
