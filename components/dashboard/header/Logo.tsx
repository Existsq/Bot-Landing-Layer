import React from "react";

export default function Logo({
  alt,
  src,
  height,
  width,
}: {
  alt: string;
  src: string;
  height: number;
  width: number;
}) {
  return (
    <>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img alt={alt} src={src} height={height} width={width} />
        </div>
      </div>
    </>
  );
}
