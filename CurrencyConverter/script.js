const converterForm = document.getElementById("converter-form");
const fromCurrency = document.getElementById("fro");
const toCurrency = document.getElementById("to");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("results");

window.addEventListener("load", getCurrency);
converterForm.addEventListener("submit", convertCurrency);


async function getCurrency() {
    const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";
    const SEARCH_URL = "USD";

    const response = await fetch(`${BASE_URL}${SEARCH_URL}`);
    const data = await response.json();

    // console.log(data);
    const currencyOptions = Object.keys(data.rates);

    currencyOptions.forEach((currency) => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        toCurrency.appendChild(option2);

    });

};

async function convertCurrency(e) {
    e.preventDefault();

    const amount = parseFloat(amountInput.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    if(amount < 0) {
        alert ("Please Enter a valid amount, money shouldn't be negative!!! ");
        return;
    }

    const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

    const response2 = await fetch(`${BASE_URL}${fromCurrencyValue}`);
    const data2 = await response2.json();

    const rate = data2.rates[toCurrencyValue];
    const convertedCurrency = (amount*rate).toFixed(2);

    // console.log(data2);
    

    resultDiv.textContent = ` ${amount} ${fromCurrencyValue} = ${convertedCurrency} ${toCurrencyValue}`;
    resultDiv.classList.remove("hidden");


};