// let traditional = 0;
// let dulce = 0;
// let cream = 0;
// let alfajor = 0;

let amountTraditional = 0;
let amountCream = 0;
let amountDulce = 0;
let amountAlfajor = 0;

//FUNCTIONS
start();
count();
addToCart();
emptyBasket();

//Pick Up a Pastry

function start() {
  console.log("Start");
  document
    .querySelector("#product1")
    .addEventListener("click", loadTraditional);
  document
    .querySelector("#product1")
    .addEventListener("click", pressTraditional);
  document
    .querySelector("#product1")
    .addEventListener("mouseout", releaseTraditional);
  //-------------------------
  document.querySelector("#product2").addEventListener("click", loadDulce);
  document.querySelector("#product2").addEventListener("click", pressDulce);
  document
    .querySelector("#product2")
    .addEventListener("mouseout", releaseDulce);
  //-------------------------
  document.querySelector("#product3").addEventListener("click", loadCream);
  document.querySelector("#product3").addEventListener("click", pressCream);
  document
    .querySelector("#product3")
    .addEventListener("mouseout", releaseCream);
  //-------------------------
  document.querySelector("#product4").addEventListener("click", loadAlfajor);
  document.querySelector("#product4").addEventListener("click", pressAlfajor);
  document
    .querySelector("#product4")
    .addEventListener("mouseout", releaseAlfajor);
}

//Press and Release Traditional item

function pressTraditional() {
  document.querySelector("#product1").classList.add("press");
}

function releaseTraditional() {
  document.querySelector("#product1").classList.add("release");
  document.querySelector("#product1").classList.remove("press");
  document.querySelector("#product1").classList.remove("release");
}

//Press and Release Dulce item

function pressDulce() {
  document.querySelector("#product2").classList.add("press");
}

function releaseDulce() {
  document.querySelector("#product2").classList.add("release");
  document.querySelector("#product2").classList.remove("press");
  document.querySelector("#product2").classList.remove("release");
}

//Press and Release Cream item

function pressCream() {
  document.querySelector("#product3").classList.add("press");
}

function releaseCream() {
  document.querySelector("#product3").classList.add("release");
  document.querySelector("#product3").classList.remove("press");
  document.querySelector("#product3").classList.remove("release");
}

//Press and Release Alfajor item

function pressAlfajor() {
  document.querySelector("#product4").classList.add("press");
}

function releaseAlfajor() {
  document.querySelector("#product4").classList.add("release");
  document.querySelector("#product4").classList.remove("press");
  document.querySelector("#product4").classList.remove("release");
}

////////////////////   Traditional    /////////////////////////////////

function loadTraditional() {
  let = div1 = document.createElement("div");
  div1.classList.add("add-traditional");
  document.querySelector("#custom-grid").appendChild(div1);
  //---------------------------------
  amountTraditional++;
  document.querySelector(".description-amount-traditional").value =
    amountTraditional;
  count();
  console.log(amountTraditional + "Traditional");
  getAndDelete();
}

//-------------------- Get All the Traditional and Add Click event -------------------------------------------------

function getAndDelete() {
  document.querySelectorAll(".add-traditional").forEach((item) => {
    item.addEventListener("click", removeProduct);
    //---------------------------------
    let = divRemove = document.createElement("div");
    divRemove.classList.add("remove");
    if (item.childNodes.length === 0) {
      item.appendChild(divRemove);
    } else {
      console.log("Nothing else");
    }
  });
}

//****************** Remove One Traditional ***********************************

function removeProduct() {
  this.remove();
  amountTraditional--;
  document.querySelector(".description-amount-traditional").value =
    amountTraditional;
}

////////////////////   Dulce    /////////////////////////////////

function loadDulce() {
  let = div2 = document.createElement("div");
  div2.classList.add("add-dulce");
  document.querySelector("#custom-grid").appendChild(div2);
  //---------------------------------------------------------------
  amountDulce++;
  document.querySelector(".description-amount-dulce").value = amountDulce;
  count();
  console.log(amountDulce + "Dulce");
  getAndDeleteDulce();
}

//-------------------- Get All the Dulce and Add Click event -------------------------------------------------

function getAndDeleteDulce() {
  document.querySelectorAll(".add-dulce").forEach((item) => {
    item.addEventListener("click", removeProductDulce);
    //----------------------------------------------
    let = divRemoveDulce = document.createElement("div");
    divRemoveDulce.classList.add("remove");
    if (item.childNodes.length === 0) {
      item.appendChild(divRemoveDulce);
    } else {
      console.log("Nothing else");
    }
  });
}

//****************** Remove One Dulce ***********************************

function removeProductDulce() {
  this.remove();
  amountDulce--;
  document.querySelector(".description-amount-dulce").value = amountDulce;
}

