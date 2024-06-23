

gsap.from("#page1 h1", {
    opacity :0,
    duration:1,
    y:150,
    stagger:0.4,
   color : "red",
})


gsap.to("#page2  img", {
    width : "100%",
    duration:0.7,
     
    scrollTrigger : {
          trigger : "page2",
          scroller : "body",
          scrub :2,
          pin:true,
    }


})



gsap.from("#page3 #box", {
    opacity:0,
    duration:1,
    scale :0,
    rotate : 720,
    scrollTrigger:{
        trigger : "#page3 #box",
        scroller:"body",
        scrub:4,

    }
})