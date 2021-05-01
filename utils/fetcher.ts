const fetcher = (endpoint: string) => {
  const url = `${endpoint}`

  return fetch(url).then(response => response.json())
}

export default fetcher
