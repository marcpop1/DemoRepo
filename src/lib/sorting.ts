import { Invoice } from "../types"

/**
 * Returns invoices sorted chronologically by date, oldest first.
 */
export function sortByDate(invoices: Invoice[]): Invoice[] {
  return [...invoices].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })
}
