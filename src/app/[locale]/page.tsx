import { Contact } from '@/components/contact/contact-info';
import { Intro } from '@/components/home/intro';
import { WhoWeAre } from '@/components/home/who-we-are';
import { Youtube } from '@/components/home/youtube';

export default function Page() {
  return (
    <>
      <Intro />
      <WhoWeAre />
      <Youtube />
      <Contact />
    </>
  );
}
