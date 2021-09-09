// const urlParams = new URLSearchParams(window.location.search);
let url = "https://kea2021-e819.restdb.io/rest/cake-baking?max=4";

// THE API key
const options = {
  headers: {
    "x-apikey": "6137297443cedb6d1f97eda8",
  },
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
if (id) {
  url = "https://kea2021-e819.restdb.io/rest/cake-baking/" + id;
  console.log(url);
}
// const url = "https://kea2021-e819.restdb.io/rest/cake-baking/" + id;

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    if (!id) {
      handleData(data);
    } else handleSingleCake(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(cakes) {
  cakes.forEach(handleSingleCake);
}

function handleSingleCake(cake) {
  // cakes.forEach((cake) => {
  console.log(cake);
  // make a template
  // grab it
  const myTemplate = document.querySelector("template").content;
  // clone it
  const myClone = myTemplate.cloneNode(true);
  // populate with data
  myClone.querySelector(".desert-name").textContent = cake.name;
  myClone.querySelector("img").src = cake.image;
  myClone.querySelector("div.ingredients p").innerHTML = cake.ingredients;
  myClone.querySelector("p.instructions").innerHTML = cake.instructions;
  myClone.querySelector("a").textContent = cake.source;

  // append to DOM
  document.querySelector("main").appendChild(myClone);
  // });
}
