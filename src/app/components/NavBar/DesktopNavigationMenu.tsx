"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { navBarMenu } from "@/helpers/constants";
import { useScrollColor } from "./hooks/useScrollColor";

export function DesktopNavigationMenu() {
  const { textColor } = useScrollColor();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="md:gap-x-2 lg:gap-x-4">
        <NavigationMenu>
          <Link href={ROUTES.HOME.path} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-md font-semibold hover:bg-accent-foreground/5 focus:bg-accent-foreground/5",
                `text-${textColor} hover:text-${textColor} focus:text-${textColor}`
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenu>

        {navBarMenu.map((menu) => (
          <NavigationMenuItem key={menu.menuTitle}>
            <NavigationMenuTrigger
              className={cn(
                "bg-transaprent text-md font-semibold hover:bg-accent-foreground/5 focus:bg-accent-foreground/5 hover:text-accent focus:text-accent data-[active]:bg-accent-foreground/5 data-[state=open]:bg-accent-foreground/5",
                `text-${textColor} hover:text-${textColor} focus:text-${textColor}`
              )}
            >
              {menu.menuTitle}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className={cn(
                  "grid w-[400px] gap-3 p-4 md:min-w-min ",
                  menu.menuItems.length > 2
                    ? "md:grid-cols-2 lg:w-[600px]"
                    : "lg:w-[250px]"
                )}
              >
                {menu.menuItems.map((item) => (
                  <ListItem key={item.name} title={item.name} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        {/*TODO: see how to integrate optionnaly an image in ListItem as props and row-span-3 like in the example of shadcn */}

        <NavigationMenuItem>
          <Link href={ROUTES.CONTACT.path} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-md font-semibold hover:bg-accent-foreground/5 focus:bg-accent-foreground/5",
                `text-${textColor} hover:text-${textColor} focus:text-${textColor}`
              )}
            >
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
