var tl = gsap.timeline();


tl.from("#main",{
    scale : 0,
    duration:2,
    // y:1000,
    x:1000,
    rotate :270,
})

tl.from("#nav",{
    opacity : 0,
     duration :2,
     scale : 2,
     y :200,
    rotate :10

})


tl.from("h1",{
    color : "red",
    opacity : 0,
     duration :2,
     y:100,
     x:100,
     scale :2,
     

})





tl.from("p",{
    color : "red",
    opacity : 0,
     duration :2,
     y:200,
     x:100,
     scale :2,

})




tl.from("button",{
    color : "red",
    opacity : 0,
     duration :2,
     y:100,
     scale :2,
     

})







