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

  $('.playbutton').hover(function(){
    swiper.autoplay.stop();
  }, function(){
    swiper.autoplay.start();
  });
  
  $('.video').hover(function(){
    swiper.autoplay.stop();
  }, function(){
    swiper.autoplay.start();
  });
  
  $('.swiper-slide').mouseleave(function(){
    let iframe=document.querySelector('iframe');
    if(iframe){
      var iframeSrc=iframe.src;
      iframe.src=iframeSrc;
    }
  });


 
  
  

  
  const playbutton= document.querySelector('.playbutton');
  const backbutton= document.querySelector('.backbutton');
  const videoEl = document.querySelector('.video');
  const videoImageEl= document.querySelector('.videoImage');

  playbutton.addEventListener('click',()=>{
    playbutton.classList.add('hidden');
    backbutton.classList.remove('hidden');
    videoEl.classList.remove('hidden');
    videoImageEl.classList.add('hidden');
  })
  backbutton.addEventListener('click',()=>{
    playbutton.classList.remove('hidden');
    backbutton.classList.add('hidden');
    videoEl.classList.add('hidden');
    videoImageEl.classList.remove('hidden');

    let iframe=document.querySelector('iframe');
    if(iframe){
      var iframeSrc=iframe.src;
      iframe.src=iframeSrc;
    }
  })

  





