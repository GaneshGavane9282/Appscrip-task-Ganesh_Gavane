/* ----------------------------- Static Data ----------------------------- */

export const HEADER_DATA = {
  navLinks: [
    { label: "SHOP", href: "/shop" },
    { label: "SKILLS", href: "/skills" },
    { label: "STORIES", href: "/stories" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT US", href: "/contact" },
  ],

  headerIcons: [
    { name: "search", label: "Search" },
    { name: "heart", label: "Wishlist" },
    { name: "shoppingBag", label: "Cart" },
  ],
} as const;

export const FILTERS = [
  { id: "ideal", name: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { id: "occasion", name: "OCCASION", options: ["Casual", "Formal", "Party"] },
  { id: "work", name: "WORK", options: ["Office", "Field", "Remote"] },
  {
    id: "fabric",
    name: "FABRIC",
    options: ["Cotton", "Silk", "Linen", "Wool"],
  },
  { id: "segment", name: "SEGMENT", options: ["Luxury", "Basic", "Premium"] },
  {
    id: "suitable",
    name: "SUITABLE FOR",
    options: ["Summer", "Winter", "All Season"],
  },
  { id: "raw", name: "RAW MATERIALS", options: ["Organic", "Synthetic"] },
  { id: "pattern", name: "PATTERN", options: ["Solid", "Striped", "Checked"] },
];

export const FOOTER_DATA = {
  metaMuseLinks: [
    "About Us",
    "Stories",
    "Artisans",
    "Boutiques",
    "Contact Us",
    "EU Compliances Docs",
  ],

  quickLinks: [
    "Orders & Shipping",
    "Join/Login as a Seller",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ],

  socialIcons: ["instagram", "linkedin"] as const,

  paymentIcons: [
    "applePay",
    "amex",
    "gpay",
    "mastercard",
    "paypal",
  ] as const,
} as const;
