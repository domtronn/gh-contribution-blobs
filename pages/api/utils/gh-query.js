const base = (query) => `query { ${query} }`
const user = (id, query) => base(`user(login:"${id}") { ${query} }`)

const max = (arr) => arr.reduce((acc, it) => Math.max(acc, it), 0)

export const userQuery = (id) => base(`user(login:"${id}") { id }`)
export const yearsQuery = (id) => user(id, 'contributionsCollection { contributionYears }')

export const contributionsQuery = (id, years) => {
  const y = [max(years) + 1, ...years]
  const m = Array(13)
    .fill()
    .map((_, i) => i === 12
      ? new Date('2021-01').toISOString().replace('2021', '{{NYEAR}}')
      : new Date(`2020-${i + 1 < 10 ? `0${i + 1}` : i + 1}`).toISOString().replace('2020', '{{YEAR}}'))

  const querys = m
    .slice(0, -1)
    .reduce((acc, it, i) => `${acc}
date_${i + 1}_{{YEAR}}: contributionsCollection(from:"${m[i]}", to:"${m[i + 1]}") { totalCommitContributions }`, '')

  const query = y
    .slice(1)
    .reduce((acc, it, i) => `${acc}
${querys
  .replace(/{{YEAR}}/g, y[y.length - i - 1])
  .replace(/{{NYEAR}}/g, y[y.length - i - 1])}`, '')

  return y
    .slice(1)
    .map((_, i) => user(
      id,
      querys
        .replace(/{{YEAR}}/g, y[y.length - i - 1])
        .replace(/{{NYEAR}}/g, y[y.length - i - 1])
    ))
}

export const suggestQuery = (id) => base(`search(query: "${id} in:user", first: 10, type: USER) {
  nodes {
    ...on User {
      login
      avatarUrl
    }
  }
}`)
