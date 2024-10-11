import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WAITINGLIST_FORM = "https://forms.zohopublic.com/zeromagic/form/ZeromagicWaitlistForm/formperma/AgfMAJ7hBxvNYCAsKvd-OskB1AOol9hrUNig-l8nN4I"
