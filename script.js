// Navbar Handling

const checkbtnEl = document.querySelector(".checkbtn");

const centerEl = document.querySelector(".center");

const navEl = document.querySelector(".navbar");

let screenWidth = window.innerWidth;



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

window.addEventListener("scroll", () => {
  if (scrollY > 80) {
    navEl.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.4)";
  } else {
    navEl.style.boxShadow = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 766) {
    centerEl.style.left = 0 + "px";
    centerEl.style.opacity = 1;
  } else {
    centerEl.style.left = -1000 + "px";
  }
});

// HeroSlider 

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

$(".playbutton").hover(
  function () {
    swiper.autoplay.stop();
  },
  function () {
    swiper.autoplay.start();
  }
);

$(".video").hover(
  function () {
    swiper.autoplay.stop();
  },
  function () {
    swiper.autoplay.start();
  }
);

$(".swiper-slide").mouseleave(function () {
  let iframe = document.querySelector("iframe");
  if (iframe) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
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


//Best Seller 
async function fillBestSellerWrapper() {
  const res = await fetch("http://localhost:5173/assets.json");
  const data = await res.json();
  const wrapper = document.querySelector(".bestSeller-wrapper");
  const collectionSlider = document.querySelector(".collection-slider");
  for (let i = 0; i < data.bestsellers.length; i++) {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `
        <div class="swiper-slide tranding-slide lg:!w-[42rem] sm:!w-[32rem] !w-[20rem]">
          <div class="swiper-card w-full flex bg-[white] p-3  rounded-3xl flex-col sm:flex-row">
            <div class="tranding-slide-img w-full h-[17rem] sm:h-full sm:w-[45%] overflow-hidden rounded-3xl">
              <img class="w-full h-full object-cover object-bottom" src="${data.bestsellers[i].url}" alt="">
            </div>

            <div class="tranding-slide-content flex gap-2 sm:gap-0 sm:justify-between flex-col w-full sm:w-[55%] pl-[15px] py-[15px]">
              <div><h3 class="font-[Nunito-Sans-light] text-brand_yellow text-xl font-semibold">BACCA BUCCI</h3></div>
              <div><p class="font-[Lato] text-[#4E3505] font-extrabold lg:text-xl text-[13px]">${data.bestsellers[i].name}</p></div>
              <div class="flex gap-2">
                <div class="h-7 w-7 p-[1px] rounded-full border-[1px] border-[brown] flex justify-center items-center"><div class="red h-5 w-5 rounded-full bg-[brown]"></div></div>
                <div class="h-7 w-7 p-[1px] rounded-full border-[1px] border-[olive] flex justify-center items-center"><div class="olive h-5 w-5 rounded-full bg-[olive]"></div></div>
                <div class="h-7 w-7 p-[1px] rounded-full border-[1px] border-[black] flex justify-center items-center">   <div class="black  h-5 w-5 rounded-full bg-[black]"></div></div>
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
      `;
  }

  let TrandingSlider = new Swiper(".tranding-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  for (let i = 0; i < data.collection.length; i++) {
    collectionSlider.innerHTML =
      collectionSlider.innerHTML +
      `
        <div
          class="collection-card transition duration-500 w-[22rem] h-full p-2 rounded-2xl bg-[white] absolute custom-left top-0"
        >
          <div class="collection-card-img rounded-2xl overflow-hidden">
            <img
              class="w-full object-cover"
              src="${data.collection[i].url}"
              alt=""
            />
          </div>
        </div>
    `;
  }

  let items = document.querySelectorAll(".collection-slider .collection-card");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

  let active = 3;

  function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;

    for (var i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 3 ? 0 : 0.6;
    }

    stt = 0;

    for (var i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 3 ? 0 : 0.6;
    }
  }
   
  loadShow();

  next.onclick = function () {
    active = (active + 1) % items.length;
    loadShow();
  };

  prev.onclick = function () {
    active = (active - 1 + items.length) % items.length;
    loadShow();
  };
}
fillBestSellerWrapper();


  // Best Collection

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

  // Featured Product 


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