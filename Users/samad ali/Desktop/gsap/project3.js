var tl = gsap.timeline();


tl.from("#main",{
    opacity:0,
    duration:1,
    scale:2,
    rotateY: 360


})

tl.from("#nav ", {
    opacity : 0,
    duration :1,
    y:-200,
})

tl.from("#content h1 ",{
    opacity:0,
    duration:2,
    scale:0.3,
    color:"red"

})




tl.from("#content h2",{
    opacity:0,
    duration:1,
    y:100,
    repeat : -1,
    color : "red",
    yoyo:true

     
})



tl.to("#content #first, #content #second",{
    opacity:0,
    duration:2,
    y:200,
    stagger:0.5
})


tl.from("#content #icons, #icons i",{
    opacity:0,
    duration:1,
    scale:2,
    stagger:0.5,
    x:-100,
    color:"red"
})