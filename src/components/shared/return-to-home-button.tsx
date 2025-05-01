import { ChevronLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

export const ReturnToHomeButton = () => {
  const t = useTranslations('Blog');
  return (
    <Link
      href="/#blog"
      className="bg-orange-500 px-6 py-3 hover:bg-orange-400 text-white rounded-lg flex w-60 justify-center items-center gap-3"
    >
      <ChevronLeft size={25} /> {t('ReturnToHome')}
    </Link>
  );
};
