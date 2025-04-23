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
// Link Side
let linkpresentation = document.querySelector(".linkpresentation");
let linklanguageskills = document.querySelector(".linklanguageskills");
let linkprogrammingandwebskills = document.querySelector(".linkprogrammingandwebskills");
let linkcv = document.querySelector(".linkcv");
let linkhobbies = document.querySelector(".linkhobbies");
let linkfavlightnovel = document.querySelector(".linkfavlightnovel");
let linkfavmanga = document.querySelector(".linkfavmanga");
let linkfavmusic = document.querySelector(".linkfavmusic");
let linkcontact = document.querySelector(".linkcontact");
let linkfavanimes = document.querySelector(".linkfavanimes");
let linkpersonalproject = document.querySelector(".linkpersonalprojects");
let linkprofessionalproject = document.querySelector(".linkprofessionalprojects");

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
        
        if (["cn", "jp", "tw"].includes(language)) {
            shortPresentation.style.height = "120px";
        } else {
            shortPresentation.style.height = ""; 
        }

        linkpresentation.innerText = selectedTranslation.linkpresentation;
        linklanguageskills.innerText = selectedTranslation.linklanguageskills;
        linkprogrammingandwebskills.innerText = selectedTranslation.linkprogrammingandwebskills;
        linkcv.innerText = selectedTranslation.linkcv;
        linkhobbies.innerText = selectedTranslation.linkhobbies;
        linkfavlightnovel.innerText = selectedTranslation.linkfavlightnovel;
        linkfavmanga.innerText = selectedTranslation.linkfavmanga;
        linkfavmusic.innerText = selectedTranslation.linkfavmusic;
        linkcontact.innerText = selectedTranslation.linkcontact;
        linkfavanimes.innerText = selectedTranslation.linkfavanimes;
        linkpersonalproject.innerText = selectedTranslation.linkpersonalproject;
        linkprofessionalproject.innerText = selectedTranslation.linkprofessionalproject;
    }

};
