import { useTranslations } from "next-intl";
import Image from "next/image";

const object = [
  {
    id: 0,
    url: "/asset/svg/comp11.svg",
  },
  {
    id: 1,
    url: "/asset/svg/comp2.svg",
  },
  {
    id: 2,
    url: "/asset/svg/comp3.svg",
  },
  {
    id: 3,
    url: "/asset/svg/comp4.svg",
  },
  {
    id: 4,
    url: "/asset/svg/comp11.svg",
  },
  {
    id: 5,
    url: "/asset/svg/comp6.svg",
  },
];

export const TrustedByMany = () => {
  const t = useTranslations("common");
  return (
    <div className="bg-bgPrimaryFaint flex flex-col items-center px-5 xl:px-10 w-full">
      <div className="max-w-[1220px] w-full flex items-center h-[90px] gap-8 ">
        <div className="w-[250px]">
          <p className="text-[#646A76] uppercase leading-6 font-ProximaNova text-[14px]">
            {t("trusted_by_leading")}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          {object.map((v) => (
            <div key={v.id}>
              <Image
                src={v.url}
                alt="logo-comp"
                width={160}
                className="max-w-[110px] opacity-65 "
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
