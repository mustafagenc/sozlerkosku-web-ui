import { Contact } from '@/components/contact/contact-info';
import { Blog } from '@/components/home/blog';
import { Gallery } from '@/components/home/gallery';
import { Intro } from '@/components/home/intro';
import { WhoWeAre } from '@/components/home/who-we-are';
import { Youtube } from '@/components/home/youtube';

export default async function Page() {
  return (
    <>
      <Intro />
      <WhoWeAre />
      <Youtube />
      <Gallery />
      <Blog />
      <Contact />
    </>
  );
}
