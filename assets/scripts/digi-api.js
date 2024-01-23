const digiApi = {};

digiApi.getDigimons = (pageSize = 10) => {
  const url = `https://digi-api.com/api/v1/digimon?pageSize=${pageSize}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.content)
    .catch((error) => console.log(error));
};
