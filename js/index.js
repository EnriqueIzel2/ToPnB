const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const cards = document.querySelector("#cards");

async function getRegisters() {
  const response = await fetch(url);
  const data = response.json();
  console.log(data);
  return data;
}

function renderCards(cardData) {
  cards.innerHTML = "";
  cardData.map((card) => renderCard(card));
}

function renderCard({ photo, property_type, name, price }) {
  const div = createDiv();

  div.className = "card";

  div.innerHTML = `
    <img
      src="${photo}"
      alt="foto da propriedade"
    />
    <div class="cardDescription">
      <h3 class="typeProperty">${property_type}</h3>
      <h2 class="cardName">${formatName(name)}</h2>
      <p class="price">R$ ${formatPrice(price)}</p>
    </div>
  `;

  cards.appendChild(div);
}

// TODO criar os estilos para mensagem de erro
function renderError() {
  cards.innerHTML = "";
  const div = createDiv();

  div.innerHTML = `
    <span>aaa</span>
  `;

  cards.appendChild(div);
}

function createDiv() {
  return document.createElement("div");
}

function formatName(name) {
  return name.toLowerCase();
}

function formatPrice(price) {
  return parseFloat(price).toFixed(2).replace(".", ",");
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
