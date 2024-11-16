import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTabName(tab: string) {
  switch (tab) {
    case "all": {
      return "All";
    }
    case "delivered": {
      return "Delivered";
    }
    case "inTransit": {
      return "In Transit";
    }
    default:
      return tab;
  }
}
