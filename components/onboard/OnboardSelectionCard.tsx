import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

export const OnboardSelectionCard = () => {
  return (
    <div className="w-full cursor-pointer gap-3 px-5 mid-shadow hover:bg-gradient-to-b from-[#1F4DCD] to-[#173BA0] py-5 group h-max flex items-center justify-between">
      <div className="flex items-start gap-3 sm:gap-5">
        <Image
          alt="comp-icon"
          src={"/asset/icons/tools-icon1.svg"}
          width={32}
          height={30}
          className=" group-hover:hidden"
        />
        <Image
          alt="comp-icon"
          src={"/asset/icons/tools-icon1-white.svg"}
          width={32}
          height={30}
          className=" hidden group-hover:block"
        />
        <div className=" leading-[20px]">
          <h1 className="text-black group-hover:text-white font-ProximaNova font-medium">
            Developers
          </h1>
          <p className="text-[#666C77] group-hover:text-white group-hover:opacity-70 text-[14px]">
            Software developers, AI Experts, Data Scientists, DevOps and QA
          </p>
        </div>
      </div>
      <div>
        <BsArrowRight
          size={18}
          className="text-[#455065] group-hover:text-white"
        />
      </div>
    </div>
  );
};
