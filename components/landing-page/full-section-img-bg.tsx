import { HiSearchCircle } from "react-icons/hi";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";

export const FullWidthSection = () => {
  return (
    <div
      className="relative flex flex-col items-start px-[50px] sm:px-[100px]  md:px-[150px] lg:px-[200px] justify-center h-[440px] text-white bg-cover bg-center"
      style={{
        backgroundImage: "url(/asset/full-img.jpeg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Quote and Logos */}
      <div className="relative z-10 text-left px-4 md:px-0">
        <RiDoubleQuotesL size={44} color="#204ECF" />
        <p className="text-xl pt-5 md:text-3xl font-ProximaNova font-medium mb-4">
          We’re known as a high-skilled marketplace, and we see an acute pain
          point within that area.
        </p>
        <div className="space-x-4 py-5">
          <Image
            src="/asset/full-logo.svg"
            width={130}
            height={30}
            alt="CNBC Logo"
          />
        </div>
      </div>

      {/* Watch Video Button */}
      <div className="relative z-10 flex items-center space-x-2 mt-4">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <HiSearchCircle size={20} color="blue" />
        </div>
        <p className="text-white font-medium">Know more</p>
      </div>
    </div>
  );
};
