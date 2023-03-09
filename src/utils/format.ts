export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const contFormatter = new Intl.NumberFormat('pt-BR', {
  // maximumSignificantDigits: 13,
  minimumFractionDigits: 2,
})

export const decUSFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
})
