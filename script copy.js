/* =========================================================
   MODERN CONSTRUCTION
   ARABIC / ENGLISH LANGUAGE SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const langBtn = document.querySelector(".language-btn");

    let currentLang = "ar";


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        /* =================================================
           ARABIC
        ================================================= */

        ar: {

            /* NAVBAR */

            home: "الرئيسية",

            about: "من نحن",

            projects: "المشاريع",

            sectors: "القطاعات",

            contact: "تواصل معنا",


            /* HERO */

            slogan: "Our Tile, Your Style.",

            heroDescription:
                "أعمال الرخام والجرانيت بأعلى معايير الجودة والدقة",

            viewProjects:
                "استعرض مشاريعنا",

            contactUs:
                "تواصل معنا",


            /* STATS */

            founded:
                "تأسست منذ",

            portfolioProjects:
                "مشروع في Portfolio",

            differentSectors:
                "قطاعات مختلفة",


            /* ABOUT */

            aboutLabel:
                "من نحن",

            aboutTitle:
                "خبرة في تنفيذ أعمال",

            marbleGranite:
                "الرخام والجرانيت",

            aboutText:
                "تأسست Modern Construction في عام 2019، وتقدم خدمات متخصصة في مجال أعمال الرخام والجرانيت وتنفيذ المشروعات بمختلف القطاعات.",


            /* SECTORS */

            sectorsLabel:
                "مجالات عملنا",

            sectorsTitle:
                "القطاعات التي نخدمها",

            government:
                "المشروعات الحكومية",

            administrative:
                "المباني الإدارية والبنوك",

            residential:
                "المشروعات السكنية",

            educational:
                "المشروعات التعليمية",

            commercial:
                "المشروعات التجارية",

            healthcare:
                "المستشفيات والمنشآت الصحية",

            hospitality:
                "الفنادق والقرى السياحية",


            /* PROJECTS */

            portfolio:
                "Portfolio",

            latestProjects:
                "مشاريعنا المميزة",

            centralBank:
                "البنك المركزي - المنيا",

            governmentProject:
                "مشروع حكومي",

            quesna:
                "Quesna Company",

            administrativeProject:
                "مشروع إداري",

            zed:
                "Zed Towers B",

            residentialProject:
                "مشروع سكني",

            fullPortfolio:
                "عرض الـPortfolio كامل",


            /* CONTACT */

            contactLabel:
                "تواصل معنا",

            haveProject:
                "هل لديك مشروع؟",

            contactText:
                "تواصل معنا لمعرفة المزيد عن أعمالنا ومشاريعنا.",


            /* FOOTER */

            rights:
                "© Modern Construction. All Rights Reserved."

        },


        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            /* NAVBAR */

            home:
                "Home",

            about:
                "About Us",

            projects:
                "Projects",

            sectors:
                "Sectors",

            contact:
                "Contact Us",


            /* HERO */

            slogan:
                "Our Tile, Your Style.",

            heroDescription:
                "Marble and granite works with the highest standards of quality and precision",

            viewProjects:
                "View Our Projects",

            contactUs:
                "Contact Us",


            /* STATS */

            founded:
                "Founded in",

            portfolioProjects:
                "Projects in Portfolio",

            differentSectors:
                "Different Sectors",


            /* ABOUT */

            aboutLabel:
                "About Us",

            aboutTitle:
                "Experience in",

            marbleGranite:
                "Marble & Granite Works",

            aboutText:
                "Founded in 2019, Modern Construction provides specialized marble and granite services and executes projects across different sectors.",


            /* SECTORS */

            sectorsLabel:
                "Our Fields",

            sectorsTitle:
                "Sectors We Serve",

            government:
                "Government Projects",

            administrative:
                "Administrative Buildings & Banks",

            residential:
                "Residential Projects",

            educational:
                "Educational Projects",

            commercial:
                "Commercial Projects",

            healthcare:
                "Hospitals & Healthcare Facilities",

            hospitality:
                "Hotels & Resorts",


            /* PROJECTS */

            portfolio:
                "PORTFOLIO",

            latestProjects:
                "Featured Projects",

            centralBank:
                "Central Bank - Minia",

            governmentProject:
                "Government Project",

            quesna:
                "Quesna Company",

            administrativeProject:
                "Administrative Project",

            zed:
                "Zed Towers B",

            residentialProject:
                "Residential Project",

            fullPortfolio:
                "View Full Portfolio",


            /* CONTACT */

            contactLabel:
                "Contact Us",

            haveProject:
                "Have a Project?",

            contactText:
                "Contact us to learn more about our work and projects.",


            /* FOOTER */

            rights:
                "© Modern Construction. All Rights Reserved."

        }

    };


    /* =====================================================
       CHANGE LANGUAGE
    ===================================================== */

    function changeLanguage() {

        const lang = translations[currentLang];


        /* HTML LANGUAGE */

        document.documentElement.lang =
            currentLang;

        document.documentElement.dir =
            currentLang === "ar"
                ? "rtl"
                : "ltr";


        /* =================================================
           NAVBAR
        ================================================= */

        const navLinks =
            document.querySelectorAll("nav a");

        if (navLinks.length >= 5) {

            navLinks[0].textContent =
                lang.home;

            navLinks[1].textContent =
                lang.about;

            navLinks[2].textContent =
                lang.projects;

            navLinks[3].textContent =
                lang.sectors;

            navLinks[4].textContent =
                lang.contact;

        }


        /* LANGUAGE BUTTON */

        if (langBtn) {

            langBtn.textContent =
                currentLang === "ar"
                    ? "EN"
                    : "AR";

        }


        /* =================================================
           HERO
        ================================================= */

        const slogan =
            document.querySelector(".small-title");

        if (slogan) {

            slogan.textContent =
                lang.slogan;

        }


        const heroDescription =
            document.querySelector(".hero-description");

        if (heroDescription) {

            heroDescription.textContent =
                lang.heroDescription;

        }


        const heroButtons =
            document.querySelectorAll(
                ".hero-buttons .btn"
            );

        if (heroButtons.length >= 2) {

            heroButtons[0].textContent =
                lang.viewProjects;

            heroButtons[1].textContent =
                lang.contactUs;

        }


        /* =================================================
           STATS
        ================================================= */

        const stats =
            document.querySelectorAll(".stat");

        if (stats.length >= 3) {

            const statTexts = [

                lang.founded,

                lang.portfolioProjects,

                lang.differentSectors

            ];

            stats.forEach((stat, index) => {

                const text =
                    stat.querySelector("p");

                if (
                    text &&
                    statTexts[index]
                ) {

                    text.textContent =
                        statTexts[index];

                }

            });

        }


        /* =================================================
           ABOUT
        ================================================= */

        const about =
            document.querySelector(".about");

        if (about) {

            const label =
                about.querySelector(
                    ".section-label"
                );

            if (label) {

                label.textContent =
                    lang.aboutLabel;

            }


            const title =
                about.querySelector("h2");

            if (title) {

                title.innerHTML =
                    `${lang.aboutTitle}
                    <span>${lang.marbleGranite}</span>`;

            }


            const paragraph =
                about.querySelector(
                    "p:last-child"
                );

            if (paragraph) {

                paragraph.textContent =
                    lang.aboutText;

            }

        }


        /* =================================================
           SECTORS
        ================================================= */

        const sectors =
            document.querySelector(".sectors");

        if (sectors) {

            const label =
                sectors.querySelector(
                    ".section-label"
                );

            if (label) {

                label.textContent =
                    lang.sectorsLabel;

            }


            const title =
                sectors.querySelector("h2");

            if (title) {

                title.textContent =
                    lang.sectorsTitle;

            }


            const cards =
                sectors.querySelectorAll(
                    ".sector-card h3"
                );


            const sectorNames = [

                lang.government,

                lang.administrative,

                lang.residential,

                lang.educational,

                lang.commercial,

                lang.healthcare,

                lang.hospitality

            ];


            cards.forEach((card, index) => {

                if (sectorNames[index]) {

                    card.textContent =
                        sectorNames[index];

                }

            });

        }


        /* =================================================
           PROJECTS
        ================================================= */

        const projectsSection =
            document.querySelector(
                ".projects"
            );

        if (projectsSection) {

            const label =
                projectsSection.querySelector(
                    ".section-label"
                );

            if (label) {

                label.textContent =
                    lang.portfolio;

            }


            const title =
                projectsSection.querySelector(
                    "h2"
                );

            if (title) {

                title.textContent =
                    lang.latestProjects;

            }


            const projectCards =
                projectsSection.querySelectorAll(
                    ".project-card"
                );


            /* PROJECT 1 */

            if (projectCards[0]) {

                const h3 =
                    projectCards[0]
                        .querySelector("h3");

                const p =
                    projectCards[0]
                        .querySelector("p");

                if (h3) {

                    h3.textContent =
                        lang.centralBank;

                }

                if (p) {

                    p.textContent =
                        lang.governmentProject;

                }

            }


            /* PROJECT 2 */

            if (projectCards[1]) {

                const h3 =
                    projectCards[1]
                        .querySelector("h3");

                const p =
                    projectCards[1]
                        .querySelector("p");

                if (h3) {

                    h3.textContent =
                        lang.quesna;

                }

                if (p) {

                    p.textContent =
                        lang.administrativeProject;

                }

            }


            /* PROJECT 3 */

            if (projectCards[2]) {

                const h3 =
                    projectCards[2]
                        .querySelector("h3");

                const p =
                    projectCards[2]
                        .querySelector("p");

                if (h3) {

                    h3.textContent =
                        lang.zed;

                }

                if (p) {

                    p.textContent =
                        lang.residentialProject;

                }

            }


            /* FULL PORTFOLIO */

            const portfolioBtn =
                projectsSection.querySelector(
                    'a[href="portfolio.html"]'
                );

            if (portfolioBtn) {

                portfolioBtn.textContent =
                    lang.fullPortfolio;

            }

        }


        /* =================================================
           CONTACT
        ================================================= */

        const contact =
            document.querySelector(
                ".contact"
            );

        if (contact) {

            const label =
                contact.querySelector(
                    ".section-label"
                );

            if (label) {

                label.textContent =
                    lang.contactLabel;

            }


            const title =
                contact.querySelector(
                    "h2"
                );

            if (title) {

                title.textContent =
                    lang.haveProject;

            }


            const paragraph =
                contact.querySelector(
                    "p:not(.section-label)"
                );

            if (paragraph) {

                paragraph.textContent =
                    lang.contactText;

            }

        }


        /* =================================================
           FOOTER
        ================================================= */

        const footer =
            document.querySelector(
                "footer p"
            );

        if (footer) {

            footer.textContent =
                lang.rights;

        }

    }


    /* =====================================================
       LANGUAGE BUTTON
    ===================================================== */

    if (langBtn) {

        langBtn.addEventListener(
            "click",
            () => {

                currentLang =
                    currentLang === "ar"
                        ? "en"
                        : "ar";

                changeLanguage();

            }
        );

    }


    /* =====================================================
       START
    ===================================================== */

    changeLanguage();

});