import 'whatwg-fetch'

export const fetchResults = (phrase) => {
  return fetch(`/api/hack?phrase=${phrase}`).then(response => response.json())
}
