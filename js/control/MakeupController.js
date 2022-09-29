import script from '../script.js'
import Cards from '../card.js'

var cardBlock = document.getElementsByClassName('card-deck')[0];

script.showCards(script.sortCards(Cards), cardBlock, "makeup");






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