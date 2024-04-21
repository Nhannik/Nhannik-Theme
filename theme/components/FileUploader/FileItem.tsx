"use client";
import { HiXMark } from "react-icons/hi2";
import ServerFileItem from "./serverFileItem";
import React from "react";

interface Props {
  className?: string;
  size?: "sm" | "lg" | "md";
  state?: "uploaded" | "loading" | "success" | "error" | "download";
  text: string;
  errorText?: string;
  errorDes?: string;
  onClose?: () => void;
}

export default function FileItem({ onClose, ...p }: Props) {
  return (
    <ServerFileItem
      {...p}
      HIX={
        <HiXMark
          onClick={onClose}
          className="text-icon-dark cursor-pointer text-md"
        />
      }
    />
  );
}
