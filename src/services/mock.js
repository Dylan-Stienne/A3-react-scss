import cv from '../img/CV Dylan Stienne.pdf'
import squirle_main from '../img/projects/squirle/main.png'
import portfolio_main from '../img/projects/portfolio/main.png'
import codetonexo_main from '../img/projects/codetonexo/main.png'
import devcoin_main from '../img/projects/devcoin/main.png'
import escape34_main from '../img/projects/escape34/main.png'
import sass_main from '../img/projects/sass/main.png'


export default {
    getMyInfos() {
        return {
            "name": "Dylan Stienne",
            "description": "Développeur Web passionné par le code depuis plusieurs années, je m’intéresse au Front-end comme au Back-end en touchant à tous types de technologies.",
            "phone": "06 50 78 48 62",
            "email": "dylanstienne@gmail.com",
            "src-cv": cv,
            "url-linkedin": "https://www.linkedin.com/in/dylan-stienne-8807981bb/",
            "url-malt": "https://www.malt.fr/profile/dylanstienne?q=dylan+stienne&searchid=5fe9c1c9d557ae08c4ae88da",
            "url-github": "https://github.com/dylan-stienne",
            "url-gitlab": "https://gitlab.com/dylan-stienne"
        }
    },

    getMySkills() {
        return {
            "high": [
                "Python",
                "Nuxt",
                "VueJs",
                "Terraform",
                "Git"
            ],
            "medium": [
                "MongoDB",
                "React.js",
                "AWS",
                "MySQL"
            ],
            "low": [
                "Angular",
                "PHP",
                "Laravel",
                "Symfony"
            ]
        }
    },

    getMyProjects() {
        return [
            {
                name: "squirle",
                color: "color-project-3",
                role: "Développeur full-stack",
                description: "Squirle est un projet d’une WEB application de management destinée aux entreprises auquel j’ai participé dès sa création.\n Ma mission reposait principalement sur la mise en place de la base de données MongoDB et le développement de l’API Python via des Lambdas AWS déployées par Terraform.\n Je me suis aussi penché sur le front Angular de la plateforme sur lequel j’ai principalement fait de la résolution de bugs ou des ajouts de petites améliorations.",
                website: "https://www.squirle.com",
                github: null,
                gitlab: null,
                technologies: [
                    "Python",
                    "Angular",
                    "Sass",
                    "MongoDB",
                    "AWS Lambas",
                    "Terraform"
                ],
                pictures: [
                    squirle_main
                ]
            },
            {
                name: "escape34",
                color: "color-project-2",
                role: "Développeur Front",
                description: "Un site pour résoudre un escape game ? Et oui, si vous décidez de vous y rendre vous trouverez surement le site très basique, c'est le but ! \nUne page cachée sur le thème d'halloween se trouve derière le bouton 'se connecter' du menu. \nMon défi était de designer et de développer un site en 3 jours comprenant des indices pour résoudre les énigmes d'un escape game d'un jeu vidéo qui n'est malheureusement plus jouable aujourd'hui.",
                website: "https://escape-34.netlify.app",
                github: "https://github.com/dylan-stienne/halloween-article",
                gitlab: null,
                technologies: [
                    "Nuxt",
                    "Tailwind",
                    "Git",
                    "Netlify"
                ],
                pictures: [
                    escape34_main
                ]
            },
            {
                name: "codetonexo",
                color: "color-project-1",
                role: "Développeur full-stack",
                description: "CodeTonExo est un projet personnel d’un site d’exercices de programmation pour débutants initialement prévu pour aider mes camarades de classe durant mes études supérieures à Supinfo. \n J’ai créé ce site entièrement moi-même en Php, Html5 et MySql sur environ 6 mois de temps en parallèle de mes cours, néanmoins il a été mon premier projet réel donc il reste beaucoup de points à améliorer notamment le design.",
                website: "https://codetonexo.com",
                github: null,
                gitlab: null,
                technologies: [
                    "Php",
                    "Html5",
                    "MySql"
                ],
                pictures: [
                    codetonexo_main
                ]
            },
            {
                name: "portfolio",
                color: "color-project-3",
                role: "Développeur full-stack",
                description: "Mon portfolio, le site que vous consultez actuellement, est un projet personnel réalisé en React en quelques jours, avec de l’intégration continue via Gitlab et Netlify. \n Il ne possède pas de back office ni de base de données, car son contenu n’est pas voué à changer régulièrement. \n Le Gitlab du projet est disponible si vous souhaitez analyser le code.",
                website: null,
                github: null,
                gitlab: "https://gitlab.com/dylan-stienne/portfolio",
                technologies: [
                    "React",
                    "Sass",
                    "Git",
                    "Netlify"
                ],
                pictures: [
                    portfolio_main
                ]
            },
            {
                name: "devcoin",
                color: "color-project-2",
                role: "Lead développeur",
                description: "Devcoin est un projet ambitieux qui à pour but d'être un forum gamifié d'entraide étudiants au sein du pôle universitaire Léonard De Vinci mais il n'est pas encore accessible pour le public.\n Ce projet à nécessité beaucoup de developpement du côté Back-end comme Front-end sur lesquels j'ai activement participé tout en endossant la casquette de lead développeur du projet.",
                website: null,
                github: null,
                gitlab: null,
                technologies: [
                    "Python",
                    "React.js",
                    "MongoDB",
                    "Sass",
                    "Git"
                ],
                pictures: [
                    devcoin_main
                ]
            },
            {
                name: "intégration Sass",
                color: "color-project-1",
                role: "Intégrateur Front",
                description: "Le but de ce projet à été d'intégrer une maquette d'une home page via la technologie Sass, le second défi était d'heberger ce site sur github pages. \nLe site est donc en ligne mais il n'est pas fonctionnel, il est seulement constituer d'une page d'accueil puisque son développement n'avait que pour but de me faire découvrir de nouveaux outils.",
                website: null,
                github: "https://github.com/dylan-stienne/A2-html-integration",
                gitlab: null,
                technologies: [
                    "Html5",
                    "Sass",
                    "Gulp",
                    "Git"
                ],
                pictures: [
                    sass_main
                ]
            }
        ]
    }
}