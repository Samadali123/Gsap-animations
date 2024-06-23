
var tl = gsap.timeline()

tl.from("#main #nav, #nav h3, #nav img", {
    opacity : 0,
    duration :1,
    scale :0,
    stagger:0.7

})



.from("h1, span ", {
    opacity:0,
    x:-400,
    duration:1,
    stagger:0.7
})



.from("#content p ", {
    opacity:0,
    duration:1,
    x:200,
    width : 20
})


.from("#content h3", {
    opacity:0,
    duration:0.8,
    y:200

})




.from("#content #first ", {
    opacity:0,
    duration:1,
    x:-200,
    rotate:-20
})



.from("#content #second ", {
    opacity:0,
    duration:1,
    x:200,
    rotate:20
})



.to("#content h2", {
    opacity:0.5,
    duration:1,
    y:90,
    repeat :-1,
    yoyo:true

})