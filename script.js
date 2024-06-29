// Navbar Handling

const checkbtnEl = document.querySelector(".checkbtn");

const centerEl = document.querySelector(".center");

const navEl = document.querySelector(".navbar");

const headingNewCollection = document.querySelector(".heading");

let cartList=JSON.parse(localStorage.getItem('Cart'));
if(!cartList){
  cartList=[];
}

let screenWidth = window.innerWidth;

if (screenWidth > 768) {
  headingNewCollection.classList.remove("hidden");
} else {
  headingNewCollection.classList.add("hidden");
}

function handleNavbar() {
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
  if (window.innerWidth > 767) {
    centerEl.style.left = 0 + "px";
    centerEl.style.opacity = 1;
    headingNewCollection.classList.remove("hidden");
  } else {
    centerEl.style.left = -1000 + "px";
    headingNewCollection.classList.add("hidden");
  }
});

const cartIconEl= document.querySelector('.cartIcon');
const cartEl=document.querySelector('.cart');

let toggle=0;
cartIconEl.addEventListener('click', ()=>{
  if(toggle===0){
    cartEl.style.right='-15px';
    cartEl.style.opacity='1';
    toggle++;
  }
  else{
    cartEl.style.right='-1000px';
    cartEl.style.opacity='0';
    toggle--;
  }
  
})

// HeroSlider

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
  playbutton.classList.remove("hidden");
  backbutton.classList.add("hidden");
  videoEl.classList.add("hidden");
  videoImageEl.classList.remove("hidden");
});

const playbutton = document.querySelector(".playbutton");
const backbutton = document.querySelector(".backbutton");
const videoEl = document.querySelector(".video");
const videoImageEl = document.querySelector(".videoImage");

playbutton.addEventListener("click", () => {
  console.log('connected')
  playbutton.classList.add("hidden");
  backbutton.classList.remove("hidden");
  videoEl.classList.remove("hidden");
  videoImageEl.classList.add("hidden");
});
backbutton.addEventListener("click", () => {
  playbutton.classList.remove("hidden");
  backbutton.classList.add("hidden");
  videoEl.classList.add("hidden");
  videoImageEl.classList.remove("hidden");

  let iframe = document.querySelector("iframe");
  if (iframe) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
});

