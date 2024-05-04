const output = document.getElementById("out");
const ro = document.getElementById("ro");
const ge = document.getElementById("ge");
const en = document.getElementById("en");
const jp = document.getElementById("jp");   
const bg = document.getElementById("bg");   
const cat = document.getElementById("cat");   
const ch = document.getElementById("ch");   
const sp = document.getElementById("sp");  
const fr = document.getElementById("fr");   
const ss = document.getElementById("ss");   

function handleClick(event) {
    const lang = event.target.textContent;
    switch (lang) {
        case "Romanian":
            output.textContent = "Te iubesc, ruru!"; // Change this to whatever you want for Romanian
            break;
        case "German":
            output.textContent = "Ich liebe dich, ruru!"; // Change this to whatever you want for German
            break;
        case "English":
            output.textContent = "I love you, ruru!"; // Change this to whatever you want for English
            break;
        case "Japanese":
            output.textContent = "愛しています, ruru!";
            break;
        case "Bulgarian":
            output.textContent = "Обичам те, ruru!";
            break;
        case "CatLanguage":
            output.textContent = "meow, ruru!";
            break;
        case "Chinese":
            output.textContent = "我爱你, ruru!";
            break;
        case "Spanish":
            output.textContent = "Te amo, ruru!";
            break;
        case "French":
            output.textContent = "Je t'aime, ruru!";
            break;
        case "Click for...":
            output.textContent = "Youre so kawaii!!";
            break;
        default:
            output.textContent = "Choose language..";
    }
}


ro.addEventListener("click", handleClick);
ge.addEventListener("click", handleClick);
en.addEventListener("click", handleClick);
jp.addEventListener("click", handleClick);
bg.addEventListener("click", handleClick);
cat.addEventListener("click", handleClick);
ch.addEventListener("click", handleClick);
sp.addEventListener("click", handleClick);
fr.addEventListener("click", handleClick);
ss.addEventListener("click", handleClick);