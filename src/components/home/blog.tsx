import { BlogCard } from './blog-card';
import { getTranslations } from 'next-intl/server';

export const Blog = async () => {
  const t = await getTranslations('Blog');
  return (
    <section className="px-3 max-w-7xl py-20 grow mx-auto antialiased">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <BlogCard
            title={t('MerakEdilenler.Title')}
            description={t('MerakEdilenler.Description')}
            image="/images/blog/metak-edilenler.jpg"
            url="/blog/merak-edilenler"
          />
          <BlogCard
            title={t('DavaOkulu.Title')}
            description={t('DavaOkulu.Description')}
            image="/images/blog/dava-okulu.jpg"
            url="/blog/dava-okulu"
          />
          <BlogCard
            title={t('RoportajEkibi.Title')}
            description={t('RoportajEkibi.Description')}
            image="/images/blog/roportaj-ekibi.jpg"
            url="/blog/roportaj-ekibi"
          />
          <BlogCard
            title={t('GenclikMerkezimiz.Title')}
            description={t('GenclikMerkezimiz.Description')}
            image="/images/blog/genclik-merkezi.jpg"
            url="/blog/genclik-merkezimiz"
          />
        </div>
      </div>
    </section>
  );
};
