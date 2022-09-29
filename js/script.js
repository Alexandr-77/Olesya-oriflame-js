
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша форма отправлена. Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// =====================================

let burger = document.querySelector('.burger-wrap');
let showMenu = document.querySelector('.navbar-navss');

burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
});

burger.addEventListener('click', () => {
   showMenu.classList.toggle('navbar-navss-active');
})



import card from './card.js';
// ========== карточки JS =============



import cardList from './card.js'; // Массив карточек
import cardTypes from './cardTypes.js'; // Справочник типов параметров карточки

// {
//   showCards: "строка",
//   createCard: function () {}, 
//   sortCards: function () []
// }

export default {
// Объект в который отрисовываются карточки
// let outDiv = document.getElementsByClassName('card-deck')[0];

// showCards - Отрисовка карточек на странице

// source - Масив карточек,
// outDiv - Блок для отображения карточки
// type - 

showCards: function (source, outDiv, type) {

  if (source === null || source === undefined)  {
    source = cardList;
  }

  for (let i = 0; i < source.length; i++) {
    if (type !== null && type !== undefined) {
      if (source[i].type === type) {
        outDiv.innerHTML += this.createCard(source[i].img, source[i].title, source[i].subtitle, source[i].code, source[i].price, source[i].text, source[i].exist,);
      } 
    } else {
        outDiv.innerHTML += this.createCard(source[i].img, source[i].title, source[i].subtitle, source[i].code, source[i].price, source[i].text, source[i].exist);
      }
             
      
  }
},


// Сортировка карточек по полю gender
getGenderList: function (source, gender) {
  let sortList = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i].gender === gender) {
      sortList.push(source[i])
    }
  }
  // console.log(sortList);
  return sortList;
},


// Формирование карточки по входным параметрам
createCard: function (img, title, subtitle, code, price, text, exist ) {

      let classes = "";
      if (!exist) {
        classes = 'card--smooth';
      }

return '<div class="card ' + classes + ' card-3d">' +
          // '<img src="' + img + '"  class="card-img-top" alt="' + title + '. ' + subtitle + '">'+
          `<img src="${img}" class="card-img-top" alt="${title} ${subtitle}"/>`+
          '<div class="card-body">'+
            '<h5 class="card-title">' + title + '</h5>'+
            '<p class="card-text">' + subtitle + '</p>'+
            '<p>код - ' + code +'</p>'+
          '</div>'+
          '<div class="card-footer">'+
            '<small class="text-muted">' + price + ' руб</small>'+
          '</div>'+
          '<div class="card-3d-text">'+
            '<div class="card-3d-grup">'+
                '<span class="card-3d-close"></span>'+
            '</div>'+
            '<h5>' + title + '</h5>'+
            '<p>' + text + '</p>'+
          '</div>'+
          '<button class="btn-card-3d">Подробнее<i class="fas fa-arrow-circle-right"></i></button>'+
          '</div>'
  },

  sortCards: function ( arrayCard ) {
    let array = [];
  for (let i = 0; i < cardTypes.existType.length; i++) {
    for (let item = 0; item < arrayCard.length; item++) {
      if (arrayCard[item].exist === cardTypes.existType[i].val) {
        array.push(arrayCard[item]);
      }      
    }
  }
  return array;
  }
}



// {



// existType: [ // param: exist
//   {
//      val: true
//   },
//   {
//      val: false
//   }
// ]


// }


// ======================================================

// Клик на карточку 

// let CardBlock = document.querySelectorAll('.card-3d-text');
// let btnCard = document.querySelectorAll('.btn-card-3d');
// let clachCard = document.querySelectorAll('.card-3d-grup');


// for (let i = 0; i < CardBlock.length; i++) {
// 	btnCard[i].onclick = function () {
// 		CardBlock[i].classList.add('card-active');
// 	} 

// 	clachCard[i].onclick = function () {
// 		CardBlock[i].classList.remove('card-active');
// 	} 
// }


