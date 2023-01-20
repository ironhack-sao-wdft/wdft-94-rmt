const chico = document.getElementById("chico");

// chico.addEventListener("click", () => {
//   const src = chico.getAttribute("src");

//   if (src === "./images/chico1.png") {
//     chico.setAttribute("src", "./images/chico2.png");
//   } else {
//     chico.setAttribute("src", "./images/chico1.png");
//   }
// });

chico.addEventListener("mouseover", () => {
  chico.setAttribute("src", "./images/chico2.png");
});

chico.addEventListener("mouseleave", () => {
  chico.setAttribute("src", "./images/chico1.png");
});
