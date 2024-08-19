
        var parent = document.querySelector(".main")
        var cursor = document.querySelector("#cursor")
        var reveal = document.querySelector(".credits")

        parent.addEventListener("mousemove", function(dets){
            gsap.to(cursor,{
                x: dets.x,
                y: dets.y,
                ease: "back.out"
            })
        })

        reveal.addEventListener("mouseenter", function(){
            gsap.to(cursor,{
                scale: 2
            })
              
        })

        reveal.addEventListener("mouseleave", function(){
            gsap.to(cursor,{
                scale: 1,  
            })
        })
