import Axios from "axios";


let singlemovie = [];
let productiehuisLijst = [];

export function getDetail(id) {
    Axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=4bc044ddb757b980e41e9e71ef3aafae")
    .then(function (response) {
        singlemovie=response.data;
        productiehuisLijst=singlemovie.production_companies;
        detailInfo();
        addhouse();
    });
    
};


function detailInfo() {
    let htmlDetail = "";

    htmlDetail +=   `<div class="card card__single">
            <img src="https://image.tmdb.org/t/p/w500/${singlemovie.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${singlemovie.title}</h5>
              <p class="card-text">${singlemovie.vote_average}</p>
              <p class="card-text">${singlemovie.release_date}</p>
              <p class="card-text">${singlemovie.overview}</p>
              <ul id="productieHuizen"></ul>
            </div>
        </div>
    </div>`

    const containerDetail = document.querySelector("#detail");
        containerDetail.innerHTML=htmlDetail
};

function addhouse(){
    let htmlHouse = "";

    for (const productiehuisnaam of productiehuisLijst) {
        // console.log(productiehuisnaam.name);

        htmlHouse += `<li class="productiehuis">${productiehuisnaam.name}</li>`

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