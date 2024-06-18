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
        <div class="swiper-slide tranding-slide  sm:!w-[32rem] !w-[20rem]">
          <div class="swiper-card w-full flex bg-[white] p-3  rounded-3xl flex-col sm:flex-row">
            <div class="tranding-slide-img w-full h-[17rem] sm:h-full sm:w-[45%] overflow-hidden rounded-3xl">
              <img class="w-full h-full object-cover object-bottom" src="${data.bestsellers[i].url}" alt="">
            </div>

            <div class="tranding-slide-content flex gap-2 sm:gap-0 sm:justify-between flex-col w-full sm:w-[55%] pl-[15px] py-[15px]">
              <div><h3 class="font-[Nunito-Sans-light] text-[#AA740A] text-xs font-semibold">BACCA BUCCI</h3></div>
              <div><p class="font-spartan text-[#4E3505] font-bold text-xl lg:text-2xl">${(data.bestsellers[i].name).slice(12,50)}...</p></div>
              <div class="item-color gap-2 py-2 flex">
                    <div
                      class="border-[1px] border-[black] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[black]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[grey] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[grey]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[olive] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[olive]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[brown] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[brown]"></div>
                    </div>
                  </div>
              <div>
                <p class="font-[oswald] text-[#4e3405d6] font-semibold text-lg">Rs. ${data.bestsellers[i].price} <s class="text-xs text-[lora] text-[grey]">MRP. 2,999.00</s></p>
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
  
}
fillBestSellerWrapper();


  // Best Collection  

