const translations = {
    fr: {
        name: "Rémy K",
        job: "Développeur Full Stack",
        whatiam: "Je suis un développeur Full Stack",
        situation: "Actuellement en formation chez 3W Academy. En recherche d'alternance en Développeur Full Stack (3 semaines entreprise et 1 semaine de cours)",
        hobbies: "Passionné de langues étrangères depuis petit, du Jeu-Vidéo et plein d'autres chose",
        linkpresentation: "Présentation",
        linklanguageskills: "Langue Etrangère",
        linkprogrammingandwebskills: "Langages de Programmation et Web",
        linkcv: "Mes CV",
        linkhobbies: "Passion",
        linkfavlightnovel: "Light Novel Favoris",
        linkfavmanga: "Manga Favoris",
        linkfavmusic: "Musique Favoris",
        linkcontact: "Contact",
        linkfavanimes: "Anime favoris",
        linkpersonalproject: "Projets Personnels",
        linkprofessionalproject: "Projets Professionnels",
    },
    en: {
        name: "Remy K",
        job: "Full Stack Developer",
        whatiam: "I am a full stack developer",
        situation: "Currently training at 3W Academy. Looking for internship in Full Stack Developer (3 months at work and 1 week of training)",
        hobbies: "Passionate foreign languages since little, from the Game-Video and other things",
        linkpresentation: "Presentation",
        linklanguageskills: "Foreign Language",
        linkprogrammingandwebskills: "Programming Language and Web",
        linkcv: "My CV",
        linkhobbies: "Passion",
        linkfavlightnovel: "Favorite Light Novel",
        linkfavmanga: "Favorite Manga",
        linkfavmusic: "Favorite Music",
        linkcontact: "Contact",
        linkfavanimes: "Favorite Animes",
        linkpersonalproject: "Personal Projects",
        linkprofessionalproject: "Professional Projects",
    },
    es: {
        name: "Remy K",
        job: "Desarrollador Full Stack",
        whatiam: "Soy un desarrollador full stack",
        situation: "Actualmente en formación en 3W Academy. Buscando alternancia en Desarrollador Full Stack (3 semanas en el trabajo y 1 semana de formación)",
        hobbies: "Passionate de idiomas extranjeros desde pequeño, de los juegos de video y otras cosas",
        linkpresentation: "Presentación",
        linklanguageskills: "Idiomas Extranjeros",
        linkprogrammingandwebskills: "Lenguajes de Programación y Web",
        linkcv: "Mi CV",
        linkhobbies: "Pasion",
        linkfavlightnovel: "Light Novel Favoritos",
        linkfavmanga: "Manga Favoritas",
        linkfavmusic: "Musica Favorita",
        linkcontact: "Contacto",
        linkfavanimes: "Animes Favoritos",
        linkpersonalproject: "Proyectos Personales",
        linkprofessionalproject: "Proyectos Profesionales",
    },
    cn: {
        name: "亦麟",
        job: "全端工程师",
        whatiam: "我是一名全端工程师",
        situation: "目前正在 3W Academy 接受培训。正在寻找全端工程师的学徒机会 (3 周企业实践, 1 周课程学习）。",
        hobbies: "从小到大很爱外国语言，游戏和其他事物",
        linkpresentation: "自我介绍",
        linklanguageskills: "外国语言",
        linkprogrammingandwebskills: "编程语言和网页",
        linkcv: "我的简历",
        linkhobbies: "兴趣",
        linkfavlightnovel: "最喜欢的轻小说",
        linkfavmanga: "最喜欢的漫画",
        linkfavmusic: "最喜欢的音乐",
        linkcontact: "联系方式",
        linkfavanimes: "最喜欢的动漫",
        linkpersonalproject: "个人项目",
        linkprofessionalproject: "企业项目",
    },
    tw: {
        name: "亦麟",
        job: "全端工程师",
        whatiam: "我是一名全端工程师",
        situation: "目前正在 3W Academy 接受培訓。正在尋找全端開發人員的學徒機會 (3 週企業實踐, 1 週課程學習）。",
        hobbies: "從小到大很愛外國語言，遊戲和其他事物",
        linkpresentation: "自我介紹",
        linklanguageskills: "外國語言",
        linkprogrammingandwebskills: "程式語言和網頁",
        linkcv: "我的履歷",
        linkhobbies: "興趣",
        linkfavlightnovel: "最喜歡的燈小說",
        linkfavmanga: "最喜歡的漫畫",
        linkfavmusic: "最喜歡的音樂",
        linkcontact: "聯絡我",
        linkfavanimes: "最喜歡的動畫",
        linkpersonalproject: "個人專案",
        linkprofessionalproject: "專業專案",
    },
    jp: {
        name: "レイミ",
        job: "フルスタック開発者",
        whatiam: "フルスタックをしています。",
        situation: "現在、3W Academyで研修中です。フルスタック開発者としての交替制インターンシップを探しています(企業で3週間、授業で1週)。",
        hobbies: "小さい頃から外国語が好きです。ビデオゲームといった様々なものを好きです。",
        linkpresentation: "自己紹介",
        linklanguageskills: "外国語",
        linkprogrammingandwebskills: "プログラミング言語とウェブ",
        linkcv: "私のCV",
        linkhobbies: "趣味",
        linkfavlightnovel: "好きなライトノベル",
        linkfavmanga: "好きな漫画",
        linkfavmusic: "好きな音楽",
        linkcontact: "連絡先",
        linkfavanimes: "好きなアニメ",
        linkpersonalproject: "個人プロジェクト",
        linkprofessionalproject: "企業プロジェクト",
    }
};


const languageSelecttop = document.getElementById("lang");
let names = document.querySelector(".name");
let job = document.querySelector(".job");
let whatiam = document.querySelector(".whatiam");
let situation = document.querySelector(".situation");
let hobbies = document.querySelector(".hobbies");
let shortPresentation = document.querySelector(".shortpresentation");
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

    if (["cn", "jp", "tw"].includes(language)) {
        shortPresentation.style.height = "120px";
    } else {
        shortPresentation.style.height = ""; 
    }
};
