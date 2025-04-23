let translations = {};

fetch("src/script/languages.json")
  .then((response) => response.json())
  .then((data) => {
    translations = data;
    setLanguage(languageSelecttop.value || "en");
  });


const languageSelecttop = document.getElementById("lang");
// Avatar Side
let names = document.querySelector(".name");
let job = document.querySelector(".job");
let whatiam = document.querySelector(".whatiam");
let situation = document.querySelector(".situation");
let hobbies = document.querySelector(".hobbies");
let shortPresentation = document.querySelector(".shortpresentation");
// Hobbies side
let langtitle = document.querySelector(".languagetitle");
let langtext = document.querySelector(".languagetext");
let animetitle = document.querySelector(".animestitle");
let animetext = document.querySelector(".animestext");
let mangtitle = document.querySelector(".mangatitle");
let mangtext = document.querySelector(".mangatext");
let lntitle = document.querySelector(".lightnoveltitle");
let lntext = document.querySelector(".lightnoveltext");
let musititle = document.querySelector(".musictitle");
let musitext = document.querySelector(".musictext");
// Quick Access Side
let quiacclang = document.querySelector(".quickaccesslang");
let quiaccanime = document.querySelector(".quickaccessanime");
let quiaccmanga = document.querySelector(".quickaccessmanga");
let quiaccnovel = document.querySelector(".quickaccessln"); 
let quiaccmusic = document.querySelector(".quickaccessmusic");

languageSelecttop.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {
    const selectedTranslation = translations[language];
    
    if (selectedTranslation) {
        names.innerText = selectedTranslation.name;
        job.innerText = selectedTranslation.job;
        whatiam.innerText = selectedTranslation.whatiam;
        situation.innerText = selectedTranslation.situation;
        hobbies.innerText = selectedTranslation.hobbies;

        langtitle.innerText = selectedTranslation.languagetitle;
        langtext.innerHTML = selectedTranslation.languagetext;
        animetitle.innerText = selectedTranslation.animestitle;
        animetext.innerHTML = selectedTranslation.animestext;
        mangtitle.innerText = selectedTranslation.mangatitle;
        mangtext.innerHTML = selectedTranslation.mangatext;
        lntitle.innerText = selectedTranslation.lightnoveltitle;
        lntext.innerHTML = selectedTranslation.lightnoveltext;
        musititle.innerText = selectedTranslation.musictitle;
        musitext.innerHTML = selectedTranslation.musictext;

        quiacclang.innerText = selectedTranslation.quickaccesslang;
        quiaccanime.innerText = selectedTranslation.quickaccessanime;
        quiaccmanga.innerText = selectedTranslation.quickaccessmanga;
        quiaccnovel.innerText = selectedTranslation.quickaccessln;
        quiaccmusic.innerText = selectedTranslation.quickaccessmusic;
    }

    if (["cn", "jp", "tw"].includes(language)) {
        shortPresentation.style.height = "120px";
    } else {
        shortPresentation.style.height = ""; 
    }
};
