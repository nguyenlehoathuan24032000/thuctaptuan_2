let menu = document.querySelector("#showMenu");
let navbarItems = document.querySelectorAll(".header-nav-item");
let navbar = document.querySelector(".header-nav");
let languages = document.querySelectorAll(".language");
let fields = document.querySelectorAll(".field-item");
let partners = document.querySelectorAll(".partner-item");

// navbarItem
for(let i = 0 ; i< navbarItems.length; i++){
    navbarItems[i].addEventListener("click",function(){
        navbarItems[i].classList.add("active");  
        for(j = 0 ;j< navbarItems.length; j++){
            if( i  !== j ){
                navbarItems[j].classList.remove("active");
            } 
        }
    })
 }

// languages
for(let i = 0 ; i< languages.length; i++){
   languages[i].addEventListener("click",function(){
       languages[i].classList.add("active");  
       for(j = 0 ;j< languages.length; j++){
           if( i  !== j ){
            languages[j].classList.remove("active");
           } 
       }
   })
}
// fields
for(let i = 0 ; i< fields.length; i++){
    fields[i].addEventListener("click",function(){
        fields[i].classList.add("active");  
        for(j = 0 ;j< fields.length; j++){
            if( i  !== j ){
                fields[j].classList.remove("active");
            } 
        }
    })
 }

//  partner
for(let i = 0 ; i< partners.length; i++){
    partners[i].addEventListener("click",function(){
        partners[i].classList.add("active");  
        for(j = 0 ;j< partners.length; j++){
            if( i  !== j ){
                partners[j].classList.remove("active");
            } 
        }
    })
 }


menu.addEventListener("click",function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

})
window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}