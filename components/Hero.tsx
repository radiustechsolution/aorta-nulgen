import { NulgenButton } from "@/components/button";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const object = [
  {
    id: 0,
    url: "/asset/svg/comp2.svg",
  },
  {
    id: 5,
    url: "/asset/svg/comp12.svg",
  },
];

export const HomeHero = () => {
  const router = useRouter();
  const t = useTranslations("common");

  return (
    <section className="flex pt-[115px] sm:pt-[100px] max-h-max pb-5 lg:pb-0 lg:h-max px-5 xl:px-10 flex-col bg-bgPrimary items-center">
      <div className="max-w-[1220px] flex flex-col lg:flex-row items-start w-full">
        <div className="basis-[100%] text-center lg:text-left lg:basis-[45%] xl:basis-[45%] w-full">
          <h1 className="font-semibold font-ProximaNova text-[35px] sm:text-[42px] xl:text-[48px] text-[#191e28] leading-[48px] sm:leading-[56px] xl:leading-[64px]">
            {t("hero_heading_text")}
          </h1>
          <p className="text-[15px] font-ProximaNova xl:text-[18px] text-[#455065] pt-3 pb-5 xl:pt-5 xl:pb-8 leading-[28px]">
            {t("hero_sub_heading_text")}
          </p>
          <div className="hidden sm:block">
            <NulgenButton
              action={() => router.push(siteConfig.path.paths.flow1)}
              height={52}
              fontSize={20}
              width={264}
            />
          </div>
          <button className="font-semibold font-ProximaNova sm:hidden text-[20px] h-[52px] w-full bg-secondary rounded-[5px] text-white">
            {t("hero_get_started")}
          </button>

          <div className="mt-10">
            <p className="text-[#646A76] lg:hidden text-[14px] tracking-widest uppercase font-ProximaNova">
              {t("hero_trusted_by")}
            </p>
            <div className="flex lg:hidden items-center gap-4 justify-center w-full">
              {object.map((v) => (
                <div key={v.id}>
                  <Image
                    src={v.url}
                    alt="logo-comp"
                    width={100}
                    className="max-w-[110px] opacity-65 "
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden basis-[100%] lg:flex flex-col justify-end lg:basis-[55%] xl:basis-[55%] h-full w-full">
          <Image src="/asset/hero-3.png" alt="hero-img" className="w-[75%]" />
          <div className="absolute p-3 square top-[100px] z-10 right-[0px] w-[275px] xl:w-[300px] h-max bg-white block">
            <p className="text-[#204ecf] text-[14px] font-semibold">
              Anna D. Fischer
            </p>
            <p className=" font-ProximaNova text-[30px] text-black">Berlin</p>

            <p className=" font-ProximaNova text-[14px] text-gray-500">
              {t("hero_testimonial_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
