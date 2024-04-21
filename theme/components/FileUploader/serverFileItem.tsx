import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { HiArrowDownTray } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import Loading from "../Loading";
import React from "react";

interface Props {
  className?: string;
  size?: "sm" | "lg" | "md";
  state?: "uploaded" | "loading" | "success" | "error" | "download";
  text: string;
  errorText?: string;
  errorDes?: string;
  HIX: React.ReactNode;
}

export default function ServerFileItem({
  HIX,
  className,
  errorText,
  errorDes,
  text,
  size = "sm",
  state = "uploaded",
}: Props) {
  return (
    <div
      className={twMerge(
        "w-[20em] bg-field-background rounded-md  ",
        state == "success"
          ? "border-[1px] border-border-success"
          : state == "error"
          ? "border-2 border-border-error"
          : "",
        className
      )}
    >
      <div
        className={twMerge(
          "w-full px-4 flex justify-between items-center",
          size == "md" ? "py-[10px]" : size == "lg" ? "py-[14px]" : "py-[6px]"
        )}
      >
        <p className="text-base text-text-primary">{text}</p>
        {state == "success" ? (
          <HiCheckCircle className="text-[#198038] text-md" />
        ) : state == "download" ? (
          <HiArrowDownTray className="text-icon-dark cursor-pointer text-md" />
        ) : state == "loading" ? (
          <Loading />
        ) : state == "error" ? (
          <div className="flex items-center gap-2">
            <HiExclamationCircle className="text-icon-error text-md" />
            {HIX}
          </div>
        ) : (
          HIX
        )}
      </div>
      {state == "error" ? (
        <>
          <div className="w-full  border-t-border-subtle border-t-[1px]"></div>

          <div
            className={twMerge(
              "w-full px-4",
              size == "md"
                ? "py-[10px]"
                : size == "lg"
                ? "py-[14px]"
                : "py-[6px]"
            )}
          >
            {errorText && !errorDes ? (
              <p className="text-sm text-text-error">{errorText}</p>
            ) : errorText && errorDes ? (
              <>
                <p className="text-sm text-text-primary">{errorText}</p>
                <p className="text-sm text-text-error">{errorDes}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
