const langArray = {
  "h1":{
    "ru": "Сатторов Фуркат",
    "en": "Sattorov Furkat"
  },
  "aim_h2":{
    "ru": "ЖЕЛАЕМАЯ ДОЛЖНОСТЬ",
    "en": "CAREER POSITION"
  },
  "aim_p":{
    "ru": "Веб-разработчик",
    "en": "Web Developer"
  }
}
const changeLang = document.querySelector('select')
const allLang = ["ru", "en"]

changeLang.addEventListener('change', clickURLLanguage);

// переноправить на URL с указанием языка 
function clickURLLanguage() {
  let lang = changeLang.value;
  location.href = window.location.pathname + '#' + lang
  location.reload()
}

function changeLanguage() {
  let hash = window.location.hash
  hash = hash.substr(1)
  console.log(hash);
  if (!allLang.includes(hash)){
    location.href = window.location.pathname + '#ru'
    location.reload()
  }
  changeLang.value = hash
  for (let key in langArray){
    document.querySelector('#lang-'+key).innerHTML = langArray[key][hash]
  }
}
changeLanguage()