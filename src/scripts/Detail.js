import Axios from "axios";


let singlemovie = [];
let productiehuisLijst = [];

// Call naar DB
export function getDetail(id) {
    Axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=4bc044ddb757b980e41e9e71ef3aafae")
    .then(function (response) {
        singlemovie=response.data;
        productiehuisLijst=singlemovie.production_companies;
        detailInfo();
        addhouse();
    });
    
};

// Functie om 1 enkele film te zien, met bijhorende HTML render
function detailInfo() {
    let htmlDetail = "";

    htmlDetail +=  `<div class="card card__single">
        <div class="card-body more-info">
            <img src="https://image.tmdb.org/t/p/w342/${singlemovie.poster_path}" class="smallImage"" alt="...">
            <h3 class="card-title">${singlemovie.title}</h3>
            <p class="card-text smallertext">Score: ${singlemovie.vote_average}</p>
            <p class="card-text smallertext">Release: ${singlemovie.release_date}</p>
            <p class="card-text synopsis">${singlemovie.overview}</p>
            <ul id="productieHuizen" class="smallertext"></ul>
            </div>
        <img src="https://image.tmdb.org/t/p/w1280/${singlemovie.backdrop_path}" class="bigImage" alt="...">
    </div>`

    const containerDetail = document.querySelector("#detail");
        containerDetail.innerHTML=htmlDetail
};

// Functie om lijst te maken van alle productiehuizen.
function addhouse(){
    let htmlHouse = "";

    for (const productiehuisnaam of productiehuisLijst) {
        // console.log(productiehuisnaam.name);

        htmlHouse += `<li class="productiehuis">- ${productiehuisnaam.name}</li>`

        const productie = document.querySelector("#productieHuizen");
            productie.innerHTML=htmlHouse;
      };
};


// OUDE manier (gewoon om het beter te begrijpen :) )
// function addhouse(){
//     for (const productiehuisnaam of productiehuisLijst) {
//         console.log(productiehuisnaam.name);
//         const productie = document.querySelector("#productieHuizen");
//         const litje = document.createElement("li");
//         litje.appendChild(document.createTextNode(productiehuisnaam.name))
//         productie.appendChild(litje);
//       };
// };