import { RxCaretDown } from "react-icons/rx";
// Constants for repeated styles
const INPUT_HEIGHT = "h-[47px] md:h-[40px]";
const ICON_COLOR = "#A0A2B3";
const BUTTON_BG_COLOR = "#4E64FF";

// Reusable Input Component
export const JobBoardHeroInputField = ({
  placeholder,
  icon: Icon,
  disabled = false,
}: any) => {
  return (
    <div
      className={`w-full border px-2 border-gray-200 flex items-center justify-between ${INPUT_HEIGHT} rounded-md`}
    >
      <div className="w-[75%] flex items-center">
        <Icon color={ICON_COLOR} />
        <input
          placeholder={placeholder}
          type="text"
          disabled={disabled}
          className="text-[14px] bg-transparent text-black placeholder-[#6F7186] px-2 w-[90%]"
          aria-label={placeholder}
        />
      </div>
      <RxCaretDown color={ICON_COLOR} />
    </div>
  );
};
