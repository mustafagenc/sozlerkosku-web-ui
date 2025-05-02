import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/navigation';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

export const BlogCard = async ({
  image,
  title,
  description,
  url,
}: BlogCardProps) => {
  const t = await getTranslations('Blog');
  return (
    <Card className="rounded-3xl border-0 dark:border hover:dark:bg-gray-950/60 transition-all duration-300 ease-in-out">
      <CardContent>
        <Link
          href={url}
          className="flex flex-col items-start gap-3 pt-6 md:pt-8 text-left"
        >
          <div className="w-full h-full overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="rounded-3xl w-full h-68 object-cover object-center hover:scale-110 transition-all ease-linear"
            />
          </div>
          <h5 className="text-2xl font-bold text-orange-400">{title}</h5>
          <p className="text-foreground">{description}</p>
          <span className="text-sm text-gray-500 hover:underline">
            {t('ReadMore')}
          </span>
        </Link>
      </CardContent>
    </Card>
  );
};
