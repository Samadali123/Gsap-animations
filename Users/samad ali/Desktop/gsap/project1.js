var tl = gsap.timeline()

tl.from("#left ", {
    opacity:0,
    duration:0.7,
    x:-1000,
})


tl.from("#right", {
    opacity:0,
    duration:0.7,
    x:1000
})

tl.from("#right img ", {
    opacity:0,
    scale :2,
    duration:1,
    y:-1000
})

tl.from("#center-text h1 ", {
    opacity:0,
    duration:0.3,
    x:-1000,
    scale: 2

})


tl.from("#text2  h1 ", {
    opacity:0,
    duration:0.3,
    x:  1000,
    scale :2
    
})


tl.from("#left #nav-left  h2, #left #nav-left #part2  h3", {
    opacity:0,
    duration:0.7,
    y:-200,
    stagger:0.3

})



tl.from("#right #nav-right h3", {
    opacity:0.7,
    duration:1,
    y:-200,
    stagger:0.3

})



