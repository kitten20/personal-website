const currentDate = new Date().getFullYear();
const startDate = currentDate - new Date(2021, 6, 13).getFullYear();
const typescriptDate = currentDate - new Date(2023, 8, 17).getFullYear();
const ttDate = currentDate - new Date(2022, 1, 15).getFullYear();

const yearsEng = (date: number) => `${date}+ years`;
const yearsRus = (date: number) => date >= 5 ? `${date}+ лет` : `${date}+ года`;

const en = {
    language: '/en',
    mainFindTitle: 'where can you find me?',
    mainProjectVersion: 'Project version:',
    mainCheckTheRepo: 'Check the Repo!',
    homeWelcome: 'Hi, I\'m Daniil Ulyanov!',
    homeDescription: 'An 18-Year-Old Frontend Developer from Russia, who loves old school computer games, delicious pizza, Breakcore music and JavaScript!',
    homeUnderDescription: 'Developing projects since 2021.',
    homeAboutMe: 'my skills and experience',
    homeSoundCloudTitle: 'My SoundCloud Tracks!!!',

    aboutReturn: 'Back To Home',
    aboutTitle: 'My Skills',
    experience: {
        html: {
            kn: 'HTML | BEM',
            t: yearsEng(startDate)
        },
        css: {
            kn: 'CSS/SCSS + Modules',
            t: yearsEng(startDate)
        },
        js: {
            kn: 'JavaScript',
            t: yearsEng(startDate)
        },
        ts: {
            kn: 'TypeScript | TSX | Next.js',
            t: yearsEng(typescriptDate)
        },
        jsx: {
            kn: 'React.js',
            t: yearsEng(ttDate)
        },
        git: {
            kn: 'Git | GitHub | GitLab',
            t: yearsEng(ttDate)
        },
        vite: {
            kn: 'Webpack | Vite',
            t: yearsEng(ttDate)
        },
        fb: {
            kn: 'Firebase',
            t: yearsEng(ttDate)
        }
    },

    aboutWorked: 'work experience',
    worked: {
        freelance: {
            type: 'Freelance',
            date: 'since 21.06.2021',
            skills: 'HTML, CSS, SCSS, JavaScript, TypeScript, React, Styled-components',
            description: 'I gained my first experience as a freelance developer. I managed to practice with a lot of technologies. I was involved in a variety of tasks: starting from fixing bugs in CSS to refactoring the code of online shops from scratch using TypeScript + React.'
        },
        linkiiie: {
            type: 'Linkiiie.ru',
            date: '19.12.2021 to 13.07.2022',
            skills: 'JavaScript, SCSS, BEM, GitHub, Figma',
            description: 'I was involved in the development of a startup for aggregating links to useful tutorials. Specifically, I was engaged in code reviews and frontend development based on Figma designs. I managed to gain teamwork experience through close interaction with backend developers.'
        },
        desc: {
            type: 'DESC-Studio.ru',
            date: '22.08.2022 to 27.06.2023',
            skills: 'HTML, CSS, SCSS (+modules), JavaScript, TypeScript, React (v.18), GitHub',
            description: 'I was part of an outsourced web development team. My responsibilities varied by projects: participating in code reviews, frontend development based on Figma designs (using React + TypeScript), and email layouts for mailings. I was interacting with designers, teamleader and backend developers. I managed to consolidate my knowledge of React, JavaScript and TypeScript, as well as gain experience with multilingual websites.'
        },
        qchart: {
            type: 'QChart.io',
            date: '09.11.2022 to 10.01.2023',
            skills: 'TypeScript, React (v.17), Styled-Components, WebSockets, GitHub, Figma',
            description: 'I managed to participate in the frontend development of a stock analytics startup. The project was written in React with the backend based on Nest.js with data aggregation over WebSockets. I was able to build the frontend using a combination of React + TypeScript + Zustand and participate in a lot of code reviews.'
        },
        slex: {
            type: 'Slex.io | Slavi.io',
            date: 'Since 18.08.2023',
            skills: 'TypeScript, React (v.18), Next.js, SCSS-modules, GitLab',
            description: 'I am actively involved in the frontend development of two projects: a cryptocurrency wallet and a stock exchange based on Next.js + TypeScript. The project allows me to reveal my skills in a variety of tasks: from component layout to working with a large number of factories processing APIs. I am constantly participating in code reviews on GitLab.'
        }
    }
};

