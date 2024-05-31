const checkbtnEl = document.querySelector(".checkbtn");

const centerEl = document.querySelector(".center");

const navEl=document.querySelector(".navbar")


let screenWidth= window.innerWidth


function handleNavbar(){

    if (v === 0) {
        centerEl.style.left = 0 + "px";
        centerEl.style.opacity = 1;
        // alert(v)
        v++;
      } else {
        centerEl.style.left = -1000 + "px";
        // alert(v)
        v--;
      }
    
}

let v = 0;
checkbtnEl.addEventListener("click", handleNavbar);



window.addEventListener("scroll",()=>{
    if(scrollY>80){
      navEl.style.boxShadow="2px 2px 5px rgba(0, 0, 0, 0.4)";
    }else{
      navEl.style.boxShadow="none";
    }
  })
  

window.addEventListener('resize',()=>{
    if(window.innerWidth>766){
        centerEl.style.left = 0 + "px";
        centerEl.style.opacity = 1;


    }else{
        centerEl.style.left = -1000 + "px";
        
    }
    
    
})

var swiper = new Swiper(".mySwiper", {
    autoplay:{
        delay: 2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "" + "</span>";
      },
    },
  });