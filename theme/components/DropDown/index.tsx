"use client";
import {
  HiChevronDown,
  HiExclamationCircle,
  HiExclamationTriangle,
} from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import React, { useEffect, useRef, useState } from "react";
import Text from "../Text";

interface OptionProps {
  type?: "checkbox" | "select" | "icon";
  Icon?: JSX.Element | React.ReactNode;
  text: string;
  className?: string;
  value: number | string;
  onClick: (option: string, value: string | number) => void;
  selected?: boolean;
  limit: number;
  size?: "sm" | "md" | "lg";
  line?: boolean;
}

export function Option({
  line,
  onClick,
  limit,
  text,
  value,
  className,
  size = "sm",
  Icon,
  type = "select",
  selected,
}: OptionProps) {
  return (
    <div className="w-full">
      <div
        onClick={() => onClick(text, value)}
        className={twMerge(
          "w-full flex items-center border-l-2 text-text-primary  outline-1  border-transparent  px-4 py-[5px]  hover:bg-field-hover",
          size == "md" ? "py-[10px]" : size == "lg" ? "py-[14px]" : "py-[5px]",
          type == "checkbox" || type == "icon"
            ? "justify-normal gap-4"
            : "justify-between",
          selected ? "hover:bg-field-background text-text-brand" : "",
          selected && type == "select"
            ? "border-border-selected "
            : "cursor-pointer",
          className
        )}
      >
        {type == "checkbox" ? (
          <>
            <div
              className={twMerge(
                "border-icon-dark",

                !selected
                  ? "bg-transparent "
                  : "border-icon-blue bg-icon-blue ",

                size == "lg" ? "w-[18px] h-[18px]" : "w-[15px] h-[15px]",
                "  rounded-sm border-[1px] border-solid transition-colors flex justify-center items-center"
              )}
            >
              {selected ? (
                <HiCheck
                  className={twMerge(
                    size == "lg" ? "w-5 h-5" : "w-3 h-3",
                    " text-white"
                  )}
                />
              ) : (
                ""
              )}
            </div>

            <span className="block select-none text-base " title={text}>
              <Text children={text} limit={limit} />
            </span>
          </>
        ) : type == "icon" ? (
          <>
            {Icon ? <i className="w-5 h-5">{Icon}</i> : ""}
            <div className="block select-none text-base " title={text}>
              <Text children={text} limit={limit} />
            </div>
          </>
        ) : (
          <>
            <div className="select-none text-base " title={text}>
              <Text children={text} limit={limit} />
            </div>

            {selected ? <HiCheck className="w-5 h-5 text-icon-blue" /> : <></>}
          </>
        )}
      </div>

      {line && !selected ? (
        <div className="w-full h-[1px] mb-[1px] bg-border-strong"></div>
      ) : null}
    </div>
  );
}

export type OptionItemType = {
  text: string;
  value: number | string;
  selected?: boolean;
  line?: boolean;
  icon?: JSX.Element;
};

interface Props {
  size?: "sm" | "md" | "lg"; // px-1 #4px , px-2 #8px , px-3 #12px
  state?: "error" | "warning" | "active";
  disabled?: boolean;
  text?: string;
  optionsList?: OptionItemType[];
  overflowLimit?: number;
  className?: string;
  icons?: boolean;
  title?: string;
  onChange?: (value: any) => void;
  selectedValue?: string | number | null;
}

export default function DropDown({
  onChange,
  overflowLimit = 45,
  optionsList,
  disabled,
  icons = false,
  text,
  className,
  title = "select",
  state = "active",
  size = "sm",
  selectedValue: selectedValueDefault,
}: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<
    null | number | string | string[] | number[] | undefined
  >(selectedValueDefault);
  const [selectedName, setSelectedName] = useState<string>(title as string);
  const butOptionRef = useRef<HTMLDivElement>(null);
  const optionListlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventFun = (e: MouseEvent) => {
      if (
        !optionListlRef.current?.contains(e.target as never) &&
        !butOptionRef.current?.contains(e.target as never)
      ) {
        setToggle(false);
      }
    };

    if (toggle) {
      addEventListener("mousedown", eventFun);
    }

    return () => {
      removeEventListener("mousedown", eventFun);
    };
  }, [toggle]);

  const onOptionClicked = (option: string, value: string | number) => {
    !selectedValueDefault && setSelectedValue(value);
    setSelectedName(option);
    setToggle(false);
    onChange && onChange(value);
  };

  return (
    <>
      <div className={twMerge("flex flex-col gap-2 min-w-[12em]", className)}>
        <div className="relative h-max">
          <div
            ref={butOptionRef}
            onClick={() => !disabled && setToggle((e) => !e)}
            className={twMerge(
              `w-full max-h-max h-max border-[1px] border-solid border-transparent flex items-center cursor-pointer justify-between  px-4 bg-field-background  transition-colors`,
              state == "error"
                ? "border-border-error"
                : state == "warning"
                ? "border-border-warning"
                : "",
              size == "md" ? "py-2" : size == "lg" ? "py-3" : "py-1",
              disabled ? "bg-field-disabled cursor-not-allowed " : "",
              !toggle ? "hover:bg-field-hover rounded-md" : "rounded-t-md"
            )}
          >
            <div className="flex items-center gap-1">
              <span
                className={twMerge(
                  "block select-none text-base text-text-primary",
                  disabled ? "text-text-disabled" : ""
                )}
                title={selectedName}
              >
                <Text children={selectedName} limit={overflowLimit} />
              </span>
            </div>

            <div className="flex items-center gap-1">
              {state == "error" ? (
                <HiExclamationCircle
                  className={twMerge(
                    "text-icon-error h-5 w-5",
                    disabled ? "text-text-disabled" : ""
                  )}
                />
              ) : state == "warning" ? (
                <HiExclamationTriangle
                  className={twMerge(
                    "text-icon-warning h-5 w-5",
                    disabled ? "text-text-disabled" : ""
                  )}
                />
              ) : (
                ""
              )}
              <HiChevronDown
                className={twMerge(
                  "text-icon-dark h-5 w-5 transition-transform",
                  disabled ? "text-text-disabled" : "",
                  toggle ? "rotate-180" : ""
                )}
              />
            </div>
          </div>
          {toggle ? (
            <div
              ref={optionListlRef}
              className={twMerge(
                "absolute z-30 flex md-hiddenScroll flex-col top-full left-0 rounded-b-md  shadow-md bg-field-background h-auto w-full",
                optionsList && optionsList?.length > 8
                  ? "h-[18em] overflow-y-scroll"
                  : ""
              )}
            >
              {optionsList &&
                optionsList.map((e, i) => (
                  <Option
                    limit={overflowLimit}
                    line={e.line}
                    value={e.value}
                    key={e.value + "" + i}
                    type={icons ? "icon" : "select"}
                    onClick={onOptionClicked}
                    selected={
                      selectedValueDefault
                        ? selectedValueDefault == e.value
                        : selectedValue == e.value
                    }
                    size={size}
                    Icon={e.icon}
                    text={e.text}
                  />
                ))}
            </div>
          ) : (
            ""
          )}
        </div>

        {text ? (
          <span
            className={twMerge(
              "text-sm",
              state == "error"
                ? "text-text-error"
                : state == "warning"
                ? "text-text-warning"
                : "text-text-secondary"
            )}
          >
            {text}
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
