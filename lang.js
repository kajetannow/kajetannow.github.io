var userLang = navigator.language;
var lang;

switch(userLang){
    case "pl-PL":
        lang = 'pl';
        break;
    case "en", 'en-US':
        lang = 'en';
        break;
    default:
        console.log("inny więc - angielski");
        break;
}