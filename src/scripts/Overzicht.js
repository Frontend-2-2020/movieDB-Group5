import Axios from "axios";


// haalt data op uit de databank
var movies = [];
export function getOverzicht() {
    Axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae")
    .then(function (response) {
        movies=response.data.results;
        showCards();
        console.log(response);  
    });
    
};

// Vult de cards in met de data

function showCards() {
    var html = "";
    for (var i = 0; i < movies.length; i++) {
        const data = movies[i];
        html = html + `<div class="col-md-6 col-lg-3 mt-4">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/w154/${data.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.vote_average}</p>
                    <p class="card-text">${data.release_date}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>`
    }

    var container = document.querySelector("#overzichtCards");
        container.innerHTML=html
};




