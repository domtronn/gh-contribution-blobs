const schema = {
  id: 'gh-contribution-schema',
  description: 'A schema for the repsonse of github contributions',
  type: 'object',
  additionalProperties: false,
  patternProperties: {
    '^date_(1[0-2]|[1-9])_20[0-9]{2}$': {
      type: 'object',
      required: ['totalCommitContributions'],
      properties: {
        totalCommitContributions: {
          type: 'integer',
          minimum: 0
        }
      }
    }
  }
}

const Min = (arr) => arr.reduce((a, b) => Math.min(a, b), Infinity)
const Max = (arr) => arr.reduce((a, b) => Math.max(a, b), 0)

const pivot = (data) => Object
  .entries(data)
  .reduce((acc, [k, v]) => {
    const { totalCommitContributions: t } = v
    const [month, year] = k.replace('date_', '').split('_')

    return {
      ...acc,
      [year]: {
        ...(acc[year] || {}),
        [month]: t
      }
    }
  }, {})

const normalise = (data, scale = 0, range = 1) => Object
  .entries(data)
  .reduce((acc, [year, months]) => {
    const min = Min(Object.values(months))
    const max = Max(Object.values(months))

    const nVec = (v, i, arr) => {
      const a = 2 * i * Math.PI / arr.length
      const n = (range * (v - min) / (max - min)) + scale
      return [-n * Math.sin(a), n * Math.cos(a)]
    }

    return {
      ...acc,
      [year]: Object
        .values(months)
        .map(nVec)
    }
  }, {})

export const pivotAndNormalize = (data, scale, range) => normalise(pivot(data), scale, range)
