// export function initMark(){
//     const naam = "Mark";
//     console.log(naam);
// }

export function getDetail() {
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae").then(function(response){
    getDetail(response.data)
   
    })
}

 console.log(getDetail);