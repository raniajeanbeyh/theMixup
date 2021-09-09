const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea2021-e819.restdb.io/rest/cake-baking/id=" + id;

fetch(url)
    .then(res => res.json())
    .then(data => showCake(data));

function showCake(cakes) {
    cakes.forEach((cake) => {
        console.log(cake);
        const template = document.querySelector("template").content;
        const clone = template.cloneNode(true);


        clone.querySelector("h2").textContent = cake.name;
        clone.querySelector("img").src = cake.image;
        clone.querySelector("div.ingredients p").innerHTML = cake.ingredients;
        clone.querySelector("p.instructions").innerHTML = cake.instructions;
        clone.querySelector("a").textContent = cake.source;

        document.querySelector("main").appendChild(clone);
    });
}
// class best-sellers1 .. 1-4