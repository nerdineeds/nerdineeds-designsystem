import * as React from "react";
import { PiCaretDoubleRightThin, PiCaretRightLight } from "react-icons/pi";

interface BreadcrumbsProps {
  theme?: string;
  icon?: boolean;
  iconStyle?: "default" | "double" | "dash" | "bar" | "custom";
  customIcon?: React.ReactElement; // Expect a React element for custom icons
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  theme = "light",
  icon = false,
  iconStyle = "default",
  customIcon,
}) => {
  const styleTheme =
    theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  // Function to determine what to render based on icon and iconStyle props
  const renderIconOrSeparator = () => {
    if (icon) {
      switch (iconStyle) {
        case "default":
          return <PiCaretRightLight className="text-xl" />;
        case "double":
          return <PiCaretDoubleRightThin className="text-xl" />;
        case "custom":
          return customIcon; // Ensure a React element is passed as customIcon prop
        default:
          return null;
      }
    } else {
      const separatorMap: { [key: string]: string } = {
        dash: "/",
        bar: "|",
      };

      if (iconStyle === "dash" || iconStyle === "bar") {
        return <span className="text-normal">{separatorMap[iconStyle]}</span>;
      }
    }

    return null; // Return null if iconStyle is not matched or icon is false
  };

  return (
    <section className={`overflow-hidden ${styleTheme}`}>
      <div className="flex items-center gap-2 p-2">
        <a className="font-normal" href="#">
          Homepage
        </a>
        {renderIconOrSeparator()} {/* Render icon or separator */}
        <a className="font-normal opacity-60" href="#">
          Services
        </a>
      </div>
    </section>
  );
};
