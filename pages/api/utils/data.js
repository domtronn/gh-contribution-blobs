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

const Max = (arr) => arr.reduce((a, b) => Math.max(a, b), 0)

export const pivot = (data) => Object
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

export const filter = (data) => Object
  .entries(data)
  .reduce((acc, [year, months]) => {
    return Max(Object.values(months)) > 0
      ? { ...acc, [year]: Object.values(months) }
      : acc
  }, {})

export const pivotAndFilter = (data) => filter(pivot(data))
