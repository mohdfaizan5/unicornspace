// let CTABtn1 = document.querySelector("#CTApopupBtn1")
// let CTABtn2 = document.querySelector("#CTApopupBtn2")


// // Animation for cta popup button
// CTABtn2.addEventListener('mousedown', followAnimation)

// function followAnimation(event){
//   console.log(event.x)
//   CTABtn1.style.top =  `${event.x}px`


// }

gsap.to('.loader-wrapper img', {
  // x: 100,
  rotate: 360,
  repeat: -1,
  duration: 1
})


window.addEventListener('load', () => {
  
  document.querySelector('.loader-wrapper').style.display = 'none'


  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('nav').style.display = 'none'
  })

  gsap.from("header", {
    y: -100,
    duration: 0.5,
    delay: 0.15
  })

  gsap.from(".home", {
    y: 100,
    duration: 0.5,
    delay: 0.15
  })

})


// cta_popup_container scroll animation

// let cta_popup_container = document.querySelector('.cta_popup_container')
// let oldScrollY = window.scrollY;
// let directionText = document.getElementById('direction');
// window.onscroll = function (e) {
//   if (oldScrollY < window.scrollY) {
//     console.log(" Down")
//     cta_popup_container.classList.toggle('slideDown')
//   } else {
//     console.log("up")
//     cta_popup_container.classList.toggle('slideUp')
//   }
//   oldScrollY = window.scrollY;
// }


// 
// document.querySelector('.faq').addEventListener('click', ()=>{
//   document.querySelector('.faq').classList.toggle('active')
// })


// FAQ Question answer toggle
document.querySelectorAll('.faq').forEach(eachFaq => {
  eachFaq.querySelector('i').addEventListener('click', ()=>{
    eachFaq.querySelector(".answer").classList.toggle("show_answer")
  })


})