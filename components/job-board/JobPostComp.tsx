import { Key } from "react";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { PiCaretRightLight } from "react-icons/pi";
import { useRouter } from "next/router";

export const JobPostComp = ({ data }: any) => {
  const router = useRouter();

  // Navigate to a Job
  const handleNavigate = () => {
    router.push(`/jobs/${data.id}`);
  };

  return (
    <div
      role="presentation"
      className="shadow-sm cursor-pointer flex items-center border border-gray-100 justify-between p-4"
      onClick={handleNavigate}
    >
      <div className="flex items-start gap-4">
        <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px] rounded-md shrink-0 flex items-center justify-center bg-[#3670FF]">
          <BiLogoCPlusPlus size={40} color="white" />
        </div>
        {/* Text Content */}
        <div className="flex flex-col gap-[3px]">
          <p className="text-[16px] md:text-[18px] font-[500] text-[#090925]">
            {data.position}
          </p>
          <p className="text-[14px] md:text-[16px] font-[500] text-[#3f495a]">
            {data.company}
          </p>
          <p className="text-[14px] text-[#6c6c6c]">{data.location}</p>
          <div className="flex items-center flex-wrap gap-2">
            {data.categories.map((v: Key | null | undefined) => (
              <p
                className="text-[13px] cursor-pointer text-gray-500 border border-gray-200 rounded-full px-4 py-[3px]"
                key={v}
              >
                {v}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden items-center lg:flex gap-1">
        <p className="text-[#4900FF] text-[14px] font-semibold">
          {data.action_label}
        </p>
        <PiCaretRightLight size={13} color="#4900FF" />
      </div>
    </div>
  );
};
