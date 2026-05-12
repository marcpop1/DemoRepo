import { describe, it, expect } from "vitest"
import { sortByDate } from "../src/lib/sorting"
import { Invoice } from "../src/types"

const makeInvoice = (id: string, date: string): Invoice => ({
  id,
  date,
  status: "sent",
  lineItems: []
})

describe("sortByDate", () => {
  it("returns invoices in chronological order", () => {
    const invoices = [
      makeInvoice("inv-003", "2024-03-01"),
      makeInvoice("inv-001", "2024-01-01"),
      makeInvoice("inv-002", "2024-02-01")
    ]
    const sorted = sortByDate([...invoices])
    expect(sorted.map(i => i.id)).toEqual(["inv-001", "inv-002", "inv-003"])
  })

  it("does not mutate the original array", () => {
    const invoices = [
      makeInvoice("inv-003", "2024-03-01"),
      makeInvoice("inv-001", "2024-01-01")
    ]
    const original = invoices.map(i => i.id)
    sortByDate(invoices)
    expect(invoices.map(i => i.id)).toEqual(original)
  })
})
