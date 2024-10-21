import { useTranslations } from "next-intl";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";

interface Types {
  pic: string;
  noShadow?: boolean;
  noBottomPadding?: boolean;
}

export const ProfileCard = ({ noShadow, pic, noBottomPadding }: Types) => {
  const t = useTranslations("common");
  return (
    <div className={`${!noShadow && "shadow-md"} w-[250px]`}>
      <div className="relative bg-red-200 h-[250px] w-full ">
        <Image
          layout="fill"
          src={pic}
          alt="profile-card-img"
          objectFit="cover"
        />
      </div>
      <div className={`bg-white ${!noBottomPadding ? "p-4" : "pt-4"}`}>
        <p className="font-ProximaNova font-semibold text-[#204ecf]">
          Carole Crawford, CFA
        </p>

        {/* Verified */}
        <div className="my-2">
          <div className="flex items-center gap-0">
            <VscVerifiedFilled size={14} color="green" />
            <p className="font-ProximaNova font-semibold text-[12px] text-green-700">
              {t("general_verified_expert")}
            </p>
            <p className="font-ProximaNova ml-1 text-[12px] text-green-700">
              In France
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className=" uppercase text-[13px] text-gray-600">
            {t("general_previously_at")}
          </p>
          <Image
            width={150}
            height={40}
            src={"/asset/svg/comp2.svg"}
            alt="at"
            className=""
          />
        </div>
      </div>
    </div>
  );
};
