import type { SVGProps } from "react";
import { iconMap, type IconName } from "./iconMap";

/* ----------------------------- Direction Type ----------------------------- */

export type IconDirection = "top" | "right" | "bottom" | "left";

/* ----------------------------- Props ----------------------------- */

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  direction?: IconDirection;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

/* ----------------------------- Rotation Map ----------------------------- */

const DIRECTION_ROTATION: Record<IconDirection, string> = {
  top: "rotate(0deg)",
  right: "rotate(90deg)",
  bottom: "rotate(180deg)",
  left: "rotate(270deg)",
};

/* ----------------------------- Component ----------------------------- */

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  direction = "top",
  className = "",
  style,
  onClick,
  ...restProps
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon component not found for name: "${name}"`);
    return (
      <div
        style={{
          width: size,
          height: size,
          background: "#ccc",
          borderRadius: "50%",
        }}
      />
    );
  }

  const sizingStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: "inline-block",
    flexShrink: 0,
    transform: DIRECTION_ROTATION[direction],
    transition: "transform 0.2s ease",
    cursor: onClick ? "pointer" : "inherit", // ✅ Add pointer cursor if clickable
    ...style,
  };

  return (
    <IconComponent
      className={`container-icon ${className}`}
      style={sizingStyle}
      onClick={onClick} // ✅ Passed explicitly
      {...restProps}
    />
  );
};
