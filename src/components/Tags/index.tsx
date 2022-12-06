import { PropsWithChildren } from "react";

export const Tag = (
  props: PropsWithChildren<{ className?: string }> &
    React.HTMLAttributes<HTMLDivElement> & {
      name: string;
      bg?: string;
    }
) => {
  const { name, bg } = props;

  return (
    <div
      className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-light-gray-10 dark:hover:bg-dark-gray-70 shadow-md ${
        bg ? bg : "bg-light-gray-30 dark:bg-dark-gray-50"
      } bg-opacity-50`}
    >
      <div className="font-medium">{name}</div>
    </div>
  );
};
