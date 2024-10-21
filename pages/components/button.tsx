import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

interface Type {
  height?: number | string;
  width?: number | string;
  fontSize?: number | string;
  title?: string;
}

export const NulgenButton = ({
  height = 36,
  width = 144,
  fontSize = 14,
  title,
}: Type) => {
  const t = useTranslations("common");
  return (
    <button
      style={{ height, width, fontSize }}
      className="font-semibold bg-secondary rounded-[5px] text-white"
    >
      {title ? title : t("hero_get_started")}
    </button>
  );
};
