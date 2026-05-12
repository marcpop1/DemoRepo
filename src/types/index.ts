export type InvoiceStatus = "draft" | "sent" | "paid"

export interface LineItem {
  description: string
  quantity: number
  unitPrice: number
}

export interface Invoice {
  id: string
  date: string
  status: InvoiceStatus
  lineItems: LineItem[]
}

export interface Client {
  id: string
  name: string
  email: string
}
