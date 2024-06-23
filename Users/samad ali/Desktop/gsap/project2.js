var tl = gsap.timeline();

tl.from("#nav", {
    opacity:0,
    duration:1,
    y:-300,
    scale :0.5,
  

})

tl.from("#nav img, #nav>h3 ", {
    x: -300,
    opacity :0,
    width : "20%",
    duration : 1,
    stagger :0.6,
    // ease : Expo.easeInOut,
    color : "black"
})


tl.from("#nav #part2 h3, #nav #part2 i ", {
    opacity:0,
    width : "50%",
    duration:1,
    x:300,
    stagger : 0.6,
    color : "black"
})



.from("#Left #text-div #line,#Left #text-div h1, #Left #text-div p, #Left #text-div #content #circle, #Left #text-div #content button", {

    opacity:0,
    y:200,
    duration:1,
    stagger:0.7,
})


tl.from("#scroller",{
    opacity:0,
    duration:1,
    y:500,
    x:500,
    scale :3
})

tl.to("#scroller .card", {
    left :550,
    stagger:1,
    duration:1,
    delay :6,
    rotate:360,
    opacity:1
})










