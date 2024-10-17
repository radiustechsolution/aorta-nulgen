import Image from "next/image";

export const TestimonialComp = () => {
  return (
    <div className="mt-[70px]">
      {/* Top Comp */}
      <div className="flex items-center gap-5 sm:gap-10 w-full justify-center">
        <div className="flex items-center gap-3">
          <Image
            src="/asset/globe.svg"
            className="w-[30px] sm:w-[50px]"
            alt=""
            width={50}
            height={50}
          />
          <div className="">
            <p className="text-[17px] text-black sm:text-[20px] font-ProximaNova font-bold">
              140+
            </p>
            <p className="text-[12px] text-gray-500">Countries Served</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/asset/clients.svg"
            className="w-[30px] sm:w-[50px]"
            alt=""
            width={50}
            height={50}
          />
          <div className="">
            <p className="text-[17px] text-black sm:text-[20px] font-ProximaNova font-bold">
              25,000+
            </p>
            <p className="text-[12px] text-gray-500">Clients Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};
