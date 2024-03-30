// const myNumber = prompt(`Enter your Number`);
// if (myNumber % 2 == 0) {
//     alert(true);
// }
// else {
//     alert(false);
// }

const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const myNumber = input.value;
    // const output = input % 2 == 0;
    if (myNumber % 2 == 0) {
        output.innerText = `${myNumber} is Even Number`;
    }
    else {
        output.innerText = `${myNumber} is Odd Number`;
    }
};