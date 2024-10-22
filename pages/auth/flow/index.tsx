import { OnboardSelectionCard } from "@/components/onboard/OnboardSelectionCard";
import AuthLayout from "@/layouts/auth";

const Flow1 = () => {
  return (
    <AuthLayout>
      <div className="max-w-[800px] mt-[35px] flex-1 w-full">
        {/* Details */}
        <div className="w-full flex items-center px-5 bg-[#EDF1FD] h-max py-5 rounded-md border-l-2 border-[#2552D0]">
          <p className="text-[13px] text-[#262d3d] leading-[20px]">
            Thanks for your interest in hiring through Toptal! Before we get
            started, we&apos;d like to ask a few questions to better understand
            your business needs.
          </p>
        </div>

        {/* Control */}
        <div className="flex mt-8 flex-col gap-2">
          <p className="text-[#90949D] font-semibold text-[14px] font-ProximaNova">
            STEP 1
          </p>
          <h1 className="text-[18px] md:text-[24px] font-ProximaNova font-semibold text-black">
            What role would you like to hire?
          </h1>
        </div>

        {/* Selections */}
        <div className="mt-10 flex flex-col gap-3">
          <OnboardSelectionCard />
          <OnboardSelectionCard />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Flow1;
