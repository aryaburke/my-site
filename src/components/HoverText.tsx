"use client";
import React, { useState } from "react";

export default function HoverText({
  text,
  hoverText,
  className,
}: {
  text: string;
  hoverText: string;
  className?: string;
}) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <p
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setShow(!show)}
    >
      {hover || show ? hoverText : text}
    </p>
  );
}
