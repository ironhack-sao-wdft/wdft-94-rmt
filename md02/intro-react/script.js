// const newElement = document.createElement("p");
// newElement.innerText = "Criado pelo JS";

// document.children[0].children[1].appendChild(newElement);

// const exemplo = document.getElementById("exemplo");
// console.log(exemplo);

// const root = document.getElementById("root");

const title = React.createElement("h1", { children: ["Oi"] });
console.log(title);

const p = React.createElement("p", {
  children: ["Oi, criado pelo react"],
});

const div = React.createElement("div", {
  children: ["começo", title, "oi", p, "tchau"],
});

ReactDOM.createRoot(root).render(div);
