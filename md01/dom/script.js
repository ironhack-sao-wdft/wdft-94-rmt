const title = document.getElementById("title");

const containers = document.getElementsByClassName("container");

const arrContainers = Array.from(containers);
console.log(arrContainers);

arrContainers.forEach((currentHTMLElement) => {
  currentHTMLElement.classList.add("bg-blue");
});

console.log(containers);

// containers[1].innerText = "Morango";

for (let i = 0; i < containers.length; i++) {
  containers[i].innerText = "Mudei no JS!";
}

const ps = document.getElementsByTagName("p");

for (let i = 0; i < ps.length; i++) {
  console.log(ps[i].classList);

  const arrClassList = Array.from(ps[i].classList);

  if (arrClassList.includes("2")) {
    ps[i].classList.add("bg-blue");
  }
}

const divEvens = document.querySelector(".even");
console.log(divEvens);

divEvens.innerText = "Mudandoooo";

// const pai = document.getElementById("pai");

// pai.removeChild()
// pai.appendChild()

// const interval = setInterval(() => {
//   title.innerText = Number(title.innerText) + 1;
// }, 1000);

// // clearInterval(interval);
