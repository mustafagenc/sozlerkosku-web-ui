import Link from 'next/link';

import { socials } from '@/utils/constants';

import { InfoTooltip } from '../shared/info-tooltip';

export const SocialIcons = () => {
  return (
    <div className="grid grid-cols-5 lg:grid-cols-10 gap-4 mt-10 place-items-center">
      {socials.map((link) => (
        <InfoTooltip
          key={link.name}
          label={link.name}
          side="bottom"
          className="text-xs"
        >
          <Link
            href={link.url}
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl text-white hover:bg-white hover:text-orange-400 dark:hover:bg-gray-950 dark:hover:text-white p-1 transition-colors duration-200 ease-in-out"
            aria-label={link.name}
            target="_blank"
          >
            {link.icon({
              className: 'w-9 h-9',
            })}
          </Link>
        </InfoTooltip>
      ))}
    </div>
  );
};
