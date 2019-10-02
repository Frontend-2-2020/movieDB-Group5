import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import Axios from 'axios';
import queryString from 'query-string';
import { getOverzicht } from './Overzicht';
// import {} from "./Overzicht";
// import {} from "./Detail";

// als key toont detail geen key overzichtpagina

const parsed = queryString.parse(window.location.search);
console.log(parsed);

if (parsed.movie) {
    //movie uit url
    var show = document.getElementById("overzicht");
    show.classList.add("toondetail");
    
}
else{
    var show2 = document.getElementById("detail");
    show2.classList.add("toonoverzicht");
    getOverzicht();
    
}

// if () {
//     axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae");
// } else {
    
// }

// const number = Math.random();
// if (number > 0.5) {
//    initKylian();
// }
// else{
//     initMark();}