const ru = {
    language: '/ru',
    mainFindTitle: 'где можно меня найти?',
    mainProjectVersion: 'Версия проекта:',
    mainCheckTheRepo: 'Глянуть Репозиторий!',
    homeWelcome: 'Привет, я Даниил Ульянов!',
    homeDescription: '18-летний фронтенд-разработчик из России, который очень любит олдскульные игры, вкусную пиццу, брейккор и JavaScript!',
    homeUnderDescription: 'Разрабатываю проекты с 2021 года.',
    homeAboutMe: 'мои опыт и умения',
    homeSoundCloudTitle: 'Мой Саундклауд!!!',

    aboutReturn: 'Вернуться домой',
    aboutTitle: 'Мои Навыки',
    experience: {
        html: {
            kn: 'HTML | BEM',
            t: yearsRus(startDate)
        },
        css: {
            kn: 'CSS/SCSS + Modules',
            t: yearsRus(startDate)
        },
        js: {
            kn: 'JavaScript',
            t: yearsRus(startDate)
        },
        ts: {
            kn: 'TypeScript | TSX | Next.js',
            t: yearsRus(typescriptDate)
        },
        jsx: {
            kn: 'React.js',
            t: yearsRus(ttDate)
        },
        git: {
            kn: 'Git | GitHub | GitLab',
            t: yearsRus(ttDate)
        },
        vite: {
            kn: 'Webpack | Vite',
            t: yearsRus(ttDate)
        },
        fb: {
            kn: 'Firebase',
            t: yearsRus(ttDate)
        }
    },

    aboutWorked: 'Опыт работы',
    worked: {
        freelance: {
            type: 'Фриланс',
            date: 'c 21.06.2021',
            skills: 'HTML, CSS, SCSS, JavaScript, TypeScript, React, Styled-components',
            description: 'Я обрёл свой первый опыт в качестве фриланс-разработчика. Мне удалось попрактиковаться с большим количеством технологий. Занимался простыми и сложными тасками: от CSS-багфиксов до переписывания небольших магазинов с нуля на TypeScript + React.'
        },
        linkiiie: {
            type: 'Linkiiie.ru',
            date: '19.12.2021 по 13.07.2022',
            skills: 'JavaScript, SCSS, БЭМ, GitHub, Figma',
            description: 'Я участвовал в разработке стартапа по агрегации ссылок на полезные руководства. В частности, занимался код-ревью и фронтенд-разработкой по дизайну на Figma. Обрёл опыт командной работы благодаря тесному взаимодействию с бэкенд-разработчиками.'
        },
        desc: {
            type: 'DESC-Studio.ru',
            date: '22.08.2022 по 27.06.2023',
            skills: 'HTML, CSS, SCSS (+modules), JavaScript, TypeScript, React (v.18), GitHub, i18-next',
            description: 'Я был частью команды по веб-разработке на аутсорсе. Мои обязанности различались по проектам: участие в код-ревью, фронтенд-разработке по дизайну Figma (на React + TypeScript) и вёрстке писем для рассылок. Взаимодействовал с дизайнерами, тимлидом и бэкенд-разработчиками. Удалось закрепить знания React, JavaScript и TypeScript, а также обрести опыт работы с многоязычными сайтами.'
        },
        qchart: {
            type: 'QChart.io',
            date: '09.11.2022 по 10.01.2023',
            skills: 'TypeScript, React (v.17), Styled-Components, WebSockets, GitHub, Figma, Zustand',
            description: 'Я смог принять участие в фронтенд-разработке стартапа по биржевой аналитике. Проект был написан на React с бэкендом на Nest.js с агрегацией данных через веб-сокеты. Мне удалось создать фронтенд на сочетании React + TypeScript + Zustand и поучаствовать с большим количеством код-ревью.'
        },
        slex: {
            type: 'Slex.io | Slavi.io',
            date: 'c 18.08.2023',
            skills: 'TypeScript, React (v.18), Next.js, SCSS-modules, GitLab, i18-next',
            description: 'Я активно участвую в фронтенд-разработке двух проектов: кошелька и обменника криптовалют на Next.js + TypeScript. Проект позволяет раскрыть мои навыки в различных тасках: от вёрстки компонентов до работы с большим количеством фабрик, обрабатывающих API. Постоянно участвую в код-ревью на GitLab. '
        }
    }
};

const translates = [en, ru];

export default translates;