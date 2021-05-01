import { NextApiRequest, NextApiResponse } from 'next'

import buildRequest from '../../utils/igdb/buildRequest'

const fields = [
  'name',
  'slug',
  'cover.url',
  'platforms.abbreviation',
  'platforms.platform_logo.url',
  'total_rating',
]

const build = data => data.map(game => {
  game.cover = game.cover
    ? { url: game.cover.url.replace(/t_thumb/g, 't_720p') }
    : { url: '' }

  return game
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = new URLSearchParams(req.query.toString())

  query.append('fields', fields.join(','))
  query.append('search', 'Nier')

  const response = await buildRequest('games', query)

  return res.status(200).json(build(response))
}
