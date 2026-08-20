document.addEventListener("DOMContentLoaded", () => {

    let currentLang = "ar";

    const langBtn = document.querySelector(".language-btn");


    if (langBtn) {

        langBtn.addEventListener("click", () => {

            currentLang =
                currentLang === "ar"
                    ? "en"
                    : "ar";


            document.documentElement.lang = currentLang;


            document.documentElement.dir =
                currentLang === "ar"
                    ? "rtl"
                    : "ltr";



            langBtn.textContent =
                currentLang === "ar"
                    ? "EN"
                    : "AR";



            document
            .querySelectorAll("[data-ar][data-en]")
            .forEach((element) => {


                element.textContent =
                    currentLang === "ar"
                        ? element.dataset.ar
                        : element.dataset.en;


            });



        });


    }



    document.documentElement.lang = currentLang;


    document.documentElement.dir =
        currentLang === "ar"
            ? "rtl"
            : "ltr";


});