import Axios from "axios";


// export function initKylian(){
//     const naam = "Kylian";
//     console.log(naam);
// }

// Zorg dat er op de cards kan geklikt worden
/*
                ----STAPPENPLAN----
Haal de ajax op
koppel axios aan onze cards
maak de klikfunctie

*/
export function getOverzicht() {
    Axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae")
    .then(function (response) {console.log(response);  
    })
    
};

function showCards() {
    
    `<div class="col-md-6 col-lg-3 mt-4">
    <div class="card">
        <img src="/public/placeholder.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">TITEL FILM</h5>
          <p class="card-text">score</p>
          <p class="card-text">Release date</p>
        </div>
    </div>
</div>`
}


