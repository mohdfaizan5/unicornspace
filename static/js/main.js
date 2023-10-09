// let CTABtn1 = document.querySelector("#CTApopupBtn1")
// let CTABtn2 = document.querySelector("#CTApopupBtn2")


// // Animation for cta popup button
// CTABtn2.addEventListener('mousedown', followAnimation)

// function followAnimation(event){
//   console.log(event.x)
//   CTABtn1.style.top =  `${event.x}px`


// }


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


