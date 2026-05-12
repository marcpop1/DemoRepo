import { Invoice, Client } from "../types"
import { formatCurrency, calculateTotal } from "../lib/formatters"
import { sortByDate } from "../lib/sorting"
import styles from "./InvoiceList.module.css"

interface Props {
  invoices: Invoice[]
  selectedId: string | null
  getClientForInvoice: (index: number) => Client
  onSelect: (id: string) => void
}

export function InvoiceList({ invoices, selectedId, getClientForInvoice, onSelect }: Props) {
  const sorted = sortByDate(invoices)

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Invoices</h2>
      {sorted.map((invoice, index) => {
        const client = getClientForInvoice(index)
        const total = calculateTotal(invoice.lineItems)
        return (
          <div
            key={`${index}${invoice.id}`}
            className={`${styles.invoiceRow} ${selectedId === invoice.id ? styles.selected : ""}`}
            onClick={() => onSelect(invoice.id)}
          >
            <div className={styles.invoiceId}>{invoice.id}</div>
            <div className={styles.clientName}>{client?.name ?? "Unknown"}</div>
            <div className={styles.date}>{invoice.date}</div>
            <div className={styles.total}>{formatCurrency(total)}</div>
            <div className={`${styles.status} ${styles[invoice.status]}`}>{invoice.status}</div>
          </div>
        )
      })}
    </div>
  )
}
