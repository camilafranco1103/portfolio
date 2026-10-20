// WhatsApp wa.me links use the international phone number without a leading +.
export const WHATSAPP_PHONE = '5492625595884'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`

export function createWhatsAppMessageUrl(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
