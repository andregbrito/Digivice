const pageSize = 1;
const url = `https://digi-api.com/api/v1/digimon?pageSize=${pageSize}`;

function convertDigimonToLi(digimon) {
  return `<li class="digimon">
  <div class="digimon-title">
    <span class="name">${digimon.name}</span>
    <span class="number">#289</span>
  </div>
  <img
    src="https://digi-api.com/images/digimon/w/Agumon.png"
    alt="${digimon.name}"
  />
  <div class="detail">
    <div class="digimon-details">
      <div class="level">
        <h3>Level</h3>
        <span>Child</span>
      </div>
      <div class="Attribute">
        <h3>Attribute</h3>
        <span>Vaccine</span>
      </div>
      <div class="type">
        <h3>Type</h3>
        <span>Reptile</span>
      </div>
    </div>
  </div>
</div>
</li>`;
}

const digimonList = document.getElementById("digimonList");

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.content)
  .then((digimons) => {
    for (let i = 0; i < digimons.length; i++) {
      const digimon = digimons[i];
      digimonList.innerHTML += convertDigimonToLi(digimon);
    }
  })
  .catch((error) => console.log(error));
