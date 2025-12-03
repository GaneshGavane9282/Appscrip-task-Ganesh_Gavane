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

export const iconMap = {
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