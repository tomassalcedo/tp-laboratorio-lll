document.addEventListener("DOMContentLoaded", () => {
    const catalogoData = [
        {
            img: "./images/anuncio1.jpg",
            title: "Casa de lujo en el lago",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae eaque obcaecati. Aperiam voluptatibus facere eos error, quibusdam distinctio blanditiis ducimus suscipit dolorem odio, quaerat voluptas totam quo atque quos?"
        },
        {
            img: "./images/anuncio2.jpg",
            title: "Casa terminados de lujo",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ex a exercitationem quo incidunt et fuga libero? Facilis temporibus consectetur modi earum, alias nisi assumenda accusantium, rem delectus nihil iste?"
        },
        {
            img: "./images/anuncio3.jpg",
            title: "Casa con pileta",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, dolor ut distinctio adipisci minus architecto. Repellendus dolorum repellat accusamus! Hic, reprehenderit sit est perferendis rerum similique assumenda error inventore."
        }
    ];

    const catalogoTemplate = document.getElementById("catalogo-template").content;
    const catalogoSection = document.getElementById("catalogo-section");

    catalogoData.forEach(data => {
        const clone = document.importNode(catalogoTemplate, true);
        clone.querySelector("img").src = data.img;
        clone.querySelector("h3").textContent = data.title;
        clone.querySelector("p").textContent = data.text;
        catalogoSection.appendChild(clone);
    });
});