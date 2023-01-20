/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import { doc } from "prettier";

window.onload = function() {
  //write your code here
  //Generar  una nueva carta 1. con un nuevo numero,y otro con el palo
//1 Crear una funcion que genere  un numero aleatorio entre  0 y 14
//2 crear una funcion que genere  el palo de la carta 

document.querySelector('.card').classList.add(generateSuitRandom());
document.querySelector('.card').innerHTML = (generateRandomNumber()); 
 
};

let generateRandomNumber = function (){
  let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  let numberI = Math.floor(Math.random() * numbers.length);
  return numbers[numberI];
}

let generateSuitRandom = function (){
  let suit = ['heart','spade','clover','diamond'];
  let suitI = Math.floor(Math.random() * suit.length);
  return suit[suitI];
}

//array con numero 

// array con palos