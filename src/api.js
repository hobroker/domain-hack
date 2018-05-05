import 'whatwg-fetch'

export const fetchResults = (phrase) => {
  return fetch(`/api/hack?phrase=${phrase}`)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
      throw error
    })
}
