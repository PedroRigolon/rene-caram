// ativar plugin scrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from("#k-1, #k-2, #k-3", {
    opacity:0,
    duration:3,
    scrollTrigger: {
        trigger: "#k-1", 
        start: "top 55%", 
        end: "bottom 25%", 
        toggleActions: "play none none none", 
      }

})