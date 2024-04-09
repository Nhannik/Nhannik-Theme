"use client";
import { RiCircleLine, RiContrastLine } from "react-icons/ri";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiLockClosed,
} from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface StepProps {
  state?: "error" | "success" | "current" | "step";
  disabled?: boolean;
  vertical?: boolean;
  label?: string;
  text: string;
  locked?: boolean;
  width?: string;
}

function Step({
  state = "step",
  locked,
  width,
  text,
  label,
  vertical,
  disabled,
}: StepProps) {
  return (
    <div
      style={{ width: width ? `${width}` : "" }}
      className={twMerge(
        "min-w-[140px] relative transition-colors  select-none  hover:bg-Background-layer1-hover   border-solid ",
        !disabled
          ? state == "error" && !vertical
            ? "border-border-error"
            : state == "success"
            ? vertical
              ? "border-border-selected"
              : "border-border-success"
            : state == "current"
            ? "border-border-selected"
            : "border-border-subtle"
          : "border-border-disabled hover:bg-transparent",
        !label ? "pb-2" : "",
        vertical
          ? "border-l-2 h-14 pt-[2px]  pl-[10px]"
          : "border-t-2  pr-4 pt-[10px]"
      )}
    >
      <div className="flex gap-2 items-start  ">
        {!locked ? (
          <div className="">
            {!disabled ? (
              state == "current" ? (
                <>
                  <svg
                    className="w-6 h-6 text-icon-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M11.8821 3.4316L12.5246 2.66585C11.904 2.14048 11.1963 1.72749 10.4336 1.44545L10.0918 2.38425C10.745 2.62654 11.3508 2.98098 11.8821 3.4316Z"
                      fill="#2391FF"
                    />
                    <path
                      d="M13.905 7.00195L14.8889 6.79555C14.7506 5.99664 14.4734 5.22811 14.07 4.5248L13.2044 5.00195C13.5499 5.62396 13.7868 6.30031 13.905 7.00195Z"
                      fill="#2391FF"
                    />
                    <path
                      d="M10.0918 13.6197L10.4336 14.5585C11.1963 14.2764 11.904 13.8634 12.5246 13.3381L11.8821 12.5723C11.3508 13.0229 10.745 13.3774 10.0918 13.6197Z"
                      fill="#2391FF"
                    />
                    <path
                      d="M13.2044 11.002L14.07 11.502C14.4737 10.7906 14.7508 10.0145 14.8891 9.20835L13.905 9.0349C13.7867 9.72611 13.5497 10.3916 13.2044 11.002Z"
                      fill="#2391FF"
                    />
                    <path
                      d="M8 15.002V1.00195C6.14348 1.00195 4.36301 1.73945 3.05025 3.05221C1.7375 4.36496 1 6.14544 1 8.00195C1 9.85847 1.7375 11.6389 3.05025 12.9517C4.36301 14.2645 6.14348 15.002 8 15.002Z"
                      fill="#2391FF"
                    />
                  </svg>
                </>
              ) : state == "success" ? (
                <HiOutlineCheckCircle
                  className={twMerge(
                    "w-6 h-6",
                    vertical ? "text-icon-blue" : "text-icon-success"
                  )}
                />
              ) : state == "error" ? (
                <HiOutlineExclamationCircle className="w-6 h-6 text-icon-error" />
              ) : (
                <>
                  <svg
                    className="w-6 h-6 text-icon-dark"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M3.85009 2.35205C3.27659 2.79214 2.77115 3.31443 2.35009 3.90205L3.15009 4.50205C3.51732 3.99276 3.95502 3.53822 4.45009 3.15205L3.85009 2.35205Z"
                      fill="#262626"
                    />
                    <path
                      d="M2.30009 6.15205L1.35009 5.85205C1.10858 6.54273 0.990112 7.27043 1.00009 8.00205H2.00009C1.99806 7.37311 2.09942 6.74811 2.30009 6.15205Z"
                      fill="#262626"
                    />
                    <path
                      d="M1.35009 10.202C1.58197 10.8993 1.91921 11.5569 2.35009 12.152L3.15009 11.552C2.78863 11.0459 2.50233 10.4902 2.30009 9.90205L1.35009 10.202Z"
                      fill="#262626"
                    />
                    <path
                      d="M3.90009 13.652C4.49526 14.0829 5.15288 14.4202 5.85009 14.652L6.15009 13.702C5.56196 13.4998 5.0062 13.2135 4.50009 12.852L3.90009 13.652Z"
                      fill="#262626"
                    />
                    <path
                      d="M5.85009 1.35205L6.15009 2.30205C6.74616 2.10137 7.37116 2.00002 8.00009 2.00205V1.00205C7.26847 0.992066 6.54077 1.11053 5.85009 1.35205Z"
                      fill="#262626"
                    />
                    <path
                      d="M12.1001 13.652C12.689 13.2131 13.2111 12.691 13.6501 12.102L12.8501 11.502C12.4783 12.0239 12.022 12.4802 11.5001 12.852L12.1001 13.652Z"
                      fill="#262626"
                    />
                    <path
                      d="M13.7001 9.85205L14.6501 10.152C14.8676 9.45548 14.9854 8.73164 15.0001 8.00205H14.0001C14.0021 8.63098 13.9008 9.25598 13.7001 9.85205Z"
                      fill="#262626"
                    />
                    <path
                      d="M14.6001 5.80205C14.3682 5.10483 14.031 4.44721 13.6001 3.85205L12.8001 4.45205C13.1616 4.95815 13.4479 5.51392 13.6501 6.10205L14.6001 5.80205Z"
                      fill="#262626"
                    />
                    <path
                      d="M12.0501 2.30205C11.4549 1.87117 10.7973 1.53393 10.1001 1.30205L9.80009 2.25205C10.3882 2.45429 10.944 2.74059 11.4501 3.10205L12.0501 2.30205Z"
                      fill="#262626"
                    />
                    <path
                      d="M10.1501 14.652L9.85009 13.702C9.25403 13.9027 8.62903 14.0041 8.00009 14.002V15.002C8.72679 14.9588 9.44718 14.8415 10.1501 14.652Z"
                      fill="#262626"
                    />
                  </svg>
                </>
              )
            ) : (
              <>
                <svg
                  className="w-6 h-6 fill-icon-disabled"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path d="M3.85009 2.35205C3.27659 2.79214 2.77115 3.31443 2.35009 3.90205L3.15009 4.50205C3.51732 3.99276 3.95502 3.53822 4.45009 3.15205L3.85009 2.35205Z" />
                  <path d="M2.30009 6.15205L1.35009 5.85205C1.10858 6.54273 0.990112 7.27043 1.00009 8.00205H2.00009C1.99806 7.37311 2.09942 6.74811 2.30009 6.15205Z" />
                  <path d="M1.35009 10.202C1.58197 10.8993 1.91921 11.5569 2.35009 12.152L3.15009 11.552C2.78863 11.0459 2.50233 10.4902 2.30009 9.90205L1.35009 10.202Z" />
                  <path d="M3.90009 13.652C4.49526 14.0829 5.15288 14.4202 5.85009 14.652L6.15009 13.702C5.56196 13.4998 5.0062 13.2135 4.50009 12.852L3.90009 13.652Z" />
                  <path d="M5.85009 1.35205L6.15009 2.30205C6.74616 2.10137 7.37116 2.00002 8.00009 2.00205V1.00205C7.26847 0.992066 6.54077 1.11053 5.85009 1.35205Z" />
                  <path d="M12.1001 13.652C12.689 13.2131 13.2111 12.691 13.6501 12.102L12.8501 11.502C12.4783 12.0239 12.022 12.4802 11.5001 12.852L12.1001 13.652Z" />
                  <path d="M13.7001 9.85205L14.6501 10.152C14.8676 9.45548 14.9854 8.73164 15.0001 8.00205H14.0001C14.0021 8.63098 13.9008 9.25598 13.7001 9.85205Z" />
                  <path d="M14.6001 5.80205C14.3682 5.10483 14.031 4.44721 13.6001 3.85205L12.8001 4.45205C13.1616 4.95815 13.4479 5.51392 13.6501 6.10205L14.6001 5.80205Z" />
                  <path d="M12.0501 2.30205C11.4549 1.87117 10.7973 1.53393 10.1001 1.30205L9.80009 2.25205C10.3882 2.45429 10.944 2.74059 11.4501 3.10205L12.0501 2.30205Z" />
                  <path d="M10.1501 14.652L9.85009 13.702C9.25403 13.9027 8.62903 14.0041 8.00009 14.002V15.002C8.72679 14.9588 9.44718 14.8415 10.1501 14.652Z" />
                </svg>
              </>
            )}
          </div>
        ) : (
          <HiLockClosed
            className={twMerge(
              "text-red-500 relative w-6 h-6  ",
              vertical ? " right-0" : "right-1"
            )}
          />
        )}

        <div className="flex flex-col ">
          <p
            className={twMerge(
              "text-base text-text-primary leading-[16px]",
              !disabled
                ? state == "error" && !vertical
                  ? "text-text-error"
                  : "text-text-primary"
                : "text-text-disabled"
            )}
          >
            {text}
          </p>
          {label ? (
            <p
              className={twMerge(
                "text-base leading-[19px]",
                !disabled
                  ? state == "error" && !vertical
                    ? "text-text-error"
                    : "text-text-secondary"
                  : "text-text-disabled"
              )}
            >
              {label}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

 export interface StepListType {
  label?: string;
  disabled?: boolean;
  locked?: boolean;
  title: string;
  state?: "error" | "success" | "current" | "step";
}

interface Props {
  className?: string;
  stepWidth?: string;
  vertical?: boolean;
  stepsList: StepListType[];
}

export default function ProgressIndicator({
  stepsList,
  vertical,
  stepWidth,
  className,
}: Props) {
  return (
    <div
      className={twMerge(
        "flex w-max items-center",
        vertical ? "flex-col" : "",
        className
      )}
    >
      {stepsList
        ? stepsList.map((e, i) => (
            <Step
              key={i + "step"}
              locked={e.locked}
              label={e.label}
              text={e.title}
              disabled={e.disabled}
              state={e.state}
              width={stepWidth}
              vertical={vertical}
            />
          ))
        : ""}
    </div>
  );
}
