// const myHeaders = new Headers();
//   myHeaders.append("apikey", "E3hzoFicu8q8cZurKEnfOME8fkiuwlrf");

// const requestOptions = {
//   method: 'GET',
//   headers: myHeaders
// };

export function getAllCurrency(country: string = 'USD') {
  const BASE_URL = `https://api.fastforex.io/fetch-all?from=${country}&api_key=ac3294834a-b5dd86afbf-rgv300`;

  return fetch(BASE_URL)
    .then(response => response.json())
}
