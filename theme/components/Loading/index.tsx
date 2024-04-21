import React from "react";

interface Props {
  state?: "";
}

export default function Loading({}: Props) {
  return (
    <>
      <div className="w-4 h-4 rounded-full border-[3px] animate-spin border-border-subtle border-l-icon-blue"></div>
    </>
  );
}
