import { ChangeEvent, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { HiExclamationCircle, HiExclamationTriangle } from "react-icons/hi2";
import React from "react";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  size?: "sm" | "md" | "lg";
  text?: string;
  disabled?: boolean;
  state?: "base" | "error" | "warning";
  inputClassName?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function NumberInput({
  state,
  inputClassName,
  className,
  text,
  disabled,
  onChange,
  size = "sm",
  ...props
}: Props) {
  return (
    <div className="block">
      <div
        className={twMerge(
          "flex h-max w-[20em] rounded-md outline-1 ",
          state == "error" && !disabled
            ? "outline outline-border-error"
            : state == "warning" && !disabled
            ? "outline outline-border-warning"
            : "",
          className
        )}
      >
        <input
          onChange={(e) => {
            onChange && onChange(e);
          }}
          disabled={disabled}
          
          onInput={(e) =>
           {const inputElement = e.target as HTMLInputElement;
            inputElement.value = inputElement.value.replace(/[^0-9:]/g, "");}
          }
          type="text"
          className={twMerge(
            "px-4 placeholder:text-text-placeholder w-full text-base text-text-primary  bg-Background-layer2 outline-blue-500 outline-1 disabled:bg-field-disabled disabled:text-text-disabled transition-colors",
            size == "md"
              ? "py-[10px]"
              : size == "lg"
              ? "py-[14px]"
              : "py-[6px]",
            (state == "error" && !disabled) || (state == "warning" && !disabled)
              ? "outline-none outline-0 rounded-l-md"
              : "rounded-md",
            inputClassName
          )}
          {...props}
        />
        {(state == "error" && !disabled) ||
        (state == "warning" && !disabled) ? (
          <div className=" justify-center bg-Background-layer2 rounded-r-md flex items-center px-4">
            {state == "error" ? (
              <HiExclamationCircle className="text-text-error w-6 h-6" />
            ) : state == "warning" ? (
              <HiExclamationTriangle className="text-text-warning w-6 h-6" />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      {text ? (
        <div className="mt-1">
          <span
            className={twMerge(
              "text-md ",
              state == "error" && !disabled
                ? "text-text-error"
                : state == "warning" && !disabled
                ? "text-text-warning"
                : "text-text-secondary"
            )}
          >
            {text}
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
