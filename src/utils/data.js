const Max = (arr) => arr.reduce((a, b) => Math.max(a, b), 0)
const Min = (arr) => arr.reduce((a, b) => Math.min(a, b), Infinity)

export const normalise = (data, scale = 0, range = 1) => Object
  .entries(data)
  .reduce((acc, [year, months]) => {
    const min = Min(months)
    const max = Max(months)

    const nVec = (v, i, arr) => {
      const a = 2 * i * Math.PI / arr.length
      const n = (range * (v - min) / (max - min)) + scale
      return [-n * Math.sin(a), n * Math.cos(a)]
    }

    return {
      ...acc,
      [year]: months.map(nVec)
    }
  }, {})
