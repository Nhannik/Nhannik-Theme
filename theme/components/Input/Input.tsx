import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { HiExclamationCircle, HiExclamationTriangle } from "react-icons/hi2";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  state?: "base" | "error" | "warning";
  text?: string;
  disabled?: boolean;
  label?: string;
  inputClassName?: string;
}

export default function Input({
  inputClassName,
  className,
  state,
  text,
  label,
  disabled,
  size = "sm",
  ...props
}: Props) {
  return (
    <div className="block">
      {label ? (
        <div className="mb-1">
          <span
            className={twMerge(
              "text-sm text-text-primary",
              disabled ? "text-text-disabled" : ""
            )}
          >
            {label}
          </span>
        </div>
      ) : (
        ""
      )}
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
          disabled={disabled}
          type="text"
          className={twMerge(
            "px-4 placeholder:text-text-placeholder w-full text-base text-text-primary  bg-Background-layer2 outline-blue-500 outline-1 disabled:bg-field-disabled disabled:text-text-disabled transition-colors",
            size == "md"
              ? "py-[10px]"
              : size == "lg"
              ? "py-[14px]"
              : "py-[6px]",
            state == "error" || (state == "warning" && !disabled)
              ? "outline-none outline-0 rounded-l-md"
              : "rounded-md",
            inputClassName
          )}
          {...props}
        />
        {state == "error" || (state == "warning" && !disabled) ? (
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
              "text-sm",
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
