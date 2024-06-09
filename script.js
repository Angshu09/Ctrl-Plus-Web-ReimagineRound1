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

  

  //usage
  async function fillBestSellerWrapper(){
    const res = await fetch('http://localhost:5173/assets.json')
    const data = await res.json()
    const wrapper = document.querySelector('.bestSeller-wrapper')
    console.log(data)
    for(let i=0; i<data.bestsellers.length; i++){
      wrapper.innerHTML = wrapper.innerHTML + `
        <div class="swiper-slide tranding-slide lg:!w-[42rem] sm:!w-[32rem] !w-[20rem]">
          <div class="swiper-card w-full flex bg-[white] p-3  rounded-3xl flex-col sm:flex-row">
            <div class="tranding-slide-img w-full h-[17rem] sm:h-full sm:w-[45%] overflow-hidden rounded-3xl">
              <img class="w-full h-full object-cover object-bottom" src="${data.bestsellers[i].url}" alt="">
            </div>

            <div class="tranding-slide-content flex gap-2 sm:gap-0 sm:justify-between flex-col w-full sm:w-[55%] pl-[15px] py-[15px]">
              <div><h3 class="font-[Nunito-Sans-light] text-brand_yellow text-xl font-semibold">BACCA BUCCI</h3></div>
              <div><p class="font-[Lato] text-[#4E3505] font-extrabold lg:text-xl text-[13px]">${data.bestsellers[i].name}</p></div>
              <div>
                <div class="red"></div>
                <div class="white"></div>
                <div class="black"></div>
              </div>
              <div>
                <p class="font-[Lato] text-[#4e3405d6] font-semibold text-xl">Rs. ${data.bestsellers[i].price} <s class="text-[14px] text-[grey]">MRP. 2,999.00</s></p>
              </div>
              <div class="flex gap-2 text-[#4e3405d6] font-semibold">
                <p>${data.bestsellers[i].ratings}</P>
                <img class="w-[5rem]" src="media/ratings.png" alt="">
              </div>
              <div>
                <button class="bg-[#4E3505] hover:animate-pulse text-center font-[Arvo] rounded-full py-3 px-4 bor text-[15px] text-brand_yellow">+ Add To Cart </button>
              </div>
            </div>
          </div>
        </div>
      `
    }

    let TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      autoplay:{
        delay: 2000,
        disableOnInteraction:false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  fillBestSellerWrapper()

  



  

