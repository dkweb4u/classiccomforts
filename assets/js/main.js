var visitplace = new Swiper(".visitplace", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    loop:true,
    autoplay:{
        delay: 3000,       
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      100:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
// =================================================================================

var room = new Swiper(".roomsslider", {
  speed: 1500,
  loop:true,
  autoplay:{
      delay: 2500,       
  },
});

// =================================================================================

var room = new Swiper(".testimonial", {
  speed: 1500,
  loop:true,
  autoplay:{
      delay: 3000,       
  },
});

// =========================================================================================
let menuopen =  document.querySelector("header .menubar .menu");
let nav =  document.querySelector("header nav");

menuopen.addEventListener("click",()=>{
  menuopen.classList.toggle("active");
  nav.classList.toggle("active");
})

// ================================================================================================

let sublink =  document.querySelectorAll("header .sublink");

for(let i=0; i< sublink.length; i++){
  sublink[i].addEventListener("click",()=>{
    sublink[i].classList.toggle("open-link");
  })
}

// =============================================================================================
// whatsapplink

let whatsapplink = document.querySelector(".whatsappbook .book a.wp");

whatsapplink.addEventListener("click", ()=>{
let roomtype = document.querySelector(".whatsappbook .form #roomtype").value;
let checkin = document.querySelector(".whatsappbook .form #checkin").value;
let checkout = document.querySelector(".whatsappbook .form #checkout").value;
let adult = document.querySelector(".whatsappbook .form #adult").value;
let children = document.querySelector(".whatsappbook .form #child").value;

console.log(roomtype);

let wnumber = "9620252571";

// today date

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy+ '-' + mm + '-'  + dd ;
// today date

if(checkin ==''){
  checkin = today;
}

if(checkout ==''){
  checkout = today;
}

if(checkin <= checkout && today<= checkin){
  let data = `https://api.whatsapp.com/send?phone=91${wnumber}&text=Hi,%0aI Wants to book ${roomtype}%0aCheck In: ${checkin}%0aCheck Out: ${checkout}%0aAdult: ${adult}%0aChildren: ${children}`;
  window.open(data);

}
else{
 alert("Please Select valid check out date!");
}

});
