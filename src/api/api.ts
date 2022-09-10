export function getAllCurrency(country: string = "USD") {
  const BASE_URL = `https://api.fastforex.io/fetch-all?from=${country}&api_key=5d1bb35833-551f82f99f-rhzo11`;

  return fetch(BASE_URL).then((response) => response.json());
}
