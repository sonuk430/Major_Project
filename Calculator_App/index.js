const inputBoxEL = document.querySelector("#inputBox");
const btnEL = document.querySelectorAll("button");

let str = "";
let arr = Array.from(btnEL);

console.log(arr);

arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      inputBoxEL.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      inputBoxEL.value = str;
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      inputBoxEL.value = str;
    } else {
      str += e.target.innerHTML;
      inputBoxEL.value = str;
    }
  });
});
