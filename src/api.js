export const fetchResults = (phrase) => {
  return fetch('/users.json')
    .then(response => response.json())
    .catch(error => {
      console.error(error)
      throw error
    })
}
