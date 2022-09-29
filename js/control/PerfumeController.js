import script from '../script.js'
import Cards from '../card.js'

var cardBlockWomen = document.getElementsByClassName('card-deck')[0];
var cardBlockMen = document.getElementsByClassName('card-deck__mens')[0];


// script.showCards(script.sortCards(Cards), cardBlockWomen, "perfume");


// Отсортированные активные / неактивные
// let sortedActiveCards = script.sortCards(Cards);

// Отсортированный массив по полю gender
// let sortedGenderList = script.getGenderList(sortedActiveCards, "men");





script.showCards(script.getGenderList(script.sortCards(Cards), "women"), cardBlockWomen, "perfume");
script.showCards(script.getGenderList(script.sortCards(Cards), "men"), cardBlockMen, "perfume");



let CardBlock = document.querySelectorAll('.card-3d-text');
let btnCard = document.querySelectorAll('.btn-card-3d');
let clachCard = document.querySelectorAll('.card-3d-grup');


for (let i = 0; i < CardBlock.length; i++) {
	btnCard[i].onclick = function () {
		CardBlock[i].classList.add('card-active');
	} 

	clachCard[i].onclick = function () {
		CardBlock[i].classList.remove('card-active');
	} 
}