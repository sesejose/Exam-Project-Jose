/* TO FORCE THE PAGE TO POSITION AT THE TOP OF THE PAGE WHEN RELOADING*/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
///////////////////////////////////////////////////

/* FUNCTION TO SWITCH BETWEEN DELIVERY METHODS*/

function changeMethod() {
  let method = document.getElementById("method1");
  let method2 = document.getElementById("method2");
  method.classList.add("hidden");
  method2.classList.remove("hidden");
}
function changeMethod2() {
  let method2 = document.getElementById("method2");
  let method1 = document.getElementById("method1");
  method2.classList.add("hidden");
  method1.classList.remove("hidden");
}
///////////////////////////////////////////////////

/* PROGRESS SLIDER */

const step1method1 = document.getElementById("next-button-cheackout1");
step1method1.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
});
const step1method2 = document.getElementById("next-button-cheackout1-method2");
step1method2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
});
const step3 = document.getElementById("next-button-summary");
step3.addEventListener("click", function onClick(event) {
  document.querySelector(".line2").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle3").style.backgroundColor = "var(--brown)";
});
const step4 = document.getElementById("prev-button-time-picking-method1");
step4.addEventListener("click", function onClick(event) {
  document.querySelector(".line1").style.backgroundColor = "#b0b0b0";
  document.querySelector("#circle2").style.backgroundColor = "#b0b0b0";
});
const step5 = document.getElementById("prev-button-time");
step5.addEventListener("click", function onClick(event) {
  document.querySelector(".line2").style.backgroundColor = "#b0b0b0";
  document.querySelector("#circle3").style.backgroundColor = "#b0b0b0";
});
const step6 = document.getElementById("next-button-payment");
step6.addEventListener("click", function onClick(event) {
  document.querySelector(".line3").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle4").style.backgroundColor = "var(--brown)";
});
const step7 = document.getElementById("prev-button-summary");
step7.addEventListener("click", function onClick(event) {
  document.querySelector(".line3").style.backgroundColor = "#b0b0b0";
  document.querySelector("#circle4").style.backgroundColor = "#b0b0b0";
});
const finalstep = document.getElementById("next-button-finish-pay");
finalstep.addEventListener("click", function onClick(event) {
  document.querySelector(".slider-checkout").style.display = "none";
});
const step1option1 = document.getElementById("next-button-cheackout2");
step1option1.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
});
const step1option2 = document.getElementById("next-button-cheackout2-method2");
step1option2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
});
const step2option2 = document.getElementById("prev-button-delivery2");
step2option2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "#b0b0b0";
  document.querySelector(".line1").style.backgroundColor = "#b0b0b0";
});
const step3option2 = document.getElementById("next-button-payment2");
step3option2.addEventListener("click", function onClick(event) {
  document.querySelector(".line2").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle3").style.backgroundColor = "var(--brown)";
});
const step4option2 = document.getElementById("prev-button-time-picker");
step4option2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle3").style.backgroundColor = "#b0b0b0";
  document.querySelector(".line2").style.backgroundColor = "#b0b0b0";
});
const step5option2 = document.getElementById("next-button-payment-method2");
step5option2.addEventListener("click", function onClick(event) {
  document.querySelector(".line3").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle4").style.backgroundColor = "var(--brown)";
});
const step6option2 = document.getElementById("prev-button-summary-methode2");
step6option2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle4").style.backgroundColor = "#b0b0b0";
  document.querySelector(".line3").style.backgroundColor = "#b0b0b0";
});
const step7option2 = document.getElementById("next-button-finish-pay-method2");
step7option2.addEventListener("click", function onClick(event) {
  document.querySelector(".slider-checkout").style.display = "none";
});
///////////////////////////////////////////////////
