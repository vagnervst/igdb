import { useState } from 'react'
import useSWR from 'swr'

import HomeContainer from '../containers/Home'

const Home = () => {
  const [search, setSearch] = useState('')
  const { data, error } = useSWR(`/api/games?search=${search}`)

  const searchGame = (values: { search: string }) => {
    setSearch(values.search)
  }

  return (
    <HomeContainer
      data={data}
      error={error}
      onSearch={searchGame}
    />
  )
}

export default Home
