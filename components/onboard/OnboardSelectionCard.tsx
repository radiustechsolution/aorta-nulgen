import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Types {
  title: string;
  subtitle: string;
  path?: any;
}

export const OnboardSelectionCard = ({ title, path, subtitle }: Types) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const goNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      path ? router.push(path) : setIsLoading(false);
    }, 2000);
  };

  return (
    <div
      role="presentation"
      onClick={goNext}
      className="w-full cursor-pointer p-4 sm:p-5 mid-shadow hover:bg-gradient-to-b from-[#1F4DCD] to-[#173BA0] group h-max flex items-center justify-between"
    >
      <div className="flex items-start gap-3 sm:gap-5">
        <Image
          alt="comp-icon"
          src={"/asset/icons/tools-icon1.svg"}
          width={32}
          height={30}
          className="group-hover:hidden"
        />
        <Image
          alt="comp-icon"
          src={"/asset/icons/tools-icon1-white.svg"}
          width={32}
          height={30}
          className="hidden group-hover:block"
        />
        <div className=" leading-[20px]">
          <h1 className="text-black group-hover:text-white font-ProximaNova font-medium">
            {title}
          </h1>
          <p className="text-[#666C77] group-hover:text-white group-hover:opacity-70 text-[12px] sm:text-[14px]">
            {subtitle}
          </p>
        </div>
      </div>
      {!isLoading ? (
        <BsArrowRight
          size={25}
          className="text-[#455065] group-hover:text-white"
        />
      ) : (
        <Spinner size="sm" />
      )}
    </div>
  );
};
