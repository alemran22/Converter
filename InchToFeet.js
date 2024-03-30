// const myInch = prompt("Enter your inch");
// const myFeet = myInch/12;
// // prompt(`Enter your Inch ${myInch}`);
// console.log(myFeet);
// alert(`Your feet is ${myFeet}`);

const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation(){
    const inch = input.value;
    const feet = (inch / 12).toFixed(2);
    output.innerText = feet;
}