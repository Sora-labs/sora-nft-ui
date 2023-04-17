import React, { PropsWithChildren } from "react";

function BaseButton(
  props: PropsWithChildren<{ className?: string }> &
    React.HTMLAttributes<HTMLDivElement> & {
      width?: string;
      rounded?: string;
      border?: string;
      padding?: string;
      margin?: string;
      bg?: string;
      textColor?: string;
    }
) {
  const { width, rounded, border, padding, margin, bg, textColor } = props;
  return (
    <div
      className={`
            ${width ? width : "w-full"}
            ${rounded ? rounded : "rounded-md"}
            ${
              border
                ? border
                : "border border-light-gray-80 dark:border-dark-gray-30"
            }
            ${padding ? padding : "py-3 px-4"}
            ${margin ? margin : ""}
            ${bg ? bg : "bg-black"}
            ${textColor ? textColor : "text-white"}
            text-center
            font-medium
            cursor-pointer
        `}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default BaseButton;
