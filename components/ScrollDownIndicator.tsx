import React from "react";

interface ScrollDownIndicatorProps extends React.SVGProps<SVGSVGElement> {}

export default function ScrollDownIndicator(props: ScrollDownIndicatorProps) {
  return (
    <svg
      {...props}
      className="animate-bounce w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  );
}
