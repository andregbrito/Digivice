function convertDigimonToLi(digimon) {
  return `
  <li class="digimon">
    <div class="digimonTitle">
      <span class="name">${digimon.name}</span>
      <span class="number">#${digimon.id}</span>
    </div>
      <img
        src="${digimon.image}"
        alt="${digimon.name}"
      />
    </li>`;
}

const digimonList = document.getElementById("digimonList");

digiApi.getDigimons().then((digimons = []) => {
  digimonList.innerHTML += digimons.map(convertDigimonToLi).join("");
});
