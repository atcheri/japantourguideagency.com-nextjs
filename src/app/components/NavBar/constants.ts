import {
  AcademicCapIcon,
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  FingerPrintIcon,
  InformationCircleIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

import { ROUTES } from "@/constants/routes";
import React from "react";

export type Item = {
  name: string;
  href: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export type NavBarMenuType = {
  title: string;
  items: Item[];
};

export const bestTours: Item[] = [
  {
    name: "One Day Tokyo",
    href: "/",
    description: "Get a better understanding of your traffic",
    icon: ChartPieIcon,
  },
  {
    name: "Mt. Fuji",
    href: "/",
    description: "Speak directly to your customers",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Kawaguchi Ko",
    href: "/",
    description: "Your customers’ data will be safe and secure",
    icon: FingerPrintIcon,
  },
  {
    name: "Hakone",
    href: "/",
    description: "Connect with third-party tools",
    icon: SquaresPlusIcon,
  },
  {
    name: "Nikko",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Kamakura",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Yokohama",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Katsushika Hokusai",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Utagawa Hiroshige",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
];
export const toursByTheme: Item[] = [
  {
    name: "Samurai and Ninja culture",
    href: "/",
    description: "Get a better understanding of your traffic",
    icon: ChartPieIcon,
  },
  {
    name: "Sustainable tourism",
    href: "/",
    description: "Speak directly to your customers",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Japanese cuisine",
    href: "/",
    description: "Your customers’ data will be safe and secure",
    icon: FingerPrintIcon,
  },
  {
    name: "Japanese fruits",
    href: "/",
    description: "Connect with third-party tools",
    icon: SquaresPlusIcon,
  },
  {
    name: "Sake and Japanese beverag",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Japanese traditional culture",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Museums and art",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Architecture",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Night life",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Festivals",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Sumo",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
  {
    name: "Bike tour",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
];

export const japaneseResorts: Item[] = [
  {
    name: "Wellness and Eco tours",
    href: ROUTES.ARTICLES_WELLNESS.path,
    description: "Get a better understanding of your traffic",
    icon: ChartPieIcon,
  },
  {
    name: "Ski and snow resorts",
    href: ROUTES.ARTICLES_SKI_RESORTS.path,
    description: "Speak directly to your customers",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Beach resorts",
    href: "/",
    description: "Your customers’ data will be safe and secure",
    icon: FingerPrintIcon,
  },
  {
    name: "Golf resorts",
    href: "/",
    description: "Connect with third-party tools",
    icon: SquaresPlusIcon,
  },
  {
    name: "Cruise boat",
    href: "/",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
];

export const companyInfo: Item[] = [
  {
    name: "Our Company Information",
    href: "/company-info",
    description: "information about our company",
    icon: InformationCircleIcon,
  },
  {
    name: "Our Service Policy",
    href: "/policy",
    description: "information about our terms and policy",
    icon: DocumentTextIcon,
  },
  {
    name: "Our Partners",
    href: "/partners",
    description: "They work with Us",
    icon: AcademicCapIcon,
  },
];

export const navBarMenu: {
  menuTitle: string;
  menuItems: Item[];
}[] = [
  {
    menuTitle: "Our Best Tours",
    menuItems: bestTours,
  },
  {
    menuTitle: "Recommended Tours",
    menuItems: toursByTheme,
  },
  {
    menuTitle: "Japanese Resorts",
    menuItems: japaneseResorts,
  },
  {
    menuTitle: "About Us",
    menuItems: companyInfo,
  },
];
