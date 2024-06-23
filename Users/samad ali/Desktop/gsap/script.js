
// gsap me 2 methods hoti hai to and from :
// from matlab final position se initial position ke taraf animate hoga element
// to matlab initial  position se final position ke taraf animate hoga element


gsap.from("#box",{
    opacity :0,
    scale :2,
    duration :2,
    y:700,
    x:700,
    rotate :360,
    repeat :-1,
    backgroundColor : "red"

})


gsap.to("h1",{

    x: 1000,
    scale :2,
    duration : 2,
   color : "golden",
   stagger : 2,
   repeat :2,
   opacity : 0.7,
   yoyo: true,
   delay : 2,
   repeat :-1

})
