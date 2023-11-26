export const PRODUCT_CATEGORIES = [
  {
    label: "UI kits",
    value: "ui_kits" as const,
    features: [
      { name: "Editor Picks", href: "#", imageSrc: "/nav/ui-kits/mixed.jpg" },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/ui-kits/blue.jpg" },
      { name: "Bestsellers", href: "#", imageSrc: "/nav/ui-kits/purple.jpg" },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    features: [
      { name: "Favorite Icons", href: "#", imageSrc: "/nav/icons/picks.jpg" },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/icons/new.jpg" },
      {
        name: "Best Selling Icons",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
