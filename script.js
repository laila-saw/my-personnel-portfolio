// side navigation js code 
let menuBtn = document.querySelector(".menu-btn");
let concelBtn = document.querySelector(".concel-btn");
let navBar = document.querySelector(".navbar");
let bd=document.querySelector("body")
let scrollBtn=document.querySelector(".scroll-btn")
let body=document.querySelector("body")

menuBtn.onclick=function(){
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    navBar.classList.add("active");
    body.style.overflow="hidden"

}
concelBtn.onclick=function(){
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navBar.classList.remove("active");
    body.style.overflow="auto"

}
// sticky navigation menu js code
let nav = document.querySelector("nav");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
    if(document.documentElement.scrollTop>500){
        scrollBtn.classList.add("show")
    }else{
        scrollBtn.classList.remove("show")
    }
}
// side navigation menu closed whene navigation links clicked
let navLinks = document.querySelectorAll(".menu li a")
for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",()=>{
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navBar.classList.remove("active");
    body.style.overflow="auto"
    })
}





