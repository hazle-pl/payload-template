"use client"; // Dodaj tę dyrektywę na górze pliku

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./style.scss";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
  autoBuild?: boolean;
};

export const BreadcrumbBlock: React.FC<BreadcrumbProps> = ({ items, autoBuild = false }) => {
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    if (autoBuild && typeof window !== "undefined") {
      const pathSegments = window.location.pathname.split("/").filter(Boolean);
      const builtBreadcrumbs = [
        { label: "Home", href: "/" },
        ...pathSegments.map((segment, index) => ({
          label: decodeURIComponent(segment),
          href: `/${pathSegments.slice(0, index + 1).join("/")}`,
        })),
      ];
      setBreadcrumbItems(builtBreadcrumbs);
    } else if (items) {
      setBreadcrumbItems(items);
    }
  }, [autoBuild, items]);

  return (
    <nav>
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          <Link href={item.href}>
            {item.label}
          </Link>
          {index < breadcrumbItems.length - 1 && <span className="separator">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};
