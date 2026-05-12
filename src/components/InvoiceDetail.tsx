import { Invoice, Client } from "../types"
import { formatCurrency, calculateTotal } from "../lib/formatters"
import styles from "./InvoiceDetail.module.css"

interface Props {
  invoice: Invoice | null
  client: Client | null
  invoiceIndex: number | null
  markAsPaid: (invoiceId: string) => void
}

export function InvoiceDetail({ invoice, client, invoiceIndex, markAsPaid }: Props) {
  if (!invoice || client === null || invoiceIndex === null) {
    return (
      <div className={styles.empty}>
        <p>Select an invoice to view details</p>
      </div>
    )
  }

  const total = calculateTotal(invoice.lineItems)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.invoiceId}>{invoice.id}</h2>
          <p className={styles.date}>{invoice.date}</p>
        </div>
        <span className={`${styles.status} ${styles[invoice.status]}`}>{invoice.status}</span>
      </div>

      <div className={styles.clientSection}>
        <h3>Client</h3>
        <p className={styles.clientName}>{client.name}</p>
        <p className={styles.clientEmail}>{client.email}</p>
      </div>

      <div className={styles.lineItemsSection}>
        <h3>Line Items</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {invoice.lineItems.map((item, i) => (
              <tr key={i}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{formatCurrency(item.unitPrice)}</td>
                <td>{formatCurrency(item.quantity * item.unitPrice)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className={styles.totalLabel}>Total</td>
              <td className={styles.totalValue}>{formatCurrency(total)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
