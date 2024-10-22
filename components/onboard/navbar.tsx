import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="h-max md:h-[80px] w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[300px] px-7 flex items-center justify-start md:justify-end h-[60px] md:h-[80px] bg-[#0F256E] md:bg-gradient-to-b from-[#1F4DCD] to-[#173BA0]">
        <h1 className="text-[30px] font-ProximaNova font-semibold text-white">
          Nulgen
        </h1>
      </div>
      <div className="w-full md:w-[84%] px-7 h-[60px] md:h-[80px] flex items-center justify-between bg-[#08164E] md:bg-gradient-to-b from-[#0E246D] to-[#081750]">
        <div>
          <Image
            className=""
            alt="comp-img"
            src={"/asset/svg/comp17-new.svg"}
            width={70}
            height={30}
          />
        </div>
        <div>
          <Image
            className=""
            alt="comp-img"
            src={"/asset/svg/comp15-new.svg"}
            width={70}
            height={30}
          />
        </div>
        <div>
          <Image
            className=""
            alt="comp-img"
            src={"/asset/svg/comp13-new.svg"}
            width={100}
            height={30}
          />
        </div>
        <div className="hidden sm:block">
          <Image
            className=""
            alt="comp-img"
            src={"/asset/svg/comp4-new.svg"}
            width={100}
            height={30}
          />
        </div>
        <div className="hidden xl:block">
          <Image
            className=""
            alt="comp-img"
            src={"/asset/svg/comp5-new.svg"}
            width={80}
            height={30}
          />
        </div>
        <div className="hidden xl:block">
          <Image
            className=""
            alt="comp-img"
            src={"/asset/svg/comp11-new.svg"}
            width={120}
            height={30}
          />
        </div>
        <div className="hidden xl:block">
          <Image
            className=""
            alt="comp-img"
            src={"/asset/svg/comp16-new.svg"}
            width={70}
            height={30}
          />
        </div>
      </div>
    </nav>
  );
};
