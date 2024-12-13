const translations = {
    fr: {
        name: "John Doe",
        job: "Développeur Full Stack",
        whatiam: "Je suis un développeur Front End",
        situation: "Actuellement en formation chez 3W Academy. En recherche d'alternance en Développeur Full Stack (3 semaines entreprise et 1 semaine de cours)",
        hobbies: "Passionné de langues étrangères depuis petit, du Jeu-Vidéo et plein d'autres chose",
    },
    en: {
        name: "John Doe",
        job: "Full Stack Developer",
        whatiam: "I am a full stack developer",
        situation: "Currently training at 3W Academy. Looking for internship in Full Stack Developer (3 months at work and 1 week of training)",
        hobbies: "Passionate foreign languages since little, from the Game-Video and other things",
    },
    es: {
        name: "John Doe",
        job: "Desarrollador Full Stack",
        whatiam: "Soy un desarrollador full stack",
        situation: "Actualmente en formación en 3W Academy. Buscando alternancia en Desarrollador Full Stack (3 semanas en el trabajo y 1 semana de formación)",
        hobbies: "Passionate de idiomas extranjeros desde pequeño, de los juegos de video y otras cosas",
    },
    cn: {
        name: "John Doe",
        job: "全端工程师",
        whatiam: "我是一名全端工程师",
        situation: "目前正在 3W Academy 接受培训。正在寻找全栈开发人员的学徒机会 (3 周企业实践, 1 周课程学习）。",
        hobbies: "从小到大很爱外国语言，游戏和其他事物",
    },
    tw: {
        name: "John Doe",
        job: "全端工程师",
        whatiam: "我是一名全端工程师",
        situation: "目前正在 3W Academy 接受培訓。正在尋找全端開發人員的學徒機會 (3 週企業實踐, 1 週課程學習）。",
        hobbies: "從小到大很愛外國語言，遊戲和其他事物",
    },
    jp: {
        name: "John Doe",
        job: "フルスタック開発者",
        whatiam: "フルスタックをしています。",
        situation: "現在、3W Academyで研修中です。フルスタック開発者としての交替制インターンシップを探しています(企業で3週間、授業で1週)。",
        hobbies: "小さい頃から外国語が好きです。ビデオゲームといった様々なものを好きです。",
    }
};


const languageSelecttop = document.getElementById("lang");
let names = document.querySelector(".name");
let job = document.querySelector(".job");
let whatiam = document.querySelector(".whatiam");
let situation = document.querySelector(".situation");
let hobbies = document.querySelector(".hobbies");

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
    }
};
