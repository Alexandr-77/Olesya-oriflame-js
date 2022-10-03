import script from '../script.js'
import cards  from '../card.js'

var cardBlock = document.getElementsByClassName('card-deck')[0];
var newProd = document.querySelector('#new-prod');
var nabors = document.querySelector('#nabors');

script.showCards("", cardBlock);
script.showCards(cards, newProd, 'newProd_index');
script.showCards(cards, recommend, 'type_recommend');
script.showCards(cards, nabors, 'type_nabors');




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