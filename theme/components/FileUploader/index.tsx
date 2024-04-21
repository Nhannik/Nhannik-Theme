"use client";
import { ChangeEvent, useId, useState } from "react";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  text?: string;
  onDrag?: (e: DragEvent) => void;
  onDrop?: (e: DragEvent) => void;
  onChange: (File: File[]) => void;
  disabled?: boolean;
  InputMultiple?: boolean;
  accept?: string;
}

export default function FileUploader({
  InputMultiple,
  accept,
  className,
  disabled,
  onChange,
  onDrag,
  onDrop,
  text,
}: Props) {
  const [state, setState] = useState<boolean>(false);
  const IId = useId();

  const handleOnDrag = (e: any) => {
    if (disabled) return;
    e.preventDefault();
    onDrag && onDrag(e);
    setState(true);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    if (disabled) return;
    onDrop && onDrop(e);
    if (e.dataTransfer.files) {
      const fs: File[] = Array.from(e.dataTransfer.files);
      onChange(fs);
    }
    setState(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const fs: File[] = Array.from(e.target.files);
      onChange(fs);
    }
  };

  // const

  return (
    <label
      htmlFor={IId}
      onDragEnd={() => !disabled && setState(false)}
      onDragLeave={() => !disabled && setState(false)}
      onDragOver={handleOnDrag}
      onDrop={handleDrop}
      className={twMerge(
        "w-[412px] select-none min-h-[140px] py-6 px-4  flex justify-center items-center",
        "rounded-md border-dashed  border-border-strong border-[2px]",
        state ? "border-solid border-border-focus" : "",
        className,
        disabled
          ? "border-border-disabled"
          : "cursor-pointer hover:border-border-focus hover:border-solid"
      )}
    >
      <input
        accept={accept}
        multiple={InputMultiple}
        disabled={disabled}
        onChange={handleChange}
        type="file"
        id={IId}
        className="hidden"
      />
      <div className="flex items-center flex-col">
        <HiDocumentArrowUp
          className={twMerge(
            "text-icon-blue w-12 h-12 mb-6",
            disabled ? "text-icon-disabled" : ""
          )}
        />
        <p
          className={twMerge(
            "text-text-brand text-center",
            disabled ? "text-text-disabled" : ""
          )}
        >
          {text}
        </p>
      </div>
    </label>
  );
}
