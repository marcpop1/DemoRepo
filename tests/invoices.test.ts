import { describe, it, expect } from "vitest"
import data from "../src/data/invoices.json"
import { invoiceClientMatrix } from "../src/data/correlationMatrix"

describe("fixture data", () => {
  it("has the expected number of invoices", () => {
    expect(data.invoices).toHaveLength(3)
  })

  it("has the expected number of clients", () => {
    expect(data.clients).toHaveLength(3)
  })

  it("correlation matrix length matches invoice count", () => {
    expect(invoiceClientMatrix).toHaveLength(data.invoices.length)
  })

  it("invoice ids are unique", () => {
    const ids = data.invoices.map(i => i.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
