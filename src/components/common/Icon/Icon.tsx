import React, { type SVGProps } from "react";

// SVG imports
import LogoIcon from "@/assets/icons/logo.svg?react";
import ArrowIcon from "@/assets/icons/arrow.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import HeartIcon from "@/assets/icons/heart.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import ShoppingbagIcon from "@/assets/icons/shopping-bag.svg?react";
import AmexIcon from "@/assets/icons/amex.svg?react";
import ApplePayIcon from "@/assets/icons/apple-pay.svg?react";
import MastercardIcon from "@/assets/icons/mastercard.svg?react";
import PaypalIcon from "@/assets/icons/paypal.svg?react";
import GpayIcon from "@/assets/icons/gpay.svg?react";
import HamburgurIcon from "@/assets/icons/hamburger.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import LinkdlenIcon from "@/assets/icons/linkedin.svg?react";
import UsaIcon from "@/assets/icons/usa.svg?react";
import CloseIcon from "@/assets/icons/close.svg?react";

/* ----------------------------- Icon Map ----------------------------- */

const iconMap = {
  logo: LogoIcon,
  arrow: ArrowIcon,
  check: CheckIcon,
  heart: HeartIcon,
  profile: ProfileIcon,
  search: SearchIcon,
  shoppingBag: ShoppingbagIcon,
  amex: AmexIcon,
  applePay: ApplePayIcon,
  mastercard: MastercardIcon,
  paypal: PaypalIcon,
  gpay: GpayIcon,
  hamburgur: HamburgurIcon,
  instagram: InstagramIcon,
  linkedin: LinkdlenIcon,
  usa: UsaIcon,
  close: CloseIcon,
} as const;

export type IconName = keyof typeof iconMap;

/* ----------------------------- Direction Type ----------------------------- */

export type IconDirection = "top" | "right" | "bottom" | "left";

/* ----------------------------- Props ----------------------------- */

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  direction?: IconDirection; // ✅ NEW
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
  direction = "top", // ✅ Default: no rotation
  className = "",
  style,
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
    transform: DIRECTION_ROTATION[direction], // ✅ ROTATION
    transition: "transform 0.2s ease", // ✅ Smooth animation
    ...style,
  };

  return (
    <IconComponent
      className={`container-icon ${className}`}
      style={sizingStyle}
      {...restProps}
    />
  );
};
