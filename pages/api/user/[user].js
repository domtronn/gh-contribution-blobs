import { GraphQLClient } from 'graphql-request'
import { userQuery, yearsQuery, contributionsQuery } from './gh-query'

import { path } from './obj'
const { GH_TOKEN: token } = process.env

const c = new GraphQLClient(
  'https://api.github.com/graphql',
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
)

export default async (req, res) => {
  const {
    query: { user }
  } = req

  /* Check to see whether the user exists */
  try {
    await c.request(userQuery(user))
  } catch (e) {
    res.statusCode = 404
    res.end()
    return
  }

  try {
    const d = await c.request(yearsQuery(user))
    const years = path(['user', 'contributionsCollection', 'contributionYears'], d)

    const data = await Promise.all(
      contributionsQuery(user, years).map(c.request.bind(c))
    )

    const result = data.reduce((acc, { user }) => ({ ...acc, ...user }), {})

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  } catch (e) {
    console.error(e)
    res.statusCode = 404
    res.end()
  }
}
