const translations = {
    fr: {
        name: "John Doe",
        job: "Développeur Front End",
        whatiam: "Je suis un développeur Front End",
        situation: "Actuellement en recherche d'une formation + travail dans le secteur du développeur informatique (Web + Jeux Vidéo)",
        hobbies: "Passionné de langues étrangères depuis petit, du Jeu-Vidéo et plein d'autres chose",
    },
    en: {
        name: "John Doe",
        job: "Front-End Developer",
        whatiam: "I am a front-end developer",
        situation: "Currently looking for a training + job in the IT sector (Web + Video Games)",
        hobbies: "Passionate foreign languages since little, from the Game-Video and other things",
    },
    es: {
        name: "John Doe",
        job: "Desarrollador Front-End",
        whatiam: "Soy un desarrollador front-end",
        situation: "Actualmente estudiando una formación + trabajo en el sector IT (Web + Juegos de video)",
        hobbies: "Passionate de idiomas extranjeros desde pequeño, de los juegos de video y otras cosas",
    },
    cn: {
        name: "John Doe",
        job: "前端开发",
        whatiam: "我是一名前端开发",
        situation: "目前正在寻找培训+工作在IT领域 Web+游戏",
        hobbies: "从小到大很爱外国语言，游戏和其他事物",
    },
    tw: {
        name: "John Doe",
        job: "前端開發",
        whatiam: "我是一名前端開發",
        situation: "目前正在學習培訓+工作在IT領域 Web+遊戲",
        hobbies: "從小到大很愛外國語言，遊戲和其他事物",
    },
    jp: {
        name: "John Doe",
        job: "フロントエンド開発者",
        whatiam: "フロントエンドをしています。",
        situation: " 現在、IT分野,ウェブ＋ビデオゲームでのトレーニング＋仕事を探している。",
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
