"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import React, { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-clikc-outside";

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>();
  const navRef = useRef<HTMLDivElement | null>(null);
  const isAnyOpen = activeIndex !== null;
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={index}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
}

export default NavItems;