async function collectionProducts() {
    const res = await fetch("http://localhost:5173/assets.json");
    const data = await res.json();
    const wrapper = document.querySelectorAll(".collectionTabSliders");
    // console.log(wrapper)
    
  
    let list= data.collection;
    wrapper.forEach(slider => {
      // console.log(slider);
  
      list.forEach(element => {
        slider.innerHTML=slider.innerHTML+`<div class=" h-max swiper-slide card  ">
                  <div class=" w-[200px] sm:w-[220px] h-max rounded-[5%]  py-3 px-4 bg-[white] m-auto shadow-lg">
                  <img
                    class=" w-[180px] sm:w-[200px] rounded-[5%] mb-2 collectionImg"
                    src=" ${element.url} "
                    alt=""
                  />
    
                  <p class="font-[lora] text-[black] font-bold text-sm">
                    ${(element.name).slice(12,30)}...
                  </p>
                  <p class="font-[lora] text-xs font-bold text-[black]">2024</p>
    
                  <p
                    class="font-[lato] text-[#c1860f] font-[500] leading-8 text-sm tracking-widest"
                  >
                    Bacca Bucci
                  </p>
    
                  <span class="font-[oswald] font-bold text-md">Rs ${element.price}</span>
                  <span class="font-[lora] text-[grey] line-through text-xs"
                    >Mrp 2,799</span
                  >
    
                  <div class="item-color gap-2 py-2 flex">
                    <div
                      class="border-[1px] border-[black] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[black]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[grey] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[grey]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[olive] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[olive]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[brown] w-[24px] h-[24px] rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[brown]"></div>
                    </div>
                  </div>
    
                  <div
                    class="Add_to_cart_btn border bg-[#4E3505] text-brand_yellow text-center rounded-full p-2 text-sm w-max mx-[-5px]"
                  >
                    <i class="fa-solid fa-plus"></i> Add To Cart
                  </div>
                </div>
        </div> `;
        
      });

      
    });

    
  
    const collectionImgEl=document.querySelectorAll('.collectionImg');
    collectionImgEl.forEach((element, idx) => {
      element.addEventListener('mouseenter',()=>{
        
        element.src=`${list[idx].hoverUrl}`;
      })
      element.addEventListener('mouseleave',()=>{
        
        element.src=`${list[idx].url}`;
      })
      
    });

    var swiper2 = new Swiper(".tabSlider", {
      effect: "coverflow",
      grabCursor: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop:true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

}
collectionProducts()



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

  async function featureProducts() {
    const res = await fetch("http://localhost:5173/assets.json");
    const data = await res.json();
    const wrapper = document.querySelector(".featureWrapper");
    const wrapper2 = document.querySelector(".featuredWrapperBelow");
  
    let list= data.feature;
    // console.log(list);
  
    list.forEach(element => {
      wrapper.innerHTML=wrapper.innerHTML+`<div class="swiper-slide">
                    <img
                      src=" ${element} "
                      class="w-full"
                      alt=""
                    />
                  </div>`;
      
      wrapper2.innerHTML=wrapper2.innerHTML+`<div class="swiper-slide">
      <img
        src=" ${element} "
        class="w-full"
        alt=""
      />
      </div>`;
      
    });
  
    const featureImgEl=document.querySelectorAll('.seasonImg');
    featureImgEl.forEach((element, idx) => {
      element.addEventListener('mouseenter',()=>{
        
        element.src=`${list[idx].hoverUrl}`;
      })
      element.addEventListener('mouseleave',()=>{
        
        element.src=`${list[idx].url}`;
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
  
  }
  featureProducts()
  


  

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

//Seasonal Products

async function seasonalProducts() {
  const res = await fetch("http://localhost:5173/assets.json");
  const data = await res.json();
  const wrapper = document.querySelector(".cardContainer");
  
  wrapper.innerHTML 

  let list= data.season;
  // console.log(list);

  list.forEach(element => {
    wrapper.innerHTML=wrapper.innerHTML+`<div class=" h-max ">
              <div class=" sm:w-[230px] xl:w-[250px] h-max rounded-[5%]  py-3 px-4 bg-[white] m-auto shadow-lg">
              <img
                class=" sm:w-[200px] xl:w-[230px] rounded-[10%] mb-2 seasonImg"
                src=" ${element.url} "
                alt=""
              />

              <p class="font-[lora] text-[black] font-bold text-sm">
                Flame 7-Eye Moto..
              </p>
              <p class="font-[lora] text-xs font-bold text-[black]">2024</p>

              <p
                class="font-[lato] text-[#c1860f] font-[500] leading-8 text-sm"
              >
                Bacca Bucci
              </p>

              <span class="font-[oswald] font-bold text-md">Rs 1,799</span>
              <span class="font-[lora] text-[grey] line-through text-xs"
                >Mrp 2,799</span
              >

              <div class="item-color gap-2 py-2 flex">
                <div
                  class="border-[1px] border-[black] w-[24px] h-[24px] rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[black]"></div>
                </div>
                <div
                  class="border-[1px] border-[grey] w-[24px] h-[24px] rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[grey]"></div>
                </div>
                <div
                  class="border-[1px] border-[olive] w-[24px] h-[24px] rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[olive]"></div>
                </div>
                <div
                  class="border-[1px] border-[brown] w-[24px] h-[24px] rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[brown]"></div>
                </div>
              </div>

              <div
                class="Add_to_cart_btn border bg-[#4E3505] text-brand_yellow text-center rounded-full p-2 text-sm w-max mx-[-5px]"
              >
                <i class="fa-solid fa-plus"></i> Add To Cart
              </div>
            </div>
    </div> `;
    
  });

  const featureImgEl=document.querySelectorAll('.seasonImg');
  featureImgEl.forEach((element, idx) => {
    element.addEventListener('mouseenter',()=>{
      
      element.src=`${list[idx].hoverUrl}`;
    })
    element.addEventListener('mouseleave',()=>{
      
      element.src=`${list[idx].url}`;
    })
    
  });


  
  


}
seasonalProducts()

//Footer 
function changeBannerImage(){
  const img = document.querySelector('.footer-banner-img')
  if (window.innerWidth <= 768) {
    img.src = 'https://res.cloudinary.com/dojcchveo/image/upload/v1718272363/baccabucci/footer/lnzeezctpp3p7obpeauo.webp';
  }
  else{
    img.src = 'https://res.cloudinary.com/dojcchveo/image/upload/v1718270252/baccabucci/footer/egeraxcf41x4boobjcuv.jpg';
  } 
}

window.addEventListener('resize', changeBannerImage);
window.addEventListener('DOMContentLoaded', changeBannerImage);


//New Collection
let nextButton=document.getElementById('next');
let prevButton=document.getElementById('prev');
let carousel= document.querySelector('.carousel');



async function newCollectionProducts() {
  const res = await fetch("http://localhost:5173/assets.json");
  const data = await res.json();
  const wrapper = document.querySelector(".carousel .list");
  

  let list= data.collection;
  // console.log(list);

  list.forEach(element => {
    wrapper.innerHTML=wrapper.innerHTML+ `<div class="item  absolute top-0 left-0 
    w-[90%] lg:w-[75%] h-[100%] text-[10px] md:text-[15px]">
              <img src=" ${element.url} " class="pImg w-[40%] lg:w-[50%] absolute right-0 top-[50%] translate-y-[-50%] rounded-full " alt="">

               <div class="intro absolute top-[50%] translate-y-[-50%] w-[50%] md:w-[350px] opacity-0  pointer-events-none ">
                <div class="brand font-[coustard] text-[#AA740A] tracking-widest  leading-8 text-[12px] md:text-[15px]">
                  BACCA BUCCI
                </div>
                <div class="pName w-[300px] my-4 font-spartan font-[500] text-4xl md:text-5xl ">
                  Lorem ipsum 
                </div>
                <div class="price flex flex-wrap ">

                <div
                class="font-[oswald] font-bold text-lg lg:text-2xl text-[#601406]"
                >Rs. 1,399.00</div
                >
                <div
                  class="font-[lora] text-[grey] line-through text-xs lg:text-sm flex items-center px-2"
                  >Mrp. 3499.00</div
                >
                </div>


                <div class="des  mt-4 font-[lato] h-[70px] md:h-[200px] overflow-auto ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente cupiditate ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente cupiditate ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente cupiditate ratione? </div>

                <div
                class="button mt-4 border  rounded-full px-2 py-2 text-[#ddc56f] font-[lora] bg-[#4E3505] lg:py-[10px] lg:text-xl lg:mt-10 w-max flex justify-center"
              >
                <i class="fa-solid fa-plus text-xl mr-2"></i> ADD TO CART
              </div>
              </div> 

            </div>`;
    
  });

  nextButton.onclick=function(){
    showSlider('next');

  }
  prevButton.onclick=function(){
    showSlider('prev');
    
  }


  let sliderAutoplay= setInterval(() => {
    carousel.classList.remove('prev','next');
    let items=document.querySelectorAll('.carousel .list .item');
    wrapper.appendChild(items[0]);
    carousel.classList.add('next');
    
  }, 4000);


  let unAcceptClick;
  
  const showSlider=(type)=>{
    clearInterval(sliderAutoplay);
    nextButton.style.pointerEvents='none';
    prevButton.style.pointerEvents='none';

    

    carousel.classList.remove('prev','next');
    let items=document.querySelectorAll('.carousel .list .item');
    if(type==='next'){
      wrapper.appendChild(items[0]);
      carousel.classList.add('next');
    }
    else{
      let positionLast= items.length-1;
      wrapper.prepend(items[positionLast]);
      carousel.classList.add('prev');
    }

    clearTimeout(unAcceptClick);
    unAcceptClick=setTimeout(()=>{
      nextButton.style.pointerEvents='auto';
      prevButton.style.pointerEvents='auto';
      sliderAutoplay= setInterval(() => {
        carousel.classList.remove('prev','next');
        let items=document.querySelectorAll('.carousel .list .item');
        wrapper.appendChild(items[0]);
        carousel.classList.add('next');
        
      }, 4000);

    }, 2000);

   


  }

  


}
newCollectionProducts()