import Axios from "axios";


// export function initMark(){
//     const naam = "Mark";
//     console.log(naam);
// }

// Moet id nemen van de film waarop geklikt is en die na movie zetten
// export function getDetail() {
//     axios.get("https://api.themoviedb.org/3/movie/429617?api_key=4bc044ddb757b980e41e9e71ef3aafae").then(function(response){
//     getDetail(response.data)
   
//     })
// }

//  console.log(getDetail);


var singlemovie = [];
export function getDetail(id) {
    Axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=4bc044ddb757b980e41e9e71ef3aafae")
    .then(function (response) {
        singlemovie=response.data;
        detailInfo();
        console.log(singlemovie);  
    });
    
};


function detailInfo() {
    var htmlDetail = "";
    // for (var i = 0; i < singlemovie.length; i++) {
    //     const data = singlemovie[i];
    //     htmlDetail = htmlDetail + 

    htmlDetail +=   `<div class="card card__single">
            <img src="/public/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${singlemovie.title}</h5>
              <p class="card-text">${singlemovie.vote_average}</p>
              <p class="card-text">${singlemovie.release_date}</p>
              <p>Samenvatting</p>
              <p>Productie Bedrijven</p>
            </div>
        </div>
    </div>`



        // container.innerHTML(
            
        // )
        
    // }
    var containerDetail = document.querySelector("#detail");
        containerDetail.innerHTML=htmlDetail
};