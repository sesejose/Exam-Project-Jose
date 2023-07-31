const url = "http://sesejose.com/kea/wp_entremasas/wp-json/wp/v2/combo?_embed";

fetch(url)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    handleCombos(data);
  });

function handleCombos(data) {
  data.forEach(showProduct);
}

const template = document.querySelector("#cartTemplate").content;

function showProduct(combo) {
  console.log(combo);
  const copy = template.cloneNode(true);
  copy.querySelector(".title").textContent = combo.title.rendered;
  copy.querySelector(".excerpt").textContent = combo.description;
  copy.querySelector(".combo-price").textContent = combo.price;
  copy.querySelector(
    ".combos-img-container"
  ).style.backgroundImage = `url(${combo.image.guid})`;

  //********* Modal *********/

  copy
    .querySelector(".combos-img-container")
    .addEventListener("click", openModal);

  // copy
  //   .querySelector(".price-add-to-card a")
  //   .addEventListener("click", openModal);

  document.querySelector(".close").addEventListener("click", closeModal);

  // copy.querySelector(
  //   ".combo-img-container"
  // ).style.backgroundImage = `url(${combo.image.guid})`;

  const parent = document.querySelector("#shop-grid");
  parent.appendChild(copy);
}

/////////////////Geting the Modal from the DOM
var modal = document.getElementById("myModal");

// When clicks the image of the combo, open the modal
function openModal() {
  modal.style.display = "flex";
}

// When clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}
