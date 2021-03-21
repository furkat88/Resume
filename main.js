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
  },
  "about_myself_h2":{
    "ru": "О СЕБЕ",
    "en": "ABOUT MYSELF"
  },
  "about_myself_p":{
    "ru": "Разработка для меня - это и работа, и хобби, поэтому даже в нерабочее время я занимаюсь разработкой. Планирую стать <b>Full Stack Developer</b>.",
    "en": "Development for me is both a job and a hobby, so even after hours, I do development. I plan to become <b>Full Stack Developer</b>."
  },
  "education_h2":{
    "ru": "ОБРАЗОВАНИЕ",
    "en": "EDUCATION"
  },
  "education_p":{
    "ru": "<b>Самаркандскии Институт Экономики и Сервиса <br>/2006-2010</b>",
    "en": "<b>Samarkand Institute of Economics and Service <br>/2006-2010</b>"
  },
  "education_p2":{
    "ru": "Бакалавр, факультет Экономика и Менеджмент",
    "en": "Bachelor degree, Faculty of Economics and Management"
  },
  "languages_h2":{
    "ru": "ЯЗЫКИ",
    "en": "LANGUAGES"
  },
  "languages_l1":{
    "ru": "Русскии",
    "en": "Russian"
  },
  "languages_l2":{
    "ru": "Узбекскии",
    "en": "Uzbek"
  },
  "languages_l3":{
    "ru": "Таджикскии",
    "en": "Tadjik"
  },
  "languages_l4":{
    "ru": "Англиискии (Среднии уровень B1)",
    "en": "English (Intermediate B1)"
  },
  "skills_h2":{
    "ru": "НАВЫКИ",
    "en": "SKILLS"
  },
  "skills_p1":{
    "ru": "Технологии: <b>HTML5, CSS3, SCSS, Figma, WordPress</b>",
    "en": "Technologies: <b>HTML5, CSS3, SCSS, Figma, WordPress</b>"
  },
  "skills_p2":{
    "ru": "Язык программирование: <b>JavaScript</b>",
    "en": "Program languages: <b>JavaScript</b>"
  },
  "skills_p3":{
    "ru": "Библиотеки <b>Bootstrap, Jquery</b>",
    "en": "Libraries <b>Bootstrap, Jquery</b>"
  },
  "skills_p4":{
    "ru": "Работа с <b>Git, Github</b>",
    "en": "Work with the <b>Git, Github</b>"
  },
  "courses_h2":{
    "ru": "КУРСЫ",
    "en": "COURSES"
  },
  "courses_p1":{
    "ru": "Веб-программирование учу самостоятельно",
    "en": "Web-development, study by myself"
  },
  "courses_p2":{
    "ru": "Экономика и Туризм в <b>International Management training center</b>",
    "en": "Economics and Tourism in <b>International Management training center</b>"
  },
  "experience_h2":{
    "ru": "ОПЫТ РАБОТЫ",
    "en": "EXPERIENCE"
  },
  "experience_l1":{
    "ru": "Колл-оператор",
    "en": "Call-operator"
  },
  "experience_l2":{
    "ru": "Торговый представитель",
    "en": "Sales Representative"
  },
  "experience_l3":{
    "ru": "Установка солнечные батареи",
    "en": "Installation of solar panels"
  },
  "experience_l4":{
    "ru": "Веб-разработка в поиске команды и опыта...",
    "en": "Web development looking for a team and experience ..."
  },
  "projects_h2":{
    "ru": "СОБСТВЕННЫЕ ПРОЕКТЫ И ФРИЛАНС",
    "en": "OWN PROJECTS AND FREELANCE"
  },
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