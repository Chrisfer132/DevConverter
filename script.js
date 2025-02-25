const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();

  if (!inputValue.value || inputValue.value < 0) {
    alert("Informe um valor correto!");
    return;
  } else if (!selectedCurrency.value) {
    alert("Escolha uma moeda!");
    return;
  }

  converter();
}

function converter() {
  if (selectedCurrency.value === "eur") {
    valueConverted = inputValue.value / 6;
    result.innerHTML = valueFormatter("pt-BR", "EUR");
  } else if (selectedCurrency.value === "dol") {
    valueConverted = inputValue.value / 5.7;
    result.innerHTML = valueFormatter("en-US", "USD");
  } else if (selectedCurrency.value === "cad") {
    valueConverted = inputValue.value / 4.0; // Taxa de conversão fictícia para o exemplo
    result.innerHTML = valueFormatter("en-US", "CAD");
  } else if (selectedCurrency.value === "gbp") {
    valueConverted = inputValue.value / 7.3; // Taxa de conversão fictícia para o exemplo
    result.innerHTML = valueFormatter("en-GB", "GBP");
  } else if (selectedCurrency.value === "chf") {
    valueConverted = inputValue.value / 6.3; // Taxa de conversão fictícia para o exemplo
    result.innerHTML = valueFormatter("fr-CH", "CHF"); }

  animateResult();

  inputValue.value = "";
  selectedCurrency.value = "";
}

function valueFormatter(locale, currency) {
  const value = valueConverted.toLocaleString(`${locale}`, {
    style: "currency",
    currency: `${currency}`,
  });
  return `<span>🤑</span> ${value} <span>🤑</span>`;
}

function animateResult() {
  return result.animate(
    [{ transform: "translateY(-150px)" }, { transform: "translateY(0px)" }],
    { duration: 500 }
  );
}

const convertButton = document.querySelector("button[type='submit']");
const moneySound = new Audio('money.mp3');

convertButton.addEventListener("click", function() {
  moneySound.play();
});
