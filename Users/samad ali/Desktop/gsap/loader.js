function loader (){
  var a = 0;
  setInterval(function(){
    a =  a + Math.floor(Math.random()* 20);
    if(a < 100){
        document.querySelector("#page1 h1").innerHTML = a + "%";
    }

    else{
        a = 100;
        document.querySelector("#page1 h1 ").innerHTML = a + "%";
    }


  } , 200)

  
}

loader();

var tl = gsap.timeline();
tl.to("#page1 h1", {
     scale :1.3,
     duration :0.5,
     onStart:loader(),
})

.to("#page1", {
    y:"-100vh",
    ease: Expo.ease,
    delay:2,
    
})



