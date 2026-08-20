document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LANGUAGE
    ===================================================== */

    const langBtn =
        document.querySelector(".language-btn");

    let currentLang = "ar";


    /* =====================================================
       PROJECT DATA
    ===================================================== */

    const projects = [

        {
            number: "01",

            titleAr: "البنك المركزي - المنيا",

            titleEn: "Central Bank Minia",

            year: "2022",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/central-bank-minia/1.jpg",
                "assets2/projects/government/central-bank-minia/2.jpg",
                "assets2/projects/government/central-bank-minia/3.jpg"
            ]
        },


        {
            number: "02",

            titleAr: "مشروع محطات السكك الحديدية",

            titleEn: "Railway Stations Project",

            year: "2021 - 2022",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/railway-stations/1.jpg",
                "assets2/projects/government/railway-stations/2.jpg",
                "assets2/projects/government/railway-stations/3.jpg"
            ]
        },


        {
            number: "03",

            titleAr: "وزارة النقل",

            titleEn: "Ministry of Transportation",

            year: "2020",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/ministry-transportation/1.jpg",
                "assets2/projects/government/ministry-transportation/2.jpg",
                "assets2/projects/government/ministry-transportation/3.jpg"
            ]
        },


        {
            number: "04",

            titleAr: "لاندسكيب مبنى الوزراء",

            titleEn: "Landscape of Ministers Building",

            year: "2019",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/ministers-landscape/1.jpg",
                "assets2/projects/government/ministers-landscape/2.jpg",
                "assets2/projects/government/ministers-landscape/3.jpg"
            ]
        },


        {
            number: "05",

            titleAr: "وزارة الصحة والسكان",

            titleEn: "Ministry of Health and Population",

            year: "2019",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/ministry-health/1.jpg",
                "assets2/projects/government/ministry-health/2.jpg"
            ]
        },


        {
            number: "06",

            titleAr: "وزارة الدفاع - العاصمة الجديدة",

            titleEn: "Ministry of Defense - New Capital",

            year: "2019",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/ministry-defense/1.jpg",
                "assets2/projects/government/ministry-defense/2.jpg",
                "assets2/projects/government/ministry-defense/3.jpg"
            ]
        },


        {
            number: "07",

            titleAr: "دار الطباعة - العاصمة الجديدة",

            titleEn: "Print House - New Capital City",

            year: "2019",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/print-house/1.jpg",
                "assets2/projects/government/print-house/2.jpg",
                "assets2/projects/government/print-house/3.jpg"
            ]
        },


        {
            number: "08",

            titleAr: "مدخل كبار الزوار بالمطار",

            titleEn: "Airport VIP Entrance",

            year: "2020",

            typeAr: "مشروع حكومي",

            typeEn: "Government Project",

            images: [
                "assets2/projects/government/airport-vip/1.jpg",
                "assets2/projects/government/airport-vip/2.jpg"
            ]
        }

    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const projectsContainer =
        document.getElementById(
            "projectsContainer"
        );


    const imageModal =
        document.getElementById(
            "imageModal"
        );


    const modalImage =
        document.getElementById(
            "modalImage"
        );


    const modalCaption =
        document.getElementById(
            "modalCaption"
        );


    const modalClose =
        document.querySelector(
            ".modal-close"
        );


    const modalPrev =
        document.querySelector(
            ".modal-prev"
        );


    const modalNext =
        document.querySelector(
            ".modal-next"
        );


    let activeProject = null;

    let activeImage = 0;


    /* =====================================================
       RENDER PROJECTS
    ===================================================== */

    function renderProjects() {

        if (!projectsContainer) return;


        projectsContainer.innerHTML = "";


        const fragment =
            document.createDocumentFragment();


        projects.forEach(
            (project, projectIndex) => {

                const title =
                    currentLang === "ar"
                        ? project.titleAr
                        : project.titleEn;


                const type =
                    currentLang === "ar"
                        ? project.typeAr
                        : project.typeEn;


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "project-card";


                const header =
                    document.createElement(
                        "div"
                    );


                header.className =
                    "project-header";


                header.innerHTML = `

                    <div>

                        <div class="project-number">
                            ${project.number}
                        </div>

                        <h3 class="project-title">
                            ${title}
                        </h3>

                    </div>

                    <div class="project-year">
                        ${project.year}
                    </div>

                `;


                const gallery =
                    document.createElement(
                        "div"
                    );


                gallery.className =
                    project.images.length === 2
                        ? "project-gallery two-images"
                        : "project-gallery";


                project.images.forEach(
                    (image, imageIndex) => {

                        const imageBox =
                            document.createElement(
                                "div"
                            );


                        imageBox.className =
                            "project-image";


                        imageBox.dataset.project =
                            projectIndex;


                        imageBox.dataset.imageIndex =
                            imageIndex;


                        const img =
                            document.createElement(
                                "img"
                            );


                        img.src = image;

                        img.alt = title;

                        img.loading =
                            projectIndex < 2
                                ? "eager"
                                : "lazy";

                        img.decoding =
                            "async";


                        imageBox.appendChild(img);

                        gallery.appendChild(
                            imageBox
                        );

                    }
                );


                const footer =
                    document.createElement(
                        "div"
                    );


                footer.className =
                    "project-footer";


                footer.innerHTML = `

                    <span>
                        ${type}
                    </span>

                    <span>
                        ${project.images.length}
                        ${
                            currentLang === "ar"
                                ? " صور"
                                : " Images"
                        }
                    </span>

                `;


                card.appendChild(header);

                card.appendChild(gallery);

                card.appendChild(footer);


                fragment.appendChild(card);

            }
        );


        projectsContainer.appendChild(
            fragment
        );

    }


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    function openModal(
        projectIndex,
        imageIndex
    ) {

        activeProject =
            projects[projectIndex];


        activeImage =
            imageIndex;


        updateModal();


        imageModal.classList.add(
            "active"
        );


        imageModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       UPDATE MODAL
    ===================================================== */

    function updateModal() {

        if (!activeProject) return;


        const image =
            activeProject.images[
                activeImage
            ];


        modalImage.src = image;


        const title =
            currentLang === "ar"
                ? activeProject.titleAr
                : activeProject.titleEn;


        modalImage.alt =
            title;


        modalCaption.textContent =
            `${title} — ${activeProject.year}`;

    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeModal() {

        imageModal.classList.remove(
            "active"
        );


        imageModal.setAttribute(
            "aria-hidden",
            "true"
        );


        modalImage.removeAttribute(
            "src"
        );


        activeProject = null;

        activeImage = 0;


        document.body.style.overflow =
            "";

    }


    /* =====================================================
       NEXT IMAGE
    ===================================================== */

    function nextImage() {

        if (!activeProject) return;


        activeImage++;


        if (
            activeImage >=
            activeProject.images.length
        ) {

            activeImage = 0;

        }


        updateModal();

    }


    /* =====================================================
       PREVIOUS IMAGE
    ===================================================== */

    function previousImage() {

        if (!activeProject) return;


        activeImage--;


        if (activeImage < 0) {

            activeImage =
                activeProject.images.length - 1;

        }


        updateModal();

    }


    /* =====================================================
       IMAGE CLICK
    ===================================================== */

    projectsContainer.addEventListener(
        "click",
        (event) => {

            const imageBox =
                event.target.closest(
                    ".project-image"
                );


            if (!imageBox) return;


            const projectIndex =
                Number(
                    imageBox.dataset.project
                );


            const imageIndex =
                Number(
                    imageBox.dataset.imageIndex
                );


            openModal(
                projectIndex,
                imageIndex
            );

        }
    );


    /* =====================================================
       MODAL BUTTONS
    ===================================================== */

    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modalNext) {

        modalNext.addEventListener(
            "click",
            nextImage
        );

    }


    if (modalPrev) {

        modalPrev.addEventListener(
            "click",
            previousImage
        );

    }


    /* =====================================================
       OUTSIDE CLICK
    ===================================================== */

    imageModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                imageModal
            ) {

                closeModal();

            }

        }
    );


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !imageModal.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            if (
                event.key ===
                "Escape"
            ) {

                closeModal();

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                currentLang === "ar"
                    ? previousImage()
                    : nextImage();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                currentLang === "ar"
                    ? nextImage()
                    : previousImage();

            }

        }
    );


    /* =====================================================
       LANGUAGE
    ===================================================== */

    function updateLanguage() {

        document.documentElement.lang =
            currentLang;


        document.documentElement.dir =
            currentLang === "ar"
                ? "rtl"
                : "ltr";


        const navLinks =
            document.querySelectorAll(
                ".main-nav a"
            );


        const arabic = [
            "الرئيسية",
            "من نحن",
            "المشاريع",
            "القطاعات",
            "تواصل معنا"
        ];


        const english = [
            "Home",
            "About Us",
            "Projects",
            "Sectors",
            "Contact Us"
        ];


        navLinks.forEach(
            (link, index) => {

                if (!arabic[index]) return;


                link.textContent =
                    currentLang === "ar"
                        ? arabic[index]
                        : english[index];

            }
        );


        if (langBtn) {

            langBtn.textContent =
                currentLang === "ar"
                    ? "EN"
                    : "AR";

        }


        document
            .querySelectorAll(
                "[data-ar][data-en]"
            )
            .forEach(
                element => {

                    element.textContent =
                        currentLang === "ar"
                            ? element.dataset.ar
                            : element.dataset.en;

                }
            );


        renderProjects();

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


                updateLanguage();

            }
        );

    }


    /* =====================================================
       START
    ===================================================== */

    updateLanguage();

});