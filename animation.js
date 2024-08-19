
         const canvas = document.querySelector("canvas");
         const context = canvas.getContext("2d");

         const frame = {
            CurrentFrame: 0,
            MaxFrame: 459
        };

        let loadedImgs = 0
        const Images = []


        function preLoadImages(){
            for (var i = 0; i <= frame.MaxFrame; i++) {
                const ImgURL = `./Images Sequence/rendered video${i.toString().padStart(3,"0")}.jpg`
                const Img = new Image()
                Img.src = ImgURL
                Img.onload = () => {
                    loadedImgs++
                    if(loadedImgs == frame.MaxFrame){
                        loadImages(frame.CurrentFrame)
                        startAnimation()
                    }
                };
                Images.push(Img)
            } 
        }

        
        function loadImages(index){
            if(index >= 0 && index <= frame.MaxFrame){
                const Img = Images[index]
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
                const ScaleX = canvas.width / Img.width
                const ScaleY = canvas.height / Img.height
                const Scale = Math.max(ScaleX, ScaleY)
                const newWidth = Img.width * Scale
                const newHeight = Img.height * Scale
                const offSetX = (canvas.width - newWidth) / 2
                const offSetY = (canvas.height - newHeight) / 2
                context.clearRect(0, 0, canvas.width, canvas.height)
                context.imageSmoothingEnabled = true
                context.imageSmoothingQuality = "high"
                context.drawImage(Img, offSetX, offSetY, newWidth, newHeight)
                frame.CurrentFrame = index
            }
        }

        function startAnimation(){
           var TimeLine = gsap.timeline({
            scrollTrigger : {
                trigger : ".parent",
                start: "top top",
                scrub: 2,
                end: "bottom bottom"  
            }
           })

           function UpdateFrame(index) {
            return {
                CurrentFrame: index,
                ease: "linear",
                onUpdate: function() {
                    loadImages(Math.floor(frame.CurrentFrame))
                }
            }
           }

           TimeLine
           .to(frame, UpdateFrame(50), "firstFlag")
           .to(".animate1", {opacity: 0, ease: "linear"}, "firstFlag")

           .to(frame, UpdateFrame(80), "secondFlag")
           .to(".animate2", {opacity: 1, ease: "linear"}, "secondFlag")

           .to(frame, UpdateFrame(110), "thirdFlag")
           .to(".animate2", {opacity: 1, ease: "linear"}, "thirdFlag")

           .to(frame, UpdateFrame(140), "fourthFlag")
           .to(".animate2", {opacity: 0, ease: "linear"}, "fourthFlag")

           .to(frame, UpdateFrame(170), "fifthFlag")
           .to(".animate3", {opacity: 1, ease: "linear"}, "fifthFlag")

           .to(frame, UpdateFrame(200), "sixthFlag")
           .to(".animate3", {opacity: 1, ease: "linear"}, "sixthFlag")

           .to(frame, UpdateFrame(230), "seventhFlag")
           .to(".animate3", {opacity: 0, ease: "linear"}, "seventhFlag")

           .to(frame, UpdateFrame(260), "eighthFlag")
           .to(".panel", {x: "0%", ease: "expo"}, "eighthFlag")
           .to(".main", {cursor:"auto", ease: "expo"}, "eighthFlag")

           .to(frame, UpdateFrame(290), "ninthFlag")
           .to(".panel", {x: "0%", ease: "expo"}, "ninthFlag")
           .to(".main", {cursor:"auto", ease: "expo"}, "ninthFlag")

           .to(frame, UpdateFrame(320), "tenthFlag")
           .to(".panel", {opacity: 0, ease: "linear"}, "tenthFlag")
           .to(".main", {cursor:"none", ease: "linear"}, "tenthFlag")

           .to(frame, UpdateFrame(350), "eleventhFlag")
           .to(".zshan", {opacity: 1, ease: "expo"}, "eleventhFlag")

           .to(frame, UpdateFrame(380), "twelvethFlag")
           .to(".zshan span", {opacity: 1, ease: "expo", width: 40}, "twelvethFlag")

           .to(frame, UpdateFrame(410), "thirteenthFlag")
           .to(".zshan span", {opacity: 1, ease: "expo", width: 40}, "thirteenthFlag")

           .to(frame, UpdateFrame(440), "fourteenthFlag")
           .to(".zshan", {opacity: 0, ease: "linear"}, "fourteenthFlag")

           .to(frame, UpdateFrame(frame.MaxFrame), "endFlag")
           .to("#cursor", {opacity: 1, ease: "expo"}, "endFlag")

        }

        window.addEventListener("resize", function(){
                loadImages(frame.CurrentFrame)
        })

        preLoadImages()

        document.querySelectorAll(".credits a","credits p")
            .forEach(function(elem){
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 90%",
                        end: "bottom 20%",
                        scrub: 2
                    },
                    opacity: 0
                })

                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 20%",
                        end: "bottom 20%",
                        scrub: 2
                    },
                    opacity: 1,
                    ease: "linear"
                })
            })

        const lenis = new Lenis()

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)