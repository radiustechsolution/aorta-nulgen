import Image from "next/image";
import { RatingComp } from "../rating";

interface Types {
  id: number;
  title: string;
  icon: string;
  rating: number;
  duration: number;
  level: string;
}

export const CoursesDisplayComp = ({
  title,
  data,
}: {
  title: string;
  data: Types[];
}) => {
  return (
    <div className="flex flex-col gap-7 w-full">
      <p className="text-[24px] px-5 lg:px-0 font-[500] leading-[32px] text-[#0b0b0b]">
        {title}
      </p>
      {/* Wrapper with snapping and horizontal scroll */}
      <div className="flex items-center gap-3 overflow-x-auto w-full xl:scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-3 w-full xl:flex-nowrap">
          {data.map((v) => (
            <div
              key={v.id}
              className={`h-[320px] ${v.id == 0 && "ml-5 xl:ml-0"} rounded-md cursor-pointer relative min-w-[190px] xl:flex-grow xl:basis-1/6 bg-gray-200 snap-none group overflow-hidden`}
            >
              <Image
                objectFit="cover"
                src={v.icon}
                quality={40}
                className="rounded-md"
                layout="fill"
                alt={v.title}
              />
              {/* Overlay */}
              <div className="absolute z-20 inset-0 bg-gradient-to-b from-black/50 to-black/20 group-hover:from-black/20 group-hover:to-black/50 transition-all duration-200 ease-in" />
              {/* Course Details */}
              <div className="h-max w-full p-2 bg-[#171953c1] absolute bottom-0 justify-between">
                {/* Title */}
                <p className=" relative z-30 text-white font-semibold text-[16px]">
                  {v.title}
                </p>
                {/* Rating */}
                <div className=" relative my-2 z-30">
                  <RatingComp color="#BDEA05" rating={v.rating} />
                </div>
                {/* Duration & Level */}
                <div className="z-30 relative flex items-center gap-1">
                  <p className="text-[13px] text-gray-200">
                    {v.duration} Months,
                  </p>
                  <p className="text-[13px] text-gray-200">{v.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
