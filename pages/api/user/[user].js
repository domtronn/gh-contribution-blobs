import { GraphQLClient } from 'graphql-request'
import { userQuery, yearsQuery, contributionsQuery } from './gh-query'

import { pivotAndFilter } from '../../../src/utils/data'
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

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 404

  /* Check to see whether the user exists */
  try {
    await c.request(userQuery(user))
  } catch (e) {
    return res.end(JSON.stringify({ err: 'not found' }))
  }

  try {
    const d = await c.request(yearsQuery(user))
    const years = path(['user', 'contributionsCollection', 'contributionYears'], d)

    const data = await Promise.all(
      contributionsQuery(user, years).map(c.request.bind(c))
    )

    const result = pivotAndFilter(
      data.reduce((acc, { user }) => ({ ...acc, ...user }), {})
    )

    res.statusCode = 200
    res.end(JSON.stringify(result))
  } catch (e) {
    res.end({ err: 'error' })
  }
}
