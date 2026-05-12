import { describe, it, expect } from "vitest"
import { formatCurrency, calculateTotal } from "../src/lib/formatters"

describe("formatCurrency", () => {
  it("formats whole numbers correctly", () => {
    expect(formatCurrency(100)).toBe("€100.00")
  })

  it("formats amounts with cents correctly", () => {
    expect(formatCurrency(99.50)).toBe("€99.50")
  })

  // THIS TEST IS INTENTIONALLY FAILING — candidate must fix formatters.ts to make it pass
  it("rounds up correctly at the 3rd decimal place", () => {
    expect(formatCurrency(10.999)).toBe("€11.00")
  })
})

describe("calculateTotal", () => {
  it("calculates total from line items", () => {
    const items = [
      { quantity: 2, unitPrice: 100 },
      { quantity: 1, unitPrice: 50 }
    ]
    expect(calculateTotal(items)).toBe(250)
  })
})
