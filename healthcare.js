document.addEventListener("DOMContentLoaded",()=>{


let currentLang="ar";


const langBtn=document.querySelector(".language-btn");



const projects=[


{

number:"01",


titleAr:"مستشفى مدينتي",

titleEn:"Madinaty Hospital",


year:"2026",


typeAr:"مشروع صحي",

typeEn:"Healthcare Project",


images:[

"assets/projects/healthcare/hospitals/1.jpg",

"assets/projects/healthcare/hospitals/2.jpg",

"assets/projects/healthcare/hospitals/3.jpg"

]


}


];



const container=document.getElementById("projectsContainer");


const modal=document.getElementById("imageModal");


const modalImage=document.getElementById("modalImage");


const modalCaption=document.getElementById("modalCaption");


const closeBtn=document.querySelector(".modal-close");


const nextBtn=document.querySelector(".modal-next");


const prevBtn=document.querySelector(".modal-prev");



let activeProject=0;

let activeImage=0;



function renderProjects(){


container.innerHTML="";


projects.forEach((project,index)=>{


let title=currentLang==="ar"
?project.titleAr
:project.titleEn;


let type=currentLang==="ar"
?project.typeAr
:project.typeEn;



let card=document.createElement("article");


card.className="project-card";



card.innerHTML=`

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


${project.images.map((img,i)=>`

<div
class="project-image"
data-project="${index}"
data-image="${i}">


<img src="${img}">


</div>


`).join("")}


</div>



<div class="project-footer">


<span>
${type}
</span>


<span>
${project.images.length} صور
</span>


</div>


`;


container.appendChild(card);


});


}




function updateModal(){


let project=projects[activeProject];


modalImage.src=
project.images[activeImage];


modalCaption.textContent=
(project.titleAr)
+" - "
+project.year;


}



function openModal(p,i){


activeProject=p;

activeImage=i;


updateModal();


modal.classList.add("active");


}



function closeModal(){

modal.classList.remove("active");

}



container.addEventListener("click",(e)=>{


let image=e.target.closest(".project-image");


if(!image)return;


openModal(

Number(image.dataset.project),

Number(image.dataset.image)

);


});



nextBtn.onclick=()=>{


let project=projects[activeProject];


activeImage++;


if(activeImage>=project.images.length)
activeImage=0;


updateModal();


};



prevBtn.onclick=()=>{


let project=projects[activeProject];


activeImage--;


if(activeImage<0)
activeImage=project.images.length-1;


updateModal();


};



closeBtn.onclick=closeModal;



langBtn.onclick=()=>{


currentLang=currentLang==="ar"
?"en"
:"ar";


document.documentElement.dir=
currentLang==="ar"
?"rtl"
:"ltr";


langBtn.textContent=
currentLang==="ar"
?"EN"
:"AR";



document.querySelectorAll("[data-ar][data-en]")
.forEach(el=>{


el.textContent=
currentLang==="ar"
?el.dataset.ar
:el.dataset.en;


});


renderProjects();


};



renderProjects();


});