const URL = "https://dog.ceo/api/breeds/image/random";
const link = document.querySelector("img");

fetch (URL)
    .then(response => response.json())
    .then(data => {

        const img = document.querySelector("img");
        img.src = data.message;
    });
