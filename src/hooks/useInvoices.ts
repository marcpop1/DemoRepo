import { useState } from "react"
import data from "../data/invoices.json"
import { invoiceClientMatrix } from "../data/correlationMatrix"
import { Invoice, Client } from "../types"

interface InvoicesState {
  invoices: Invoice[]
  clients: Client[]
}

export function useInvoices() {
  const [state, setState] = useState<InvoicesState>({
    invoices: data.invoices as Invoice[],
    clients: data.clients as Client[]
  })

  const getClientForInvoice = (invoiceIndex: number): Client => {
    const clientIndex = invoiceClientMatrix[invoiceIndex]
    return state.clients[clientIndex]
  }

  const markAsPaid = (clientIndex: number) => {
    const invoiceIndex = invoiceClientMatrix[clientIndex]
    setState(prev => {
      const updated = [...prev.invoices]
      updated[invoiceIndex].status = "paid"
      return { ...prev, invoices: updated }
    })
  }

  return { ...state, getClientForInvoice, markAsPaid }
}
