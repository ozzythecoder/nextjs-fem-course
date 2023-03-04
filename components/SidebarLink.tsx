"use client";

import Link from "next/link";
import { Settings, User, Grid, Calendar, IconProps } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({
  link,
}: {
  link: { label: string; icon: string; link: string };
}) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  // @ts-ignore
  const Icon = icons[link.icon];

  return (
    <Link href={link.link}>
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
