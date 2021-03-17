const langArray = {
  "h1":{
    "ru": "Сатторов Фуркат",
    "en": "Sattorov Furkat"
  },
  "main_aim_h2":{
    "ru": "ЖЕЛАЕМАЯ ДОЛЖНОСТЬ",
    "en": "CAREER POSITION"
  },
  "main_aim_p":{
    "ru": "Веб-разработчик",
    "en": "Web Developer"
  }
}
const ruLang = document.querySelector('change_lang')
const enLang = document.querySelector('change_lang2')

ruLang.addEventListener('click', clickURLLanguage);

// переноправить на URL с указанием языка 
function clickURLLanguage() {
  let lang = ruLang.value;
  location.href = window.location.pathname + '#'+lang;
  
}
console.log(lang);