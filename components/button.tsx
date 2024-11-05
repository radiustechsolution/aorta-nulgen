import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

interface Type {
  height?: number | string;
  width?: number | string;
  fontSize?: number | string;
  bgColor?: string;
  title?: string;
  notRounded?: boolean;
  action?: () => void;
}

export const NulgenButton = ({
  height = 36,
  width = 144,
  fontSize = 14,
  title,
  bgColor,
  notRounded,
  action,
}: Type) => {
  const t = useTranslations("common");
  return (
    <button
      onClick={action && action}
      style={{ height, width, fontSize }}
      className={`font-semibold ${bgColor ? bgColor : "bg-secondary"} ${!notRounded && "rounded-[5px]"} text-white`}
    >
      {title ? title : t("hero_get_started")}
    </button>
  );
};
