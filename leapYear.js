// const myYear = prompt(`Enter your Year`);
// if (myYear%4 == 0) {
//     alert(true);
// }
// else {
//     alert(false);
// }

const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const myYear = input.value;
    if (myYear % 4 == 0) {
        output.innerText = `${myYear} is Leap Year`;
    }
    else {
         output.innerText = `${myYear} is not Leap Year`;
    }
};