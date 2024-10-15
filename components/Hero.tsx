import { Image } from "@nextui-org/react";
import { NulgenButton } from "./button";

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
  return (
    <section className="flex pt-[115px] sm:pt-[100px] max-h-max pb-5 lg:pb-0 lg:h-max px-5 xl:px-10 flex-col bg-bgPrimary items-center">
      <div className="max-w-[1220px] flex flex-col lg:flex-row items-start w-full">
        <div className="basis-[100%] text-center lg:text-left lg:basis-[45%] xl:basis-[45%] w-full">
          <h1 className="font-semibold font-ProximaNova text-[35px] sm:text-[42px] xl:text-[48px] text-[#191e28] leading-[48px] sm:leading-[56px] xl:leading-[64px]">
            Hire the{" "}
            <span className="underline underline-offset-8 cursor-pointer hover:no-underline">
              Top <span className=" tracking-tighter">3%</span>
            </span>{" "}
            of <br /> Freelance Talent
          </h1>
          <p className="text-[15px] font-ProximaNova xl:text-[18px] text-[#455065] pt-3 pb-5 xl:pt-5 xl:pb-8 leading-[28px]">
            Toptal is an exclusive network of the top freelance software
            developers, designers, marketing experts, finance experts, product
            managers, and project managers in the world. Top companies hire
            Toptal freelancers for their most important projects.
          </p>
          <div className="hidden sm:block">
            <NulgenButton height={52} fontSize={20} width={264} />
          </div>
          <button className="font-semibold font-ProximaNova sm:hidden text-[20px] h-[52px] w-full bg-secondary rounded-[5px] text-white">
            Hire Top Talent
          </button>

          <div className="mt-10">
            <p className="text-[#646A76] text-[14px] tracking-widest uppercase font-ProximaNova">
              Trusted by leading brands and startups
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
          <Image
            src="/asset/images-1-1.png"
            alt="hero-img"
            className="w-[75%]"
          />
          <div className="absolute p-3 square top-[100px] z-10 right-[0px] w-[275px] xl:w-[300px] h-max bg-white block">
            <p className="text-[#204ecf] text-[14px] font-semibold">
              Anna D. Lukasiak
            </p>
            <p className=" font-ProximaNova text-[30px] text-black">
              Content Here
            </p>

            <p className=" font-ProximaNova text-[14px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
              neque sit consequatur eum aliquam, ullam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
