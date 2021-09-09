// const urlParams = new URLSearchParams(window.location.search);
const url = "https://kea2021-e819.restdb.io/rest/cake-baking?max=4";

// THE API key
const options = {
    headers: {
        "x-apikey": "6137297443cedb6d1f97eda8",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        handleData(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });

function handleData(cakes) {
    cakes.forEach((cake) => {
        console.log(cake);
        // make a template
        // grab it
        const myTemplate = document.querySelector("template").content;
        // clone it
        const myClone = myTemplate.cloneNode(true);
        // populate with data
        myClone.querySelector("h2").textContent = cake.name;
        myClone.querySelector("img").src = cake.image;
        myClone.querySelector("p.toppings").innerHTML = cake.toppingsTechniques;
        myClone.querySelector("p.toppingsIng").innerHTML = cake.toppingsIngredients;
        myClone.querySelector("a").textContent = cake.source;

        // append to DOM
        document.querySelector("main").appendChild(myClone);
    });
}