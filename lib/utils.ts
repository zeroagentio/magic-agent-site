import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WAITINGLIST_FORM = "https://forms.zohopublic.com/zeromagic/form/ZeromagicWaitlistForm/formperma/AgfMAJ7hBxvNYCAsKvd-OskB1AOol9hrUNig-l8nN4I"

export const PRICING = "/pricing"
export const BLOGS = "/blog"
export const USECASES = "/#use-case"

export const MY_APP = "https://app.zeroagent.io/"
export const DOCS = "https://docs.zeroagent.io/"
export const TOOLS = "https://docs.zeroagent.io/tools/introduction"
export const CONTACT = "mailto:support@zeroagent.io"