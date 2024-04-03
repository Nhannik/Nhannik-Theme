import { twMerge } from "tailwind-merge";
import { TagColors } from "../../../types";
import { HiXMark } from "react-icons/hi2";

// ### Badge Tag ###
interface Props {
  disabled?: boolean;
  styleType?: TagColors;
  children: string;
  closeable?: boolean;
  size?: "sm" | "md";
  onClose?: () => void;
  className?: string;
}

export default function TagInput({
  disabled,
  className,
  size,
  onClose,
  closeable,
  styleType = "blue",
  children,
}: Props) {
  return (
    <div
      className={twMerge(
        closeable
          ? "min-w-[63px] w-max color-tag-blue-bg flex justify-between  h-[16px] items-center overflow-hidden rounded-xl  gap-1"
          : "min-w-[30px] w-max px-2 color-tag-blue-bg flex justify-center  h-[24px] items-center rounded-xl",
        size == "sm" ? "min-w-[57px] h-[18px]" : "",
        styleType == "blue"
          ? "bg-tag-blue-bg text-tag-blue-text"
          : styleType == "purple"
          ? "bg-tag-purple-bg text-tag-purple-text"
          : styleType == "gray"
          ? "bg-tag-gray-bg  text-tag-gray-text"
          : styleType == "cool-gray"
          ? "bg-tag-cool-gray-bg text-tag-cool-gray-text"
          : styleType == "magenta"
          ? "bg-tag-magenta-bg text-tag-magenta-text"
          : styleType == "warm-gray"
          ? "bg-tag-warm-gray-bg text-tag-warm-gray-text"
          : styleType == "orange"
          ? "bg-tag-orange-bg text-tag-orange-text"
          : styleType == "red"
          ? "bg-tag-red-bg text-tag-red-text"
          : styleType == "cyan"
          ? "bg-tag-cyan-bg text-tag-cyan-text"
          : styleType == "green"
          ? "bg-tag-green-bg text-tag-green-text"
          : styleType == "teal"
          ? "bg-tag-teal-bg text-tag-teal-text"
          : styleType == "dark-gray"
          ? "bg-tag-dark-gray-bg text-tag-dark-gray-text"
          : styleType == "outline"
          ? "bg-white text-neutral-900 border-neutral-900 border-[1px] border-solid"
          : "",
        disabled
          ? styleType == "outline"
            ? "bg-transparent border-[1px] border-solid border-neutral-400 text-neutral-400 select-none"
            : "bg-neutral-50 text-neutral-300 select-none"
          : "",
        className
      )}
    >
      <div
        className={twMerge(closeable ? "inline-block text-xs pl-2" : "text-xs")}
      >
        {children}
      </div>
      {closeable ? (
        <div className="h-full flex justify-end">
          <button
            className={twMerge(
              "rounded-full transition-colors hover:transition-colors active:transition-colors hover:bg-[#B2D0FF] w-6 h-6 flex justify-center items-center outline-[1px] border-[1px] border-transparent focus-visible:outline-blue-500 focus-visible:outline-[1px]  active:bg-transparent",
              styleType == "blue"
                ? "hover:bg-tag-blue-stroke"
                : styleType == "purple"
                ? "hover:bg-tag-purple-stroke "
                : styleType == "gray"
                ? "hover:bg-tag-gray-stroke  "
                : styleType == "cool-gray"
                ? "hover:bg-tag-cool-gray-stroke "
                : styleType == "magenta"
                ? "hover:bg-tag-magenta-stroke "
                : styleType == "warm-gray"
                ? "hover:bg-tag-warm-gray-stroke "
                : styleType == "orange"
                ? "hover:bg-tag-orange-stroke "
                : styleType == "red"
                ? "hover:bg-tag-red-stroke "
                : styleType == "cyan"
                ? "hover:bg-tag-cyan-stroke "
                : styleType == "green"
                ? "hover:bg-tag-green-stroke "
                : styleType == "teal"
                ? "hover:bg-tag-teal-stroke "
                : styleType == "dark-gray"
                ? "hover:bg-tag-dark-gray-stroke "
                : styleType == "outline"
                ? "hover:bg-neutral-50"
                : "hover:bg-tag-blue-stroke",
              disabled ? "hover:bg-transparent cursor-auto" : "",
              size == "sm" ? "w-[18px] h-[18px]" : ""
            )}
            onClick={onClose}
          >
            <HiXMark
              className={twMerge(size == "sm" ? "w-3 h-3" : "w-4 h-4")}
            />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
