const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const cards = document.querySelector("#cards");

console.log(cards);

async function getRegisters() {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

function renderCards(cardData) {
  cards.innerHTML = "";
  cardData.map((card) => renderCard(card));
}

function renderCard({ photo, property_type, price }) {
  const div = document.createElement("div");

  div.className = "card";

  div.innerHTML = `
    <img
      src="${photo}"
      alt="foto da propriedade"
    />
    <div class="cardDescription">
      <h3>${property_type}</h3>
      <p>${price}</p>
    </div
  `;

  cards.appendChild(div);
}

// TODO criar os estilos para mensagem de erro
function renderError() {
  cards.innerHTML = "";
  const div = document.createElement("div");

  div.innerHTML = `
    <span>aaa</span>
  `;

  cards.appendChild(div);
}

async function main() {
  try {
    const data = await getRegisters();

    renderCards(data);
  } catch (error) {
    console.error(error);
    renderError();
  }
}

main();
