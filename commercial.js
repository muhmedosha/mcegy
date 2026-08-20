document.addEventListener("DOMContentLoaded", () => {

    let currentLang = "ar";

    const langBtn =
        document.querySelector(".language-btn");


    const projects = [

        {
            number: "01",

            titleAr: "كايرو فيستيفال سيتي",
            titleEn: "Cairo Festival City",

            year: "2022",

            typeAr: "مشروع تجاري",
            typeEn: "Commercial Project",

            images: [
                "assets/projects/commercial/cairo-festival/1.jpg",
                "assets/projects/commercial/cairo-festival/2.jpg",
                "assets/projects/commercial/cairo-festival/3.jpg"
            ]
        }

    ];


    const container =
        document.getElementById("projectsContainer");

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalCaption =
        document.getElementById("modalCaption");

    const closeBtn =
        document.querySelector(".modal-close");

    const nextBtn =
        document.querySelector(".modal-next");

    const prevBtn =
        document.querySelector(".modal-prev");


    let activeProject = 0;
    let activeImage = 0;


    function renderProjects() {

        if (!container) return;

        container.innerHTML = "";


        projects.forEach((project, index) => {

            const title =
                currentLang === "ar"
                    ? project.titleAr
                    : project.titleEn;


            const type =
                currentLang === "ar"
                    ? project.typeAr
                    : project.typeEn;


            const imageCount =
                currentLang === "ar"
                    ? `${project.images.length} صور`
                    : `${project.images.length} Images`;


            const card =
                document.createElement("article");

            card.className = "project-card";


            card.innerHTML = `

                <div class="project-header">

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

                </div>


                <div class="project-gallery">

                    ${project.images.map((image, i) => `

                        <div
                            class="project-image"
                            data-project="${index}"
                            data-image="${i}"
                        >

                            <img
                                src="${image}"
                                alt="${title}"
                                loading="lazy"
                            >

                        </div>

                    `).join("")}

                </div>


                <div class="project-footer">

                    <span>
                        ${type}
                    </span>

                    <span>
                        ${imageCount}
                    </span>

                </div>

            `;


            container.appendChild(card);

        });

    }


    function openModal(
        projectIndex,
        imageIndex
    ) {

        activeProject = projectIndex;

        activeImage = imageIndex;

        updateModal();


        if (!modal) return;


        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    function updateModal() {

        const project =
            projects[activeProject];


        if (
            !project ||
            !modalImage
        ) {
            return;
        }


        modalImage.src =
            project.images[activeImage];


        modalImage.alt =
            currentLang === "ar"
                ? project.titleAr
                : project.titleEn;


        if (modalCaption) {

            modalCaption.textContent =
                (
                    currentLang === "ar"
                        ? project.titleAr
                        : project.titleEn
                )
                + " - "
                + project.year;

        }

    }


    function closeModal() {

        if (!modal) return;


        modal.classList.remove("active");


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        if (modalImage) {

            modalImage.src = "";

        }


        document.body.style.overflow = "";

    }


    function nextImage() {

        const project =
            projects[activeProject];


        if (!project) return;


        activeImage++;


        if (
            activeImage >=
            project.images.length
        ) {

            activeImage = 0;

        }


        updateModal();

    }


    function previousImage() {

        const project =
            projects[activeProject];


        if (!project) return;


        activeImage--;


        if (activeImage < 0) {

            activeImage =
                project.images.length - 1;

        }


        updateModal();

    }


    if (container) {

        container.addEventListener(
            "click",
            (event) => {

                const image =
                    event.target.closest(
                        ".project-image"
                    );


                if (!image) return;


                openModal(

                    Number(
                        image.dataset.project
                    ),

                    Number(
                        image.dataset.image
                    )

                );

            }
        );

    }


    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            closeModal
        );

    }


    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            nextImage
        );

    }


    if (prevBtn) {

        prevBtn.addEventListener(
            "click",
            previousImage
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === modal
                ) {

                    closeModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !modal ||
                !modal.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (event.key === "Escape") {

                closeModal();

            }


            if (event.key === "ArrowRight") {

                nextImage();

            }


            if (event.key === "ArrowLeft") {

                previousImage();

            }

        }
    );


    if (langBtn) {

        langBtn.addEventListener(
            "click",
            () => {

                currentLang =
                    currentLang === "ar"
                        ? "en"
                        : "ar";


                document.documentElement.lang =
                    currentLang;


                document.documentElement.dir =
                    currentLang === "ar"
                        ? "rtl"
                        : "ltr";


                langBtn.textContent =
                    currentLang === "ar"
                        ? "EN"
                        : "AR";


                document
                    .querySelectorAll(
                        "[data-ar][data-en]"
                    )
                    .forEach(
                        (element) => {

                            element.textContent =
                                currentLang === "ar"
                                    ? element.dataset.ar
                                    : element.dataset.en;

                        }
                    );


                renderProjects();


                if (
                    modal &&
                    modal.classList.contains(
                        "active"
                    )
                ) {

                    updateModal();

                }

            }
        );

    }


    document.documentElement.lang =
        currentLang;


    document.documentElement.dir =
        currentLang === "ar"
            ? "rtl"
            : "ltr";


    renderProjects();

});