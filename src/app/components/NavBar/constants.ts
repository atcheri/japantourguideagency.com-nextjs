import {
  AcademicCapIcon,
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  FingerPrintIcon,
  InformationCircleIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

import React from "react";

type Item = {
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

type Action = {
  name: string;
  href: string;
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
  actions: Action[];
};

export const bestTours = [
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
export const toursByTheme = [
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

export const japaneseResorts = [
  {
    name: "Wellness and Eco tours",
    href: "/",
    description: "Get a better understanding of your traffic",
    icon: ChartPieIcon,
  },
  {
    name: "Ski and snow resorts",
    href: "/",
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

export const companyInfo = [
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

export const callsToAction = [
  { name: "Contact Us", href: "contact/tailwindui", icon: EnvelopeIcon },
  { name: "Watch demo", href: "/", icon: PlayCircleIcon },
];

export const navBarMenu = [
  {
    menuTitle: "Our Best Tours",
    menuItems: bestTours,
    menuActions: [],
  },
  {
    menuTitle: "Recommended Tours",
    menuItems: toursByTheme,
    menuActions: [],
  },
  {
    menuTitle: "Japanese Resorts",
    menuItems: japaneseResorts,
    menuActions: [],
  },
  {
    menuTitle: "About Us",
    menuItems: companyInfo,
    menuActions: callsToAction,
  },
];
