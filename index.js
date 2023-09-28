const heroSection=document.getElementById("hero");
//========================================
//creating a responsive navbarcomponent
//========================================
const mobile_nav=document.querySelector(".mobile-navbar-btn");
const headerElem=document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
  headerElem.classList.toggle("active");
})
//========================================
//creating a sticky responsive  navbar component
//========================================

const observer=new IntersectionObserver((entries)=>{
  const ent=entries[0];
  !ent.isIntersecting ? document.body.classList.add("sticky")
  :document.body.classList.remove("sticky");
},{
  root:null,
  threshold:0
})


observer.observe(heroSection);


//========================================
//creating a portfolio tabbed component
//========================================
const p_btns=document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const p_img_elem=document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click',(e)=>{
    const p_btn_clicked=e.target;
    
    p_btn.forEach((curElem)=>curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num=p_btn_clicked.dataset.btnNum;

    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`)
    p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"))
    img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active"))
});

//swiper js code

var swiper = new Swiper(".mySwiper", {
  spaceBetween:30,
  slidesPerView: 2,
  autoplay:{
    delay:2500,
    disableOnInteraction : false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const myJsmedia=(widthSize)=>{
if(widthSize.matches){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween:6,
    slidesPerView: 1,
   
  });
  
}else{
  var swiper = new Swiper(".mySwiper", {
    spaceBetween:30,
    slidesPerView: 2,
  });
  
}
}
//testimonial css media query
const widthSize=window.matchMedia("(max-width:780px)");
//call listner function at run time
myJsmedia(widthSize);
widthSize.addEventListener('change',myJsmedia);


//scroll to top button

const footerElem=document.querySelector(".section-footer");
const scrollElement=document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

const scrollTop=()=>{
  heroSection.scrollIntoView({behavior:"smooth"});
};
footerElem.after(scrollElement);
scrollElement.addEventListener("click",scrollTop);


const workSection=document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries,observer)=>{
  const [entry]=entries;
  if(entry.isIntersecting==false)return;

  //animate number
  const counterNum=document.querySelectorAll(".counter-numbers");
  const speed=1;
  counterNum.forEach((curElem)=>{
    const updateNumber=()=>{
      const targetNumber=parseInt(curElem.dataset.number);
      
      const initialNum=parseInt(curElem.innerText);
      const incrementNumber=Math.trunc(targetNumber/speed);
      if(initialNum<targetNumber){
        curElem.innerText=`${initialNum+speed}+`;
        setTimeout(()=>updateNumber(),30)
      }
    };
    updateNumber();
  });
  observer.unobserve(workSection);
},{
  root:null,
  threshold:0
});
workObserver.observe(workSection);