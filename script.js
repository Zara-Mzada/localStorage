// 1ci variant

// const button = document.getElementById("button");
// const pop_up = document.querySelector(".pop-up");

// let timeOut = 1;
// let currentTime = new Date().getMinutes();

// if (localStorage.getItem("isEntered") === null) {
//   localStorage.setItem("isEntered", "false");
// } 
// else {
//   if (localStorage.getItem("isEntered") === "false") {
//     button.onclick = () => {
//       pop_up.remove();
//       localStorage.setItem("isEntered", "true");
//       localStorage.setItem("lastTime", new Date().getMinutes().toString());
//     };
//   } 
//   else if (localStorage.getItem("isEntered") === "true") {
//     if (parseInt(localStorage.getItem("lastTime")) + timeOut <= currentTime) {
//       localStorage.setItem("isEntered", "false");
//       pop_up.style.display = "block";
//     }
//     else if(currentTime === 0){
//         localStorage.setItem("isEntered", "false");
//         pop_up.style.display = "block";
//     }
//     else {
//       pop_up.remove();
//     }
//   }
// }

// localStorage.clear();


// 2ci variant

const button = document.getElementById("button");
const pop_up = document.querySelector(".pop-up");



if (localStorage.getItem("isEntered") === null) {
  localStorage.setItem("isEntered", "false");
} else {
  if (localStorage.getItem("isEntered") === "false") {
    button.onclick = () => {
      pop_up.remove();
      localStorage.setItem("isEntered", "true");
    };      
    setTimeout(() => {
      pop_up.style.display = "block";
      localStorage.setItem("isEntered", "false");
    }, 60*1000);

  } 
  else if (localStorage.getItem("isEntered") === "true") {
   pop_up.remove();
  }
}

// localStorage.clear();