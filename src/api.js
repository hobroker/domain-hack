import 'whatwg-fetch'

export const fetchResults = (phrase) => {
  return fetch(`/api/hack`, {
    method: 'POST',
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phrase })
  })
    .then(response => response.json())
}
