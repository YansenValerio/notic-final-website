export const WHATSAPP_NUMBER = '6285157552617'
export const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_URL   = 'https://instagram.com/notic_id'
export const EMAIL           = 'hello@notic.id'

export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ')
}
