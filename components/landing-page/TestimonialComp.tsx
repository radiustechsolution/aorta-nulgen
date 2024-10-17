import Image from "next/image";

export const TestimonialComp = () => {
  return (
    <div className="mt-[100px]">
      {/* Top Comp */}
      <div className="flex items-center gap-10 w-full justify-center">
        <div className="flex items-center gap-3">
          <Image src="/asset/globe.svg" alt="" width={50} height={50} />
          <div className="">
            <p className="text-[20px] font-ProximaNova font-bold">140+</p>
            <p className="text-[12px] text-black">Countries Served</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/asset/clients.svg" alt="" width={50} height={50} />
          <div className="">
            <p className="text-[20px] font-ProximaNova font-bold">25,000+</p>
            <p className="text-[12px] text-black">Clients Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};
