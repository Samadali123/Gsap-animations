var tl = gsap.timeline();
tl.from("#page1 #nav", {
    opacity:0,
    duration:1,

})


.from("#nav h2, #nav #part2 h3, #nav #part3 h3, #nav #part3 #circle", {
    y:-200,
    scale:0.5,
    duration:0.5,
    stagger:0.7,
})


.from("#page1 #content ", {
    opacity:0,
    duration:0.5,
    y:200,
    scale:0.5,
})


.from("#content #left", {
    opacity:1,
    x:-1200,
    duration:0.5,

} )


.from("#content #right", {
    opacity:1,
    x:1200,
    duration:0.5,
})


.from("#content #left h1, #content #left span, #content #left #text p", {

    opacity:0,
    duration:0.5,
    x: -600,
    stagger:0.8,

})

.from("#content #right #box, #content #right .overlay ", {

    x:600,
    opacity:0,
    duration:0.5,
    stagger:0.7,
} )



.from("#page2 #part1, #page2 #part2 .cards", {
    scale :0,
    duration:0.5,
    stagger:0.6,
    opacity:0,

    scrolltrigger:{
        trigger : "#page2 #part1, #page2 #part2 .cards",
        scroller:"body",
        // markers :true,
        top :"50%",
        end : "top 20%",
        scrub:4,
    
    }
})