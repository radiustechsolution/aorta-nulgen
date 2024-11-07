import { Button } from "@nextui-org/button";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const CourseHero = () => {
  return (
    <section className="flex  px-5 xl:px-10 flex-col bg-[#F0F5FF] items-center">
      <div className="max-w-[1250px] flex h-max py-16 lg:py-0 lg:h-[610px] flex-col lg:flex-row items-center w-full">
        <div className="w-full lg:w-[52%] sm:pl-10 lg:pl-0">
          <p className="text-[#0b0b0b] text-[20px] font-[600] leading-[32px]">
            Udacity for Nations
          </p>
          <h1 className="text-[#0b0b0b] text-[48px] py-[20px] font-[500] leading-[52px]">
            Job-ready Digital Talent: <br /> Economic Growth
          </h1>
          <p className="text-[18px] opacity-75 leading-[28px] text-[#0b0b0b]">
            Udacity creates job opportunities with GDP impact for nations
            embracing the global digital era.
          </p>
          <Button
            radius="none"
            className="w-full lg:w-[180px] text-[16px] mt-[45px] text-white h-[48px] bg-[#2016FF]"
            endContent={<HiOutlineArrowLongRight color="white" />}
          >
            Learn More
          </Button>
        </div>
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-end">
          <div className="hidden lg:block">
            <Image
              src={"/asset/course-bg-hero.png"}
              alt="course-bg"
              height={570}
              width={570}
              quality={40}
              priority
            />
          </div>
          <div className="lg:hidden mt-16">
            <Image
              src={"/asset/course-bg-hero.png"}
              alt="course-bg"
              height={400}
              width={400}
              quality={40}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
