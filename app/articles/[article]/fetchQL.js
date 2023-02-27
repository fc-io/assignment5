function fetchQL(article) {
  console.log('fetchQL', article)
  return fetch('https://api.disneyapi.dev/graphql', {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        {
          characters(page: ${Number(article)}) {
            items {
              _id
              name
              imageUrl
              films
              shortFilms
              tvShows
              videoGames
              imageUrl
            }
            paginationInfo {
              totalPages
            }
          }
        }
      `,
      variables: {},
    }),
  })
}

export default fetchQL
