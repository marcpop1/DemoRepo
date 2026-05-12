/**
 * Internal utility for formatting monetary values.
 * Used by all components that display currency amounts.
 */

export function formatCurrency(amount: number): string {
  // Normalize to 2 decimal places before formatting
  const normalized = Math.round(amount * 100) / 100
  return `€${normalized.toFixed(2)}`
}

export function calculateTotal(lineItems: { quantity: number; unitPrice: number }[]): number {
  return lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
}
