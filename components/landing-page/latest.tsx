import { Latest } from "@/lib/objects";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export const LatestPublication = () => {
  return (
    <div className="w-full px-5 sm:px-10 md:px-0 grid grid-cols-1 lg:grid-cols-[44%,56%] gap-5 h-auto mt-10">
      {/* Left */}
      <div className="h-[380px] md:h-[500px] flex flex-col cursor-pointer group lg:h-[750px] shadow-md hover:shadow-lg bg-white w-full">
        {/* Heading */}
        <div className="h-[50%] md:h-[35%] relative">
          <div className=" h-[80%] relative w-full">
            <Image
              alt={Latest[0][0].title}
              src={Latest[0][0].bgImage}
              layout="fill"
              objectFit="cover"
              className="transition duration-300 ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
          </div>

          <Image
            className=" absolute bottom-5 left-5"
            src={Latest[0][0].image}
            alt={Latest[0][0].title}
            width={75}
            height={80}
          />
        </div>
        {/* Content */}
        <div className="px-5 flex-1 flex justify-between flex-col">
          <div>
            <div className="flex flex-col gap-3">
              <p className="text-[13px] text-secondaryBlue">
                {Latest[0][0].category} {">"} {Latest[0][0].subcategory}
              </p>
              <h1 className="text-[18px] md:text-[24px] font-[600] leading-[25px] md:leading-[32px] text-black group-hover:text-secondaryBlue font-sroximaNova">
                {Latest[0][0].title}
              </h1>
              <p className="text-[13px]">
                <span className="opacity-70">By</span>{" "}
                <span className="text-black font-medium">
                  {Latest[0][0].author}
                </span>
              </p>
            </div>
            <p className="hidden md:block text-gray-600 mt-10 text-[15px]">
              {Latest[0][0].description}
            </p>
          </div>

          {/* Flex */}
          <div className="hidden mb-9 md:flex items-center mt-5 justify-between">
            <p className="text-[12px] text-gray-500">{Latest[0][0].time}</p>
            <div className="items-center gap-3 hidden group-hover:flex">
              <p className="text-[12px] text-secondaryBlue">CONTINUE READING</p>
              <FaArrowRightLong className="text-secondaryBlue" />
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5">
        {Latest[1].map((v) => (
          <div
            key={v.id}
            className="cursor-pointer h-[380px] md:h-[300px] lg:h-auto group shadow-md hover:shadow-lg"
          >
            {/* Heading */}
            <div className="h-[50%] md:h-[40%] relative">
              <div className=" h-[80%] relative w-full">
                <Image
                  alt={v.title}
                  src={v.bgImage}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
              </div>

              <Image
                className=" absolute bottom-0 left-5"
                src={v.image}
                alt={v.title}
                width={75}
                height={80}
              />
            </div>
            {/* Content */}
            <div className="px-5 flex-1 mt-3 flex justify-between flex-col">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="text-[13px] text-secondaryBlue">
                    {v.category} {">"} {v.subcategory}
                  </p>
                  <h1 className="text-[18px] font-[600] leading-[25px] text-black group-hover:text-secondaryBlue font-sroximaNova">
                    {v.title}
                  </h1>
                  <p className="text-[13px]">
                    <span className="opacity-70">By</span>{" "}
                    <span className="text-black font-medium">{v.author}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
