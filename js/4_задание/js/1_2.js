const myName = "Роман";
let programmingLanguage = "JavaScripts";
const courseCreatorName = "Никиты Михайловича";
let reasonText = "Зарабатывать";
let numberOfMonth = "10000";

programmingLanguage.toUpperCase();

const result = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования \
 ${programmingLanguage}. Сейчас я изучаю язык программирования ${programmingLanguage} ${courseCreatorName}. \ 
 Я хочу стать веб-разработчиком, чтоб ${reasonText}. `;
console.log(result);






let myInfoText = result;

console.log(
  result.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
);
console.log(myInfoText.length);

console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);