////////////////////   Cream    /////////////////////////////////

function loadCream() {
  let = div3 = document.createElement("div");
  div3.classList.add("add-cream");
  document.querySelector("#custom-grid").appendChild(div3);
  //---------------------------------------------------------------
  amountCream++;
  document.querySelector(".description-amount-cream").value = amountCream;
  count();
  console.log(amountCream + "Cream");
  getAndDeleteCream();
}

//-------------------- Get All the Dulce and Add Click event -------------------------------------------------

function getAndDeleteCream() {
  document.querySelectorAll(".add-cream").forEach((item) => {
    item.addEventListener("click", removeProductCream);
    //----------------------------------------------
    let = divRemoveCream = document.createElement("div");
    divRemoveCream.classList.add("remove");
    if (item.childNodes.length === 0) {
      item.appendChild(divRemoveCream);
    } else {
      console.log("Nothing else");
    }
  });
}

//****************** Remove One Dulce ***********************************

function removeProductCream() {
  this.remove();
  amountCream--;
  document.querySelector(".description-amount-cream").value = amountCream;
}

////////////////////   Alfajor    /////////////////////////////////

function loadAlfajor() {
  let = div4 = document.createElement("div");
  div4.classList.add("add-alfajor");
  document.querySelector("#custom-grid").appendChild(div4);
  //---------------------------------------------------------------
  amountAlfajor++;
  document.querySelector(".description-amount-alfajor").value = amountAlfajor;
  count();
  console.log(amountAlfajor + "Alfajor");
  getAndDeleteAlfajor();
}

//-------------------- Get All the Dulce and Add Click event -------------------------------------------------

function getAndDeleteAlfajor() {
  document.querySelectorAll(".add-alfajor").forEach((item) => {
    item.addEventListener("click", removeProductAlfajor);
    //----------------------------------------------
    let = divRemoveAlfajor = document.createElement("div");
    divRemoveAlfajor.classList.add("remove");
    if (item.childNodes.length === 0) {
      item.appendChild(divRemoveAlfajor);
    } else {
      console.log("Nothing else");
    }
  });
}

//****************** Remove One Dulce ***********************************

function removeProductAlfajor() {
  this.remove();
  amountAlfajor--;
  document.querySelector(".description-amount-alfajor").value = amountAlfajor;
}

///////////////   Stop Loading Pastries When Reach 12   ///////////////

function count() {
  let dozen = amountTraditional + amountCream + amountDulce + amountAlfajor;
  if (dozen === 12) {
    stopLoad();
  }
}

//------------------- 12 - Stop Loading Pastries  --------------------------

function stopLoad() {
  console.log("Stop Load");
  document
    .querySelector("#product1")
    .removeEventListener("click", loadTraditional);
  document.querySelector("#product2").removeEventListener("click", loadDulce);
  document.querySelector("#product3").removeEventListener("click", loadCream);
  document.querySelector("#product4").removeEventListener("click", loadAlfajor);
}

//////////////// Add to Cart //////////////////

function addToCart() {
  document
    .querySelector(".links-brown")
    .addEventListener("click", cleanTraditional);
  document.querySelector(".links-brown").addEventListener("click", cleanDulce);
  document.querySelector(".links-brown").addEventListener("click", cleanCream);
  document
    .querySelector(".links-brown")
    .addEventListener("click", cleanAlfajor);
}

//////////////// Empty Basket //////////////////

function emptyBasket() {
  document
    .querySelector(".links-yellow")
    .addEventListener("click", cleanTraditional);
  document.querySelector(".links-brown").addEventListener("click", cleanDulce);
  document.querySelector(".links-brown").addEventListener("click", cleanCream);
  document
    .querySelector(".links-brown")
    .addEventListener("click", cleanAlfajor);
}

///////////////////  Clean Basket ///////////////////

//-------------  Clean All Traditional -----------------

function cleanTraditional() {
  document.querySelectorAll(".add-traditional").forEach((item) => {
    item.remove();
  });
  document.querySelector(".description-amount-traditional").value = 0;
}

//-------------  Clean All Dulce -----------------

function cleanDulce() {
  document.querySelectorAll(".add-dulce").forEach((item) => {
    item.remove();
    document.querySelector(".description-amount-dulce").value = 0;
  });
}

//-------------  Clean All Cream -----------------

function cleanCream() {
  document.querySelectorAll(".add-cream").forEach((item) => {
    item.remove();
    document.querySelector(".description-amount-cream").value = 0;
  });
}

//-------------  Clean All Alfajor -----------------

function cleanAlfajor() {
  document.querySelectorAll(".add-alfajor").forEach((item) => {
    item.remove();
    document.querySelector(".description-amount-alfajor").value = 0;
  });
}
