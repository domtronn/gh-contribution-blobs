import { GraphQLClient } from 'graphql-request'
import { suggestQuery } from '../utils/gh-query'

import { path } from '../utils/obj'

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
    query: { id }
  } = req

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'max-age=86400, public')
  res.statusCode = 404

  if (!id.length) {
    res.statusCode = 200
    res.end('[]')
  }

  try {
    const { search } = await c.request(suggestQuery(id))
    const data = search.nodes

    res.statusCode = 200
    res.end(JSON.stringify(data))
  } catch (e) {
    console.log(e)
    res.end(JSON.stringify({ err: e }))
  }
}
