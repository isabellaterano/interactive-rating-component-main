const mainContainer = document.querySelector(".box-container");

const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector("#btn-submit");
const rating = document.querySelector("#rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
