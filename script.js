document.addEventListener("DOMContentLoaded", function () {

    const langBtn = document.querySelector(".language-btn");

    let currentLang = "ar";


    const translations = {

        ar: {
            navHome: "الرئيسية",
            navAbout: "من نحن",
            navProjects: "المشاريع",
            navSectors: "القطاعات",
            navContact: "تواصل معنا",

            heroSmall: "Our Tile, Your Style.",
            heroDescription: "أعمال الرخام والجرانيت بأعلى معايير الجودة والدقة",

            viewProjects: "استعرض مشاريعنا",
            contactUs: "تواصل معنا",

            founded: "تأسست منذ",
            portfolioProjects: "مشروع في Portfolio",
            sectorsCount: "قطاعات مختلفة",

            aboutLabel: "من نحن",
            aboutTitle1: "خبرة في تنفيذ أعمال",
            aboutTitle2: "الرخام والجرانيت",
            aboutText:
                "تأسست Modern Construction في عام 2019، وتقدم خدمات متخصصة في مجال أعمال الرخام والجرانيت وتنفيذ المشروعات بمختلف القطاعات.",

            sectorsLabel: "مجالات عملنا",
            sectorsTitle: "القطاعات التي نخدمها",

            government: "المشروعات الحكومية",
            administrative: "المباني الإدارية والبنوك",
            residential: "المشروعات السكنية",
            educational: "المشروعات التعليمية",
            commercial: "المشروعات التجارية",
            healthcare: "المستشفيات والمنشآت الصحية",
            hospitality: "الفنادق والقرى السياحية",

            portfolioLabel: "Portfolio",
            featuredProjects: "مشاريعنا المميزة",

            centralBank: "البنك المركزي - المنيا",
            governmentProject: "مشروع حكومي",

            quesna: "شركة قويسنا",
            administrativeProject: "مشروع إداري",

            zed: "أبراج زد B",
            residentialProject: "مشروع سكني",

            fullPortfolio: "عرض جميع المشاريع",

            contactLabel: "تواصل معنا",
            haveProject: "هل لديك مشروع؟",
            contactText:
                "تواصل معنا لمعرفة المزيد عن أعمالنا ومشاريعنا.",

            footer:
                "© Modern Construction. جميع الحقوق محفوظة."
        },


        en: {
            navHome: "Home",
            navAbout: "About Us",
            navProjects: "Projects",
            navSectors: "Sectors",
            navContact: "Contact Us",

            heroSmall: "Our Tile, Your Style.",
            heroDescription:
                "Marble and granite works with the highest standards of quality and precision.",

            viewProjects: "View Our Projects",
            contactUs: "Contact Us",

            founded: "Established Since",
            portfolioProjects: "Projects in Portfolio",
            sectorsCount: "Different Sectors",

            aboutLabel: "ABOUT US",
            aboutTitle1: "Expertise in",
            aboutTitle2: "Marble and Granite Works",
            aboutText:
                "Modern Construction was established in 2019, providing specialized marble and granite services and executing projects across various sectors.",

            sectorsLabel: "OUR SECTORS",
            sectorsTitle: "The Sectors We Serve",

            government: "Government Projects",
            administrative: "Administrative Buildings & Banks",
            residential: "Residential Projects",
            educational: "Educational Projects",
            commercial: "Commercial Projects",
            healthcare: "Hospitals & Healthcare Facilities",
            hospitality: "Hotels & Resorts",

            portfolioLabel: "Portfolio",
            featuredProjects: "Featured Projects",

            centralBank: "Central Bank - Minia",
            governmentProject: "Government Project",

            quesna: "Quesna Company",
            administrativeProject: "Administrative Project",

            zed: "Zed Towers B",
            residentialProject: "Residential Project",

            fullPortfolio: "View Full Portfolio",

            contactLabel: "CONTACT US",
            haveProject: "Have a Project?",
            contactText:
                "Contact us to learn more about our work and projects.",

            footer:
                "© Modern Construction. All Rights Reserved."
        }

    };


    function updateLanguage() {

        const t = translations[currentLang];


        document.documentElement.lang = currentLang;

        document.documentElement.dir =
            currentLang === "ar"
                ? "rtl"
                : "ltr";


        /* NAV */

        const nav = document.querySelectorAll(".navbar nav a");

        if (nav.length >= 5) {

            nav[0].textContent = t.navHome;
            nav[1].textContent = t.navAbout;
            nav[2].textContent = t.navProjects;
            nav[3].textContent = t.navSectors;
            nav[4].textContent = t.navContact;

        }


        /* HERO */

        const smallTitle =
            document.querySelector(".small-title");

        if (smallTitle)
            smallTitle.textContent = t.heroSmall;


        const heroDescription =
            document.querySelector(".hero-description");

        if (heroDescription)
            heroDescription.textContent =
                t.heroDescription;


        const heroButtons =
            document.querySelectorAll(".hero-buttons .btn");

        if (heroButtons.length >= 2) {

            heroButtons[0].textContent =
                t.viewProjects;

            heroButtons[1].textContent =
                t.contactUs;

        }


        /* STATS */

        const stats =
            document.querySelectorAll(".stats .stat p");

        if (stats.length >= 3) {

            stats[0].textContent = t.founded;
            stats[1].textContent = t.portfolioProjects;
            stats[2].textContent = t.sectorsCount;

        }


        /* ABOUT */

        const aboutLabel =
            document.querySelector(".about .section-label");

        if (aboutLabel)
            aboutLabel.textContent = t.aboutLabel;


        const aboutTitle =
            document.querySelector(".about h2");

        if (aboutTitle) {

            const spans =
                aboutTitle.querySelectorAll("span");

            if (spans.length >= 2) {

                spans[0].textContent =
                    t.aboutTitle1;

                spans[1].textContent =
                    t.aboutTitle2;

            }

        }


        const aboutText =
            document.querySelector(".about .container > p:last-child");

        if (aboutText)
            aboutText.textContent =
                t.aboutText;


        /* SECTORS */

        const sectorLabel =
            document.querySelector(".sectors .section-label");

        if (sectorLabel)
            sectorLabel.textContent =
                t.sectorsLabel;


        const sectorTitle =
            document.querySelector(".sectors h2");

        if (sectorTitle)
            sectorTitle.textContent =
                t.sectorsTitle;


        const sectorTitles =
            document.querySelectorAll(".sector-card h3");

        if (sectorTitles.length >= 7) {

            sectorTitles[0].textContent =
                t.government;

            sectorTitles[1].textContent =
                t.administrative;

            sectorTitles[2].textContent =
                t.residential;

            sectorTitles[3].textContent =
                t.educational;

            sectorTitles[4].textContent =
                t.commercial;

            sectorTitles[5].textContent =
                t.healthcare;

            sectorTitles[6].textContent =
                t.hospitality;

        }


        /* PROJECTS */

        const projectsLabel =
            document.querySelector(".projects .section-label");

        if (projectsLabel)
            projectsLabel.textContent =
                t.portfolioLabel;


        const projectsTitle =
            document.querySelector(".projects h2");

        if (projectsTitle)
            projectsTitle.textContent =
                t.featuredProjects;


        const projectCards =
            document.querySelectorAll(
                ".projects-grid .project-card"
            );


        if (projectCards.length >= 3) {

            /* Project 1 */

            projectCards[0]
                .querySelector("h3")
                .textContent =
                t.centralBank;

            projectCards[0]
                .querySelector("p")
                .textContent =
                t.governmentProject;


            /* Project 2 */

            projectCards[1]
                .querySelector("h3")
                .textContent =
                t.quesna;

            projectCards[1]
                .querySelector("p")
                .textContent =
                t.administrativeProject;


            /* Project 3 */

            projectCards[2]
                .querySelector("h3")
                .textContent =
                t.zed;

            projectCards[2]
                .querySelector("p")
                .textContent =
                t.residentialProject;

        }


        /* PORTFOLIO BUTTON */

        const portfolioButton =
            document.querySelector(
                ".portfolio-button .btn"
            );

        if (portfolioButton)
            portfolioButton.textContent =
                t.fullPortfolio;


        /* CONTACT */

        const contactLabel =
            document.querySelector(".contact .section-label");

        if (contactLabel)
            contactLabel.textContent =
                t.contactLabel;


        const contactTitle =
            document.querySelector(".contact h2");

        if (contactTitle)
            contactTitle.textContent =
                t.haveProject;


        const contactText =
            document.querySelector(
                ".contact .container > p:not(.section-label)"
            );

        if (contactText)
            contactText.textContent =
                t.contactText;


        /* FOOTER */

        const footerText =
            document.querySelector("footer p");

        if (footerText)
            footerText.textContent =
                t.footer;


        /* BUTTON */

        if (langBtn) {

            langBtn.textContent =
                currentLang === "ar"
                    ? "EN"
                    : "AR";

        }

    }


    /* LANGUAGE BUTTON */

    if (langBtn) {

        langBtn.addEventListener("click", function () {

            currentLang =
                currentLang === "ar"
                    ? "en"
                    : "ar";

            updateLanguage();

        });

    }


    /* INITIAL */

    updateLanguage();

});