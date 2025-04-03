import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export const Intro = () => {
  const t = useTranslations("Home");
  return (
    <section>
      <div className="flex flex-col justify-center text-center">
        <div>
          <h1 className="mb-4 no-underline text-7xl font-bold">
            {t("Meta.title")}
          </h1>
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="mb-6 text-xl">
            {t.rich("intro", {
              br: () => <br />,
            })}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href="/#who-are-we"
            className="border-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-500 hover:text-white py-3 px-6 rounded-full text-lg ml-4"
          >
            {t("who-are-we")}
          </Link>
          <Link
            href="/about"
            className="border-1 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-6 rounded-full text-lg ml-4"
          >
            {t("what-we-do-here")}
          </Link>
        </div>
      </div>
    </section>
  );
};
