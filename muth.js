function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#page1"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#page1", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#page1").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + 20 + "px"; /* +20px offsets it from the mouse tip */
    crsr.style.top = dets.y + 20 + "px";
});










document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn1");
    const video = document.getElementById("vid1");
    const muth = document.getElementById("wer");
    const muth2 = document.getElementById("tyu");
    const muth3 = document.getElementById("rty");

    button.addEventListener("click", function() {
        // Play the video
        video.play();
        
        // Fade in the video and initial elements (set opacity to 1)
        video.style.opacity = "1";
        muth.style.opacity = "1";
        muth2.style.opacity = "1";

        // Fade in muth3 after 1 second with a delay
        setTimeout(() => {
            muth3.style.opacity = "1"; // Fades in after 1 second
        }, 1000); // 1000 milliseconds = 1 second delay

        // Fade out the video after 2 seconds
        setTimeout(function() {
            video.style.opacity = "0";  // Make the video disappear
            video.currentTime = 0;      // Reset the video to the start for next click
            muth.style.opacity = "0";   // Fade out muth
            muth2.style.opacity = "0";  // Fade out muth2
              // Fade out muth3
        }, 2000); // 2000 milliseconds = 2 seconds total (1s after muth3 shows)
        setTimeout(() => {
            muth3.style.opacity = "0"; // Fades in after 1 second
        }, 5000);
    });
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2", 
        scroller: "body",
        start: "top 70%", 
        end: "top 50%", 
        scrub: 3,
        
    
    }
});

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2", 
        scroller: "body",
        start: "top 65%", 
        end: "top 45%", 
        scrub: 3,
        
    
    }
});

tl4.from("#intro2", {
    rotateX: "-180deg",
     ease: "power1.out",
     opacity: 0, 
});
tl3.to("#page2", {
    backgroundColor: "#5A189A",
})
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2", 
        scroller: "body",
        start: "top 50%", 
        end: "top 30%", 
        scrub: 3,
       
        
    
    }
});
tl5.from("#img2", {
    x: 200,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
})
tl5.from("#p1", {
    x: -200,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
})

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#intro2", 
        scroller: "body",
        start: "top 30%", 
        end: "top 10%", 
        scrub: 3,
      
        
    
    }
});
tl6.from("#p2", {
    rotateX: "90deg",
     ease: "power4.out",
     opacity: 0, 
})

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p2", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
       
        
    
    }
});
tl6.from("#p3", {
    rotateX: "90deg",
     ease: "power4.out",
     opacity: 0, 
})
var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p3", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
       
        
    
    }
});
tl7.from("#p4", {
    rotateX: "90deg",
     ease: "power4.out",
     opacity: 0, 
})
var tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p4", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
       
        
    
    }
});
tl8.from("#p5", {
    rotateX: "90deg",
     ease: "power1.out",
     opacity: 0, 
})
var tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p5", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
        
        
    
    }
});
tl9.from("#p6", {
    rotateX: "90deg",
     ease: "power1.out",
     opacity: 0, 
})
var tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p6", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
       
        
    
    }
});
tl10.from("#p7", {
    rotateX: "90deg",
     ease: "power1.out",
     opacity: 0, 
})
var tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p7", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
       
        
    
    }
});
tl11.from("#p8", {
    rotateX: "90deg",
     ease: "power1.out",
     opacity: 0, 
})
var tl12 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p3", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
        
        
    
    }
});
tl12.from("#gif", {
    x: 200,
     ease: "power1.out",
     opacity: 0, 
})
var tl13 = gsap.timeline({
    scrollTrigger: {
        trigger: "#p6", 
        scroller: "body",
        start: "top 40%", 
        end: "top 20%", 
        scrub: 3,
        markers: true,
        
    
    }
});
tl13.from("#swag", {
    x: -200,
     ease: "power1.out",
     opacity: 0, 
})

