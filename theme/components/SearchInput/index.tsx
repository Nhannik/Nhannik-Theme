"use client";
import { useEffect, useRef, useState } from "react";
import { HiMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "type" | "disabled" | "defaultValue" | "size" | "onChange"
  > {
  size?: "sm" | "lg" | "md";
  inputClassName?: string;
  defaultValue?: string;
  disabled?: boolean;
  isOpen?: boolean;
  onChange?: (e: string) => void;
}

export default function SearchInput({
  disabled,
  defaultValue,
  onChange,
  size,
  inputClassName,
  className,
  isOpen,
  ...props
}: Props) {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : "");
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => onChange && onChange(value), [value]);
  const handleIconClick = () => {
    setExpanded(true);
  };

  const handleClearClick = () => {
    setValue("");
    setExpanded(false);
  };

  return (
    <>
      <div
        className={twMerge(
          "flex items-center text-icon-black  bg-Background-layer2 rounded-md outline-1  ",
          "pl-4 pr-2 gap-2",
          size === "lg" ? "py-3" : size === "md" ? "py-2" : "py-1",
          size === "sm" ? "py-1.5" : "py-1",
          className,
          isOpen ? "w-[20em]" : isExpanded ? "w-[20em]" : "w-10"
        )}
        ref={isOpen ? inputRef : undefined}
      >
        <i
          className={`text-icon-black cursor-pointer ${
            isExpanded ? "text-icon-black" : ""
          }`}
          onClick={handleIconClick}
        >
          <HiMagnifyingGlass
            className={`h-6 w-6 ${
              isOpen || isExpanded ? "text-icon-black" : "text-icon-blue"
            }`}
          />
        </i>
        <input
          disabled={disabled}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={twMerge(
            "placeholder:text-text-placeholder bg-Background-layer2 w-full text-base text-text-primary   outline-blue-500 outline-1 disabled:bg-field-disabled disabled:text-text-disabled transition-colors",
            "outline-none outline-0 ",
            inputClassName
          )}
          {...props}
        />
        {!isOpen &&
          (isExpanded || value.length > 0) && ( // Modified condition
            <HiOutlineXMark
              onClick={handleClearClick}
              className="text-icon-black w-6 h-6 cursor-pointer"
            />
          )}
      </div>
    </>
  );
}
