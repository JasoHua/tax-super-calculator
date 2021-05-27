export default function calculateTax(income) {
    if (isNaN(income) || income === "" || income < 0) return 0
    income = parseFloat(income)

    const taxBrackets = [
      {
        min: 0,
        max: 18200,
        flat: 0,
        rate: 0
      },
      {
        min: 18201,
        max: 37000,
        flat: 0,
        rate: 0.19
      },
      {
        min: 37001,
        max: 90000,
        flat: 3572,
        rate: 0.325
      },
      {
        min: 90001,
        max: 180000,
        flat: 20797,
        rate: 0.37
      },
      {
        min: 180001,
        max: Number.MAX_SAFE_INTEGER,
        flat: 54097,
        rate: 0.45
      }
    ]

    const tb = taxBrackets.filter(e => e.min <= income && income <= e.max)[0]
    return tb.flat + (income - tb.min) * tb.rate
  }
