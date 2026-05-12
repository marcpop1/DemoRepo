import { useState } from "react"
import { useInvoices } from "./hooks/useInvoices"
import { InvoiceList } from "./components/InvoiceList"
import { InvoiceDetail } from "./components/InvoiceDetail"
import { sortByDate } from "./lib/sorting"
import styles from "./App.module.css"

function App() {
  const { invoices, getClientForInvoice, markAsPaid } = useInvoices()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const sorted = sortByDate([...invoices])
  const selectedIndex = sorted.findIndex(inv => inv.id === selectedId)
  const selectedInvoice = selectedIndex >= 0 ? sorted[selectedIndex] : null
  
  const originalIndex = selectedInvoice ? invoices.indexOf(selectedInvoice) : -1
  const selectedClient = selectedInvoice && originalIndex >= 0 ? getClientForInvoice(originalIndex) : null

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <span className={styles.logo}>InvoiceDash</span>
      </header>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <InvoiceList
            invoices={invoices}
            selectedId={selectedId}
            getClientForInvoice={getClientForInvoice}
            onSelect={setSelectedId}
          />
        </aside>
        <section className={styles.detail}>
          <InvoiceDetail
            invoice={selectedInvoice}
            client={selectedClient}
            invoiceIndex={originalIndex >= 0 ? originalIndex : null}
            markAsPaid={markAsPaid}
          />
        </section>
      </main>
    </div>
  )
}

export default App
