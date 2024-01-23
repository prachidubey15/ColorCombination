function timelineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger : "#home",
            start :"top top",
            scrub:1,
            // markers:true,
            pin:true,
            end:"bottom -250%"
        }
    })
    tl.to("#centerimg",{
        left: "50%",
        ease: Power1
    })
    .to("#circle #btm img",{
        scale:1,
        rotate:"-180deg",
        duration:1,
        stagger : .1,
        ease: Power1
    },"a")  
    .to("#home #nav",{
        color:"#fff",
        ease : Power1
    },"a")
    .to("#circle #top img",{
        scale:1,
        duration:1,
        stagger : .1,
        ease: Power1
    },"a")  
      .to("#cenimg img",{
        scale: 0,
        duration:4,
        stagger : .1,
        ease: Power1
    },"a")  
      .to("#centerimg h5",{
        opacity:0,
        duration:1,
        stagger : .1,
        ease: Power1
    },"a")  
    .to("#circle",{
        scale: 0.6,
        duration:1,
        ease: Power1
    },"a")   
    .to("#overlay #gallery",{
        bottom:"-50%",
        ease: Power1
    },"a")  
    .to("#gola",{
        top :"50%",
        scale:2,
        ease : Power1
    },"a") 
    .to("#smcircle",{
        scale: 0,
        duration:1,
        ease: Power1
    },"b")  
    .to("#circle",{
        scale: 0,
        duration:1,
        ease: Power1
    },"b") 
    .to("#gola",{
        opacity:0,
        duration:0.5,
        // scale:0,
        ease : Power1
    },"b")
    .to("#pf",{
        bottom:"1%",
        rotate: 0,
        ease: Power1
    },"b") 
    .to("#pinkbox",{
        rotate:0,
        top:0,
        duration:5,
        ease : Power1
    }) 
    .to("#pinkbox",{
        top:"-100%",
        duration:3,
        ease : Power1
    })
}
function timelineTwo() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger : "#second",
            start :"top top",
            scrub:1,
            // markers:true,
            pin:true,
            end:"bottom -150%"
        }
    })
    tl2.to(".circle",{
        top:"50%",
        scale:1.4,
        stagger: .1,
        duration: 2,
        ease : Power1
    })
    .to(".circle",{
        left:"50%",
        stagger: .1,
        ease : Power1
    })
    .to(".circle",{
        scale : 1,
        ease : Power1
    })
    .to(".pi",{
        scale : 10,
        stagger: .1,
        duration:2,
        ease : Power1
    },"d")
    .to(".pu",{
        opacity:0,
        ease : Power1
    },"d")
    .to("#nav",{
        color : "#fff",
        ease: Power1
    },"d")
    .to("#stop>h1",{
        left:"-150%",
        duration:6,
        ease: Power1
    },"c")
    .to("#one",{
        opacity:0,
        delay:.5,
        ease: Power1
    },"c")
    .to("#two",{
        opacity:1,
        delay:1,
        ease: Power1
    },"c")
    .to(".pi",{
        delay:1.5,
        background: "linear-gradient(to right,#d5a7b4,#B4AAD5)",
        ease: Power1
    },"c")
    .to("#rect .smrect:nth-child(1)",{
        bottom:"0%",
        duration:4,
        ease: Power1
    },"f1")
    .to("#rect .smrect:nth-child(2)",{
        bottom:"0%",
        duration:4,
        delay:.5,
        ease: Power1
    },"f1")
    .to("#rect .smrect:nth-child(3)",{
        bottom:"0%",
        duration:4,
        delay:1,
        ease: Power1
    },"f1")
    .to("#rect .smrect:nth-child(4)",{
        bottom:"0%",
        duration:4,
        delay:1.5,
        ease: Power1
    },"f1")
    .to("#rect .smrect:nth-child(5)",{
        bottom:"0%",
        duration:4,
        delay:2,
        ease: Power1
    },"f1")
    .to("#rect .smrect:nth-child(6)",{
        bottom:"0%",
        duration:4,
        delay:2.5,
        ease: Power1
    },"f1")
    
}
timelineOne();
timelineTwo();

