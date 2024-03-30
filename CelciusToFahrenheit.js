// const myCelc = prompt("Enter your celcius");
// const myFahrenheit = myCelc*(9/5)+32;   // (1°C × 9/5) + 32 = 33.8°F
// console.log(myFahrenheit);
// alert(`Your fahrenheit is ${myFahrenheit}`);

const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const celsius = input.value;
    const fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);
    output.innerText = fahrenheit;
}