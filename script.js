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
    loop:true,
    autoplay:{
        delay: 5000,
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
    playbutton.classList.remove('hidden');
    backbutton.classList.add('hidden');
    videoEl.classList.add('hidden');
    videoImageEl.classList.remove('hidden');

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

  var swiper2 = new Swiper(".tabSlider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const tabEls=document.querySelectorAll('.tab')

  const tabLabelEls=document.querySelectorAll('.tab-label')

  tabLabelEls.forEach((element, idx) => {
    
    element.addEventListener('click',()=>{
      tabEls.forEach((item,index) => {
        if(idx===index){
          item.classList.remove('hidden');
        }else{
          item.classList.add('hidden');
        }
        
      });
      element.classList.add('active');
      tabLabelEls.forEach((item, index) => {
        if(idx!==index){
          item.classList.remove('active');
        }
      });
    })
    
    
  });



  var swiper3 = new Swiper(".featuredSwiperBelow", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay:{
      delay: 2500,
      disableOnInteraction:false,
  },
    
  });
  var swiper4 = new Swiper(".featuredSwiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
      delay: 2500,
      disableOnInteraction:false,
  },
    thumbs: {
      swiper: swiper3,
    },
  });

  const shoeSizeEls=document.querySelectorAll('.size');

  shoeSizeEls.forEach((element, idx) => {
    element.addEventListener('click', ()=>{
      element.classList.add('active');

      document.querySelector('.sizeDisplay').innerHTML=`Size : ${element.innerHTML}`
      shoeSizeEls.forEach((item, index) => {
        if(idx!==index){
          item.classList.remove('active');
        }
      });
      
    });

    
    
  });



  





