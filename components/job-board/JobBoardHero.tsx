import Image from "next/image";
import { CiSearch } from "react-icons/ci";
const logo = [
  { src: "/asset/job/comp1.svg", width: 100 },
  { src: "/asset/job/comp2.svg", width: 100 },
  { src: "/asset/job/comp7.svg", width: 70 },
  { src: "/asset/job/comp4.svg", width: 100 },
];

export const JobBoardHero = () => {
  return (
    <div className="relative px-5 xl:px-0 h-[440px] w-full">
      {/* Image as background */}
      <div className="absolute inset-0">
        <Image
          src="/asset/job/hero-bg.jpg"
          layout="fill"
          quality={40}
          priority
          objectFit="cover"
          alt="hero-bg-jobboard"
          className="z-0"
        />
      </div>

      {/* Content on top of the background */}
      <div className="relative z-10 flex flex-col w-full items-center justify-center h-full">
        <div className="max-w-[1100px] relative w-full">
          <div className="max-w-[430px]">
            <p className="text-[#376fff] mb-1 uppercase text-[13px] leading-[15.99px] font-[700]">
              Best tech jobs
            </p>
            <p className="text-[30px] sm:text-[36px] max-w-[380px] text-[#232535] font-[600] leading-[39px] sm:leading-[47.988px]">
              Find your perfect job in the tech industry
            </p>
            <p className="text-[15px] my-2 sm:my-4 text-[#484b62] max-w-[400px] leading-[26px] font-[400]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex items-center w-full justify-between">
              {logo.map((v, i) => (
                <Image
                  key={i}
                  src={v.src}
                  width={v.width}
                  className={`w-[65px] sm:w-[${v.width}px]`}
                  height={30}
                  alt="comp-logo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="absolute bottom-[-200px] md:bottom-[-85px] lg:bottom-[-50px] xl:bottom-[-45px] z-10 left-0 px-5 xl:px-0 flex flex-col w-full items-center">
        <div className="max-w-[1100px] w-full">
          <div className="w-full p-7 shadow-md rounded-md bg-white border border-gray-100 flex-col lg:flex-row gap-4 flex items-center justify-between">
            <div className="border border-gray-200 px-2 h-[42px] md:h-[38px] rounded-md flex items-center justify-between w-full lg:w-[30%]">
              <div className="w-[75%] flex items-center ">
                <CiSearch color="#A0A2B3" />
                <input
                  placeholder="Search for jobs"
                  type="text"
                  name=""
                  className="text-[14px] bg-transparent text-black placeholder-[#6F7185] px-2 w-[90%]"
                  id=""
                />
              </div>
              <button className="h-[77%] text-white font-[600] rounded-md w-[25%] bg-[#4E64FF] text-[13px]">
                Search
              </button>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full border border-gray-200 h-[42px] md:h-[38px] rounded-md"></div>
              <div className="w-full border border-gray-200 h-[42px] md:h-[38px] rounded-md"></div>
              <div className="w-full border border-gray-200 h-[42px] md:h-[38px] rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
