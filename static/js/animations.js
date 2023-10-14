gsap.from("#svg_animate1", {
  x: 1000,
  duration: .7,
  stagger: .3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".svg_animate",
    scroller: "body",
    // start: 'top 90%',
    // end: 'top 40%',
    scrub: 4
  }
})

gsap.from("#svg_animate2", {
  x: -1000,
  duration: .7,
  stagger: .3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".svg_animate",
    scroller: "body",
    // start: 'top 90%',
    // end: 'top 40%',
    scrub: 5
    // scrub: true,
  }  // scrollTrigger: {
  //   trigger: ".our_methodology section img",
  //   scrub: 4,
  // }
})
gsap.from("#svg_animate3", {
  x: 1000,
  duration: .7,
  stagger: .3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".svg_animate",
    scroller: "body",
    // // // markers: true,
    // start: 'top 90%',
    // end: 'top 40%',
    scrub: 5
    // scrub: true,
  }  // scrollTrigger: {
  //   trigger: ".our_methodology section img",
  //   scrub: 4,
  // }
})
gsap.from("#svg_animate4", {
  x: -1000,
  duration: .7,
  stagger: .3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".svg_animate",
    scroller: "body",
    // // // // markers: true,
    // start: 'top 90%',
    // end: 'top 40%',
    scrub: 5
    // scrub: true,
  }  // scrollTrigger: {
  //   trigger: ".our_methodology section img",
  //   scrub: 4,
  // }
})