//Best Seller
async function fillBestSellerWrapper() {
  const res = await fetch("https://jayasaha811733.github.io/ReimagineAPI/assets.json");
  const data = await res.json();
  const wrapper = document.querySelector(".bestSeller-wrapper");
  const collectionSlider = document.querySelector(".collection-slider");
  for (let i = 0; i < data.bestsellers.length; i++) {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `
        <div class="swiper-slide cursor-pointer tranding-slide  sm:!w-[30rem] md:!w-[37rem] !w-[17rem]">
          <div class="swiper-card w-full flex bg-[white] p-3  rounded-3xl flex-col sm:flex-row">
            <div class="tranding-slide-img w-full h-[13rem] sm:h-full sm:w-[45%] overflow-hidden rounded-xl">
              <img class="w-full h-full object-cover object-bottom" src="${
                data.bestsellers[i].url
              }" alt="">
            </div>

            <div class="tranding-slide-content flex gap-2 sm:gap-0 sm:justify-between flex-col w-full sm:w-[55%] pl-[15px] py-[15px]">
              <div><h3 class="font-[Nunito-Sans-light] text-[#AA740A] text-[16px] font-semibold">BACCA BUCCI</h3>
              </div>
              <div><p class=" pName font-spartan text-[#4E3505] font-bold text-[18px] lg:text-2xl">${data.bestsellers[i].name.slice(12, 50)}...</p></div>
              <div class="item-color gap-2 flex">
                    <div
                      class="border-[1px] border-[black] w-[24px] h-[24px] rounded-full p-[1px] flex items-center justify-center"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[black]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[grey] w-[24px] h-[24px] rounded-full p-[1px] flex items-center justify-center"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[grey]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[olive] w-[24px] h-[24px] rounded-full p-[1px] flex items-center justify-center"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[olive]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[brown] w-[24px] h-[24px] rounded-full p-[1px] flex items-center justify-center"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[brown]"></div>
                    </div>
                  </div>
              <div>
                <label class="pPrice font-[oswald] text-[#4e3405d6] font-semibold text-lg">Rs. ${
                  data.bestsellers[i].price
                }</label>

                 <s class="text-xs text-[lora] text-[grey]">MRP. 2,999.00</s>


              </div>
              <div class="flex gap-2 text-[#4e3405d6] font-semibold items-center">
                <p>(${data.bestsellers[i].ratings})</P>
                <i class="fa-solid fa-star text-brand_yellow"></i>
                <i class="fa-solid fa-star text-brand_yellow"></i>
                <i class="fa-solid fa-star text-brand_yellow"></i>
                <i class="fa-solid fa-star text-brand_yellow"></i>
                <i class="fa-solid fa-star text-brand_yellow"></i>
              </div>

              <div
                class="addToCartCollection border bg-[#4E3505] text-brand_yellow text-center rounded-full p-2 text-sm w-max mx-[-5px]"
              >
                <i class="fa-solid fa-plus"></i> Add To Cart
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
      rotate: 7,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".tranding-next",
      prevEl: ".tranding-prev",
    },
  });

  const slides = document.querySelectorAll('.swiper-slide');

  slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
      TrandingSlider.autoplay.stop();
    });

    slide.addEventListener('mouseleave', () => {
      TrandingSlider.autoplay.start();
    });
  });

  const trandingImg = document.querySelectorAll('.tranding-slide-img img')
  // console.log(data.bestsellers[0])
  trandingImg.forEach((element, idx) => {
    element.addEventListener("mouseenter", () => {
      element.src = `${data.bestsellers[idx].hoverUrl}`;
    });
    element.addEventListener("mouseleave", () => {
      element.src = `${data.bestsellers[idx].url}`;
    });
  });
}
fillBestSellerWrapper();

// Best Collection

async function collectionProducts() {
  const res = await fetch(
    "https://jayasaha811733.github.io/ReimagineAPI/assets.json"
  );
  const data = await res.json();
  const wrapper = document.querySelectorAll(".collectionTabSliders");
  

  let list = data.collection;
  wrapper.forEach((slider, idx) => {
    

    list[idx].forEach((element) => {
      let space=(element.name).length>30?"...":" ";
      slider.innerHTML =
        slider.innerHTML +
        `<div class=" h-max swiper-slide card my-3 ">
                  <div class=" w-[200px] sm:w-[220px] h-max rounded-xl  py-3 px-4 bg-[white] m-auto shadow-lg my-2" >
                  
                  <img
                    class=" w-[180px]  sm:w-[200px] rounded-[5%] mb-2 collectionImg aspect-square" id="${element.hoverUrl}"
                    name="${element.name}"
                    src=" ${element.url} "
                    alt=""
                  />
    
                  <p class="font-[lora] text-[black] font-bold text-[13px]" name=" ${element.name} ">${element.name.slice(12, 30)}${space}</p>
                  <p class="font-[lora] text-xs font-bold text-[black]">2024</p>
    
                  <p
                    class="font-[lato] text-[#c1860f] font-[500] leading-8 text-sm tracking-widest"
                  >
                    Bacca Bucci
                  </p>
    
                  <span class="font-[oswald] font-bold text-md">Rs ${
                    element.price
                  }</span>
                  <span class="font-[lora] text-[grey] line-through text-xs"
                    >Mrp 2,799</span
                  >
    
                  <div class="item-color gap-2 py-2 flex">
                    <div
                      class="border-[1px] border-[black] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[black]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[grey] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[grey]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[olive] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[olive]"></div>
                    </div>
                    <div
                      class="border-[1px] border-[brown] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                    >
                      <div class="w-[20px] h-[20px] rounded-full bg-[brown]"></div>
                    </div>
                  </div>
    
                  <div
                    class="addToCart border bg-[#4E3505] text-brand_yellow text-center rounded-full p-2 text-sm w-max mx-[-5px]"
                  >
                    <i class="fa-solid fa-plus"></i> Add To Cart
                  </div>
                </div>
        </div> `;
    });


  });

  //Yet to be done
  const collectionImgEl = document.querySelectorAll(".collectionImg");
    // console.log(collectionImgEl)
  collectionImgEl.forEach((element, idx)=>{
    let image= element.src;
    element.addEventListener('mouseenter',()=>{
      element.src=element.id;
    });
    element.addEventListener('mouseleave', ()=>{
      element.src= image;
    })

  })


  var swiper2 = new Swiper(".tabSlider", {
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
    },
    navigation: {
      nextEl: ".tab-next",
      prevEl: ".tab-prev",
    },
  });
}
collectionProducts();

const tabEls = document.querySelectorAll(".tab");

const tabLabelEls = document.querySelectorAll(".tab-label");

tabLabelEls.forEach((element, idx) => {
  element.addEventListener("click", () => {
    tabEls.forEach((item, index) => {
      if (idx === index) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
    element.classList.add("active");
    tabLabelEls.forEach((item, index) => {
      if (idx !== index) {
        item.classList.remove("active");
      }
    });
  });
});

// Featured Product

async function featureProducts() {
  const res = await fetch("https://jayasaha811733.github.io/ReimagineAPI/assets.json");
  const data = await res.json();
  const wrapper = document.querySelector(".featureWrapper");
  const wrapper2 = document.querySelector(".featuredWrapperBelow");

  let list = data.feature;
  // console.log(list);

  list.forEach((element) => {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `<div class="swiper-slide">
                    <img
                      src=" ${element} "
                      class="featureImg w-full"
                      alt=""

                    />
                  </div>`;

    wrapper2.innerHTML =
      wrapper2.innerHTML +
      `<div class="swiper-slide">
      <img
        src=" ${element} "
        class="w-full"
        alt=""
      />
      </div>`;
  });

  const featureImgEl = document.querySelectorAll(".seasonImg");
  featureImgEl.forEach((element, idx) => {
    element.addEventListener("mouseenter", () => {
      element.src = `${list[idx].hoverUrl}`;
    });
    element.addEventListener("mouseleave", () => {
      element.src = `${list[idx].url}`;
    });
  });

  var swiper3 = new Swiper(".featuredSwiperBelow", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swiper4 = new Swiper(".featuredSwiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper3,
    },
  });
}
featureProducts();

const shoeSizeEls = document.querySelectorAll(".size");

shoeSizeEls.forEach((element, idx) => {
  element.addEventListener("click", () => {
    element.classList.add("active");

    document.querySelector(
      ".sizeDisplay"
    ).innerHTML = `Size : ${element.innerHTML}`;
    shoeSizeEls.forEach((item, index) => {
      if (idx !== index) {
        item.classList.remove("active");
      }
    });
  });
});

//Seasonal Products

async function seasonalProducts() {
  const res = await fetch("https://jayasaha811733.github.io/ReimagineAPI/assets.json");
  const data = await res.json();
  const wrapper = document.querySelector(".cardContainer");

  wrapper.innerHTML;

  let list = data.season;

  list.forEach((element) => {
    let space=(element.name).length>30?"...":" ";
    wrapper.innerHTML =
      wrapper.innerHTML +
      `<div class=" h-max  ">
              <div class=" md:w-[230px] xl:w-[250px] h-max rounded-[5%] py-[8%] px-[9%] sm:py-3 sm:px-4 bg-[white] m-auto shadow-lg">
              <img
                class=" sm:w-[200px] xl:w-[230px] rounded-[10%] mb-2 seasonImg aspect-square"
                src=" ${element.url} "
                alt=""
              />

              <p class="font-[lora] text-[black] font-bold text-[10px] sm:text-sm" name=" ${element.name} ">${(element.name).slice(12, 30)}${space}</p>
              <p class="font-[lora] text-[10px] sm:text-sm font-bold text-[black]">2024</p>

              <p
                class="font-[lato] text-[#c1860f] font-[500] leading-4 sm:leading-8 text-[10px] sm:text-sm"
              >
                Bacca Bucci
              </p>

              <span class="font-[oswald] font-bold text-[12px] sm:text-[18px]">Rs ${element.price}</span>
              <span class="font-[lora] text-[grey] line-through text-[8px] sm:text-xs"
                >Mrp 2,799</span
              >

              <div class="item-color gap-2 py-2 flex ">
                <div
                  class="border-[1px] border-[black] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[black]"></div>
                </div>
                <div
                  class="border-[1px] border-[grey] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[grey]"></div>
                </div>
                <div
                  class="border-[1px] border-[olive] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[olive]"></div>
                </div>
                <div
                  class="border-[1px] border-[brown] w-[24px] h-[24px] flex justify-center items-center rounded-full p-[1px]"
                >
                  <div class="w-[20px] h-[20px] rounded-full bg-[brown]"></div>
                </div>
              </div>

              <div
                class="addToCart border bg-[#4E3505] text-brand_yellow text-center rounded-full p-2 text-sm w-max mx-[-5px]"
              >
                <i class="fa-solid fa-plus"></i> Add To Cart
              </div>
            </div>
    </div> `;
  });

  const featureImgEl = document.querySelectorAll(".seasonImg");
  featureImgEl.forEach((element, idx) => {
    element.addEventListener("mouseenter", () => {
      element.src = `${list[idx].hoverUrl}`;
    });
    element.addEventListener("mouseleave", () => {
      element.src = `${list[idx].url}`;
    });
  });
}
seasonalProducts();

//changing images in specific screen sizes
function changeBannerImage() {
  const footerImg = document.querySelector(".footer-banner-img");
  const deliveryImg = document.querySelector(".delivery-img");
  const heroSlider1 = document.querySelector(".hero-slider-1");
  const heroSlider2 = document.querySelector(".hero-slider-2");
  const videoSlider= document.querySelector('.videoImage')
  const windowWidth = window.innerWidth;

  const video = document.querySelector('.video');

 
 
  const videoSrc = {
    small:
      "https://www.youtube.com/embed/s_cKoyRtJK8",
    large:
      "https://www.youtube.com/embed/DY9C-3lQIzE",
  };
  const videoTitle = {
    small:
      "Rannvijay x Baccabucci: Elevate Your Sneaker Game with Bacca Bucci! Limited Stocks, Infinite Style",
    large:
      "Discover Allure of Bacca Bucci Boots | A Cinematic Boot Adventure | Unleashing Essence of Adventure",
  };



  const bannerImages = {
    small:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719690052/baccabucci/oe7tazktfpp3u0m4wold.jpg",
    large:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1718270252/baccabucci/footer/egeraxcf41x4boobjcuv.jpg",
  };

  const deliveryImages = {
    small:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719580070/baccabucci/hcez75blwh9mzapuu9j5.jpg",
    large:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1718952469/baccabucci/nqbc4fr7w7v0insklvy8.png",
  };

  const heroSlider1Images = {
    small:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719238176/baccabucci/hx01xmk9jfg8fbxgiqci.jpg",
    large:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719238761/baccabucci/qg2be42m2ccskau5xmvp.jpg",
  };

  const heroSlider2Images = {
    small:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719238178/baccabucci/mhxxgfq2uwanec2oigiq.jpg",
    large:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719238759/baccabucci/dtyot6kt9vrldqks9phs.jpg",
  };
  const videoSlider2Images = {
    small:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719582415/baccabucci/gftrxf9nozrwycxtgqzn.jpg" ,
    large:
      "https://res.cloudinary.com/dojcchveo/image/upload/v1719583104/baccabucci/sshoracn3rmcvmomlfgu.png",
  };


  heroSlider1.src =
    windowWidth <= 768 ? heroSlider1Images.small : heroSlider1Images.large;
  videoSlider.src=
    windowWidth<=768? videoSlider2Images.small:videoSlider2Images.large;
  heroSlider2.src =
    windowWidth <= 768 ? heroSlider2Images.small : heroSlider2Images.large;
  footerImg.src = windowWidth <= 768 ? bannerImages.small : bannerImages.large;
  deliveryImg.src =
    windowWidth <= 640 ? deliveryImages.small : deliveryImages.large;
  video.src=
    windowWidth<=768? videoSrc.small:videoSrc.large;
  video.title=
    windowWidth<=768? videoTitle.small:videoTitle.large;
}

window.addEventListener("resize", changeBannerImage);
window.addEventListener("DOMContentLoaded", changeBannerImage);

//Category section
async function fillCategory() {
  const res = await fetch(
    "https://jayasaha811733.github.io/ReimagineAPI/assets.json"
  );
  const data = await res.json();
  const mainCategory = document.querySelector(".main-category");
  const discoverWrapper = document.querySelector(".discover-wrapper");

  // Discover
  const discoverFragment = document.createDocumentFragment();
  data.discover.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide rounded-3xl shadow";
    slide.innerHTML = `
      <div class="img-box rounded-2xl w-full overflow-hidden">
        <img src="${item}" alt="Sneakers" class="w-full">
      </div>
    `;
    discoverFragment.appendChild(slide);
  });
  discoverWrapper.appendChild(discoverFragment);

  // Initialize Swiper
  new Swiper(".card-slider", {
    grabCursor: true,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".discover-next",
      prevEl: ".discover-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 13,
      },
      480: {
        slidesPerView: 2.25,
        spaceBetween: 13,
      },
      620: {
        slidesPerView: 2.6,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });

  // Categories
  const categoryFragment = document.createDocumentFragment();
  data.categories.forEach((category, i) => {
    const categoryDiv = document.createElement("div");
    if (i === 0 || i === 8) {
      categoryDiv.className =
        "custom2:row-span-2 flex items-center justify-center flex-col";
    }
    categoryDiv.innerHTML = `
      <div class="hover:scale-[1.1] transition duration-150 flex items-center justify-center p-1 border-4 overflow-hidden rounded-full border-solid" style="border-color: ${category.bg};">
        <div>
          <img class="w-[4rem] lg:w-[5rem] xl:w-[6rem] 2xl:w-[8rem]" src="${category.url}" alt="">
        </div>
      </div>
      <div class="w-full">
        <p class="text-[10px] lg:text-xs xl:text-[14px] relative z-10 2xl:text-[18px] py-2 2xl:py-3 font-[Lato] font-bold rounded-full text-center" style="background-color: ${category.bg}; color: ${category.color};">
          ${category.name}
          
          </p>
        
      </div>
    `;
    categoryFragment.appendChild(categoryDiv);
  });
  mainCategory.appendChild(categoryFragment);

  let list = data.categories;
  // console.log(list)
}

fillCategory();

//New Collection
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");

async function newCollectionProducts() {
  const res = await fetch("https://jayasaha811733.github.io/ReimagineAPI/assets.json");
  const data = await res.json();
  const wrapper = document.querySelector(".carousel .list");

  let list = data.newCollection;
  

  list.forEach((element) => {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `<div class="item  absolute top-0 left-0 
    w-[90%] lg:w-[75%] h-[100%] text-[10px] md:text-[15px]">
              <img src=" ${element.url} " class="pImg w-[48%] sm:w-[40%] md:w-[45%] absolute right-0 top-[50%] translate-y-[-50%] " alt="">

               <div class="intro absolute top-[50%] translate-y-[-50%] w-[50%] md:w-[350px] opacity-0  pointer-events-none ">
                <div class="brand font-[coustard] text-[#AA740A] tracking-widest  leading-8 text-[8px] sm:text-[10px] md:text-[15px]">
                  BACCA BUCCI
                </div>
                <div class="pName w-[300px] sm:w-[350px] md:my-4 font-spartan font-[500] text-[20px] sm:text-[36px] md:text-5xl ">${element.name}</div>
                <div class="price flex flex-wrap items-center">

                <div
                class="pPrice font-[oswald] font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-[#601406] pr-2"
                >Rs. ${element.price}</div
                >
                <div
                  class="font-[lora] text-[grey] line-through text-[8px] md:text-xs lg:text-sm text-center pr-10"
                  >Mrp. 3499.00</div
                >
                </div>


                <div class="des md:w-[280px] mt-4 font-[lato] ">${element.description} </div>

                <div
                class="addToCartCollection button mt-4 border  rounded-full px-3 py-2 text-[#ddc56f] font-[lato] bg-[#4E3505] lg:py-[10px] lg:text-xl lg:mt-10 w-max flex items-center justify-center"
              >
                <i class="fa-solid fa-plus text-sm sm:text-xl mr-2"></i> ADD TO CART
              </div>
              </div> 

            </div>`;
  });

  nextButton.onclick = function () {
    // console.log('connected')
    showSlider("next");
  };
  prevButton.onclick = function () {
    showSlider("prev");
  };

  let sliderAutoplay = setInterval(() => {
    carousel.classList.remove("prev", "next");
    let items = document.querySelectorAll(".carousel .list .item");
    wrapper.appendChild(items[0]);
    carousel.classList.add("next");
  }, 4000);

  let unAcceptClick;

  const showSlider = (type) => {
    clearInterval(sliderAutoplay);
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";

    carousel.classList.remove("prev", "next");
    let items = document.querySelectorAll(".carousel .list .item");
    if (type === "next") {
      wrapper.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      let positionLast = items.length - 1;
      wrapper.prepend(items[positionLast]);
      carousel.classList.add("prev");
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
      sliderAutoplay = setInterval(() => {
        carousel.classList.remove("prev", "next");
        let items = document.querySelectorAll(".carousel .list .item");
        wrapper.appendChild(items[0]);
        carousel.classList.add("next");
      }, 4000);
    }, 2000);
  };


  //Cart Section
  const cartBtnEl=document.querySelectorAll('.addToCart');
  

  const cartItemContainer= document.querySelector('.cart .cartItemContainer');

  cartBtnEl.forEach(element => {
    element.classList.add('cursor-pointer')
    element.addEventListener('click', ()=>{
      let cartItem=(element.parentNode).childNodes
      
      let json={
          'image':cartItem[1].src,
          'name':(cartItem[3].getAttribute('name')).slice(12,50),
          'price':(cartItem[9].innerHTML).slice(3,).replace(/,/,""),
          'qty':1

        }
        
        let localCart=cartList
        let localJson=JSON.stringify(json)
        // console.log(localCart.includes(localJson))
        // console.log( JSON.stringify(localCart).includes(json.image))

        

        if(!localCart.includes(localJson) && !JSON.stringify(localCart).includes(json.image)){
          
          updateItemsToCart(json,cartList.length)
          cartList.push(JSON.stringify(json));
          updateLocalStorage()
        }
        emptycart()


    })



    
    
  });

  cartList.forEach((element,idx) => {

    // console.log(JSON.parse(element))
    let json={
      'image':JSON.parse(element).image,
      'name':JSON.parse(element).name,
      'price':JSON.parse(element).price,
      'qty':JSON.parse(element).qty
  
    }
    // console.log(json)
    updateItemsToCart(json, idx)
    emptycart()

  
  
  });

  function updateItemsToCart(json, idx){
    
    cartItemContainer.innerHTML= cartItemContainer.innerHTML+`<div class="cartItem flex ml-[10px] shadow-lg mb-3 border border-1 border-[#b1afaf] ">
            <img src="${json.image}" class="aspect-square w-[100px] sm:w-[120px] md:w-[150px] m-1 rounded" alt="">
  
            <div class="des m-1.5 ml-[10px] relative  w-[70%]">
              <p class="itemName font-spartan text-sm sm:text-base md:text-lg font-bold pb-1.5 md:pb-1"> ${json.name}... </p>
  
              <div class="price text-sm sm:text-base md:text-lg font-[lato] font-semibold text-[#4E3505] pb-1.5 md:pb-1 "> 
                <label for="price" class="font-[Roboto] font-[400] text-[black] ">
                  Price: 
                </label> 
                <label > &#8377</label>
                <label class="cartPrice">${json.price* json.qty}</label> </div>
              
              <label class="  text-sm sm:text-base md:text-lg" for="Qty" >Qty : </label>
              <input
                class="border cartQty text-center leading-3 w-[50px] rounded"
                type="number"
                name="qty"
                value="${json.qty}"
                min="1" 
              />
  
              <div class="removeItem absolute bottom-1 sm:bottom-3 right-1 sm:right-3 md:right-5 text-[#4E3505] text-sm sm:text-base md:text-lg  "
              index="${idx}">
                <i class="fa-solid fa-trash"></i>
                <label for="trash"> Remove</label>
              </div>
  
            </div>
            
  
          </div>`


    
    const cartTotal=document.querySelector('.cartTotal');
    const cartPrice=document.querySelectorAll('.cartPrice');
    const cartCount=document.querySelector('.cartCount');
    const cartQuantity=document.querySelectorAll('.cartQty')
    
    let total=0;
    let countTotal=0;
    cartPrice.forEach((element,idx) => {
      total+=parseInt(element.textContent);
      countTotal+=parseInt(cartQuantity[idx].value)
      
    });

    // console.log(countTotal)
    cartTotal.innerHTML=`Total: &#8377 ${total}`;
    cartCount.innerHTML=`${countTotal}`;
    
    const removeItemList=document.querySelectorAll('.removeItem');
    
    const cartItemList=document.querySelectorAll('.cartItem');

    removeItemList.forEach((element, idx) => {
      element.classList.add('cursor-pointer')
      element.addEventListener('click',()=>{
        
        const parentImg=( (element.parentNode).parentNode).childNodes
        const parentDes=(element.parentNode).childNodes
        const price=parseInt((element.parentNode).querySelector('.cartPrice').textContent)
        const cartqty=parseInt((element.parentNode).querySelector('.cartQty').value)
      
        
        total-=price;
        countTotal-=cartqty;
       

        cartTotal.innerHTML=`Total: &#8377 ${total}`;
        cartCount.innerHTML=`${countTotal}`;
       
        let object={'image':parentImg[1].src,
                    'name':parentDes[1].textContent.slice(1,-4),
                    'price':(parentDes[3].childNodes)[5].textContent

                    }
        
        let localJson=JSON.stringify(object)
        
        cartItemList[idx].remove()
        cartList.splice(cartList.indexOf(localJson),1);
        
        updateLocalStorage()
        emptycart();
        

      })
      
    });

    const cartQty=cartItemContainer.querySelectorAll('.cartQty');

    cartQty.forEach((element, idx) => {
      element.addEventListener('change',()=>{

        let qty=!element.value|| parseInt(element.value)<1?1:parseInt(element.value);
        let image=JSON.parse(cartList[idx]).image;
        let name=JSON.parse(cartList[idx]).name;
        let price=JSON.parse(cartList[idx]).price;

        let cartQtyBefore=JSON.parse(cartList[idx]).qty
        
        element.parentNode.querySelector('.cartPrice').innerHTML=price*qty;
        
        if(JSON.parse(cartList[idx]).qty<qty){
          total+=price*qty-cartQtyBefore*price
          cartTotal.innerHTML=`Total : ${total}`;

          // console.log(total)  
        }else{
          total=total-cartQtyBefore*price+qty*price
          cartTotal.innerHTML=`Total : ${total}`;
          // console.log(total)
        }
        countTotal=countTotal+qty-cartQtyBefore
        // console.log(countTotal)
        cartCount.innerHTML=`${countTotal}`;

        if(qty<1){
          element.setAttribute('value',1);
        }else{
          element.setAttribute('value',qty);
        }
        
        let json={
          'image':image,
          'name':name,
          'price':price,
          'qty':qty
        }
        cartList[idx]=JSON.stringify(json)
        updateLocalStorage()
      })
      
    });

    

    

  }

  function emptycart(){
    const cart_Count=document.querySelector('.cartCount');
    if(!cartList || cartList.length<1){
      // console.log('connected')
      cartItemContainer.style.backgroundImage='url(https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg)';
      cartItemContainer.classList.add('bg-no-repeat','bg-center','bg-contain')
      cart_Count.innerHTML='0';
  
    }else{
      cartItemContainer.style.backgroundImage='none';
    }

  }
  emptycart()
  
  
 

  const featureCartBtn=document.querySelector('.addToCartFeature');
  const featureImg=document.querySelectorAll('.featureImg');
  const featureName=document.querySelector('.featureName');
  const featurePrice=document.querySelector('.featurePrice');
  // console.log(featureImg[0].src)
  // console.log(featureName.innerHTML)

  featureCartBtn.classList.add('cursor-pointer')
  featureCartBtn.addEventListener('click',()=>{
    let json={
      'image':featureImg[0].src,
      'name':(featureName.innerHTML).slice(0,50),
      'price':(featurePrice.innerHTML).slice(3,).replace(/,/,""),
      'qty':1

    }
    // console.log(json)

    let localCart=cartList
    let localJson=JSON.stringify(json)

    
    if(!localCart.includes(localJson) && !JSON.stringify(localCart).includes(json.image)){
          
      updateItemsToCart(json,cartList.length)
      cartList.push(JSON.stringify(json));
      updateLocalStorage()
    }
    emptycart();



  })

  const addToCartCollection=document.querySelectorAll('.addToCartCollection');
  
  addToCartCollection.forEach(element => {

    element.classList.add('cursor-pointer')
    element.addEventListener('click', ()=>{
      let cartItem=(element.parentNode).parentNode
      // console.log(cartItem)
    
      let json={
          'image':cartItem.querySelector('img').src,
          'name':cartItem.querySelector('.pName ').textContent.replace('...','').slice(0,50),
          'price':(cartItem.querySelector(' .pPrice ').textContent).slice(3,).replace(/,/,""),
          'qty':1

        }
      // console.log(json)
        
      let localCart=cartList
      let localJson=JSON.stringify(json)
      if(!localCart.includes(localJson) && !JSON.stringify(localCart).includes(json.image)){
            
        updateItemsToCart(json,cartList.length)
        cartList.push(JSON.stringify(json));
        updateLocalStorage()
      }
        // console.log(cartList)
      emptycart()

        

    })


    
  });



  


}
newCollectionProducts();

function updateLocalStorage(){
  localStorage.setItem("Cart", JSON.stringify(cartList));

}




