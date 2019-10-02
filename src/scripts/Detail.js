// export function initMark(){
//     const naam = "Mark";
//     console.log(naam);
// }

// Moet id nemen van de film waarop geklikt is en die na movie zetten
export function getDetail() {
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae").then(function(response){
    getDetail(response.data)
   
    })
}

 console.log(getDetail);