export function getAllCurrency(country: string = "USD") {
  const BASE_URL = `https://api.fastforex.io/fetch-all?from=${country}&api_key=5d1bb35833-551f82f99f-rhzo11`;

  // const myHeaders = new Headers();
  // myHeaders.append("apikey", "cGfxjqGDVisVwQ1GbJ9Ohbvi2KXpI442");

  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  // };
  // const BASE_URL = `https://api.apilayer.com/fixer/latest?base=${country}`;

  return fetch(BASE_URL).then((response) => response.json());
}
