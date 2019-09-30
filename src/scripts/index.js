import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import {initKylian} from "./Kylian";
import {initMark} from "./Mark";

const number = Math.random();
if (number > 0.5) {
   initKylian();
}
else{
    initMark();}