// Roast list
const roasts = [
    
        "Sach: Muth Nain, tu toh woh gandi naali ka keeda hai jo 7 lakh haar ke bhi WhatsApp pe ‘Bhai, scam nahi hai’ bola!",
        "Sach: Teri zindagi ek bhosdike ka tamasha hai—ek dost, woh bhi tujhe harami samajh ke paisa loot gaya!",
        "Sach: Tu 21 saal ka kuwara lund hai jo Instagram pe ladkiyo ke pic pe muth marta hai—aur phir bhi virgin!",
        "Sach: Tere baap ke 7 lakh gaye, aur tu apne bhai ke saath WhatsApp pe ‘Crypto king banega’ ka sapna dekh raha tha, gandu!",
        "Sach: Tu toh woh sasti chhapri hai jo college ke chaar saal mein ek dost nahi bana—ab second-years ke taash ka joker ban gaya!",
        "Sach: Teri shakal itni ghatiya hai ki teri maa bolti hai, ‘Yeh haramzada mera nahi ho sakta!’",
        "Sach: Tu suicidal tha kyunki call nahi utha? Arre, tujhe toh tera khud ka lund bhi jawab nahi deta!",
        "Sach: Tera bhai aur tu dono milke itne bade chutiye ho ki 7 lakh haar ke bhi ‘Next time jeetenge’ bola!",
        "Sach: Tu toh woh kutta hai jo ek dost ke pichhe dum hilata hai, aur woh tujhe har roz gali mein fenk deta hai!",
        "Sach: Teri aukaat itni gandi hai ki scammers ne tujhe loot ke bola, ‘Bhai, isse toh hum bhi behtar hai!’",
        "Sach: Tu final year mein bhi second-years ka chamcha hai—bhai, tu toh college ka permanent naukar hai!",
        "Sach: Teri zindagi ka ek hi highlight hai—WhatsApp pe scam link pe click karke baap ka paisa uda diya!",
        "Sach: Tu itna bada harami hai ki tera dost tujhe paisa chura ke randi ke paas gaya, aur tu reels dekh ke khush ho gaya!",
        "Sach: Tujhe dekh ke lagta hai bhagwan ne tujhe banaya aur bola, ‘Yeh toh galti se bhosdika ban gaya!’",
        "Sach: Tu toh woh bekaar ka kachra hai jo 7 lakh ke scam ke baad bhi bolta hai, ‘Bhai, main toh investor hoon!’"
    
];


// Btn3 functionality
document.getElementById("btn3").addEventListener("click", function() {
    const truthDiv = document.getElementById("truth-reveal");
    const roastText = document.getElementById("roast-text");
    const scamMeter = document.getElementById("scam-meter");
    const laughAudio = document.getElementById("laugh");

    // Show the div
    truthDiv.style.display = "block";

    // Random roast
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    
    // GSAP animation for sexy reveal
    gsap.to("#truth-reveal", {
        opacity: 1,
        y: -20,
        duration: 2.5,
        ease: "power4.out",
        onStart: () => {
            roastText.innerText = "Hacking Muth’s Life..."; // Fake loading
            laughAudio.play(); // Laugh track kicks in
        },
        onComplete: () => {
            roastText.innerText = randomRoast; // Roast drops
            scamMeter.style.width = "100%"; // Meter fills up slow
        }
    });

    // Reset for next click
    setTimeout(() => {
        gsap.to("#truth-reveal", {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: () => {
                truthDiv.style.display = "none";
                scamMeter.style.width = "0%";
            }
        });
    }, 9000); // Stays for 5s then fades
});
var tl14 = gsap.timeline({
    scrollTrigger: {
        trigger: "#gandu", 
        scroller: "body",
        start: "top 30%", 
        end: "top 10%", 
        scrub: 3,
        markers: true,
        
    
    }
});
tl14.from("#sleep", {
    rotateX: "-180deg",
     ease: "power4.out",
     opacity: 0, 
})
tl14.from("#blankett", {
    rotateX: "-180deg",
     ease: "power4.out",
     opacity: 0, 
})