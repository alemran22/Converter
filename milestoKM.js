const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation(){
    const miles = input.value;
    const kiloMeter = miles * 1.609344;
    output.innerText = kiloMeter;
}