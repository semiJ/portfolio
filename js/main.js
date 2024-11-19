$(function(){
    // header 영역  
    let baseline = -600;

    let welcome = $("#welcome").offset().top + baseline;
    let aboutme = $("#aboutme").offset().top + baseline;
    let coding = $("#coding").offset().top + baseline;
    let aiDesign = $("#aiDesign").offset().top + baseline;
    let ft = $("#footer").offset().top + baseline;


    
    $(window).on("scroll", function(){
        let sc = $(this).scrollTop();

        if(sc >= welcome) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
            $("nav .menuBar").removeClass("active");
            $("nav .subBack").removeClass("viewControl");
            $("header").stop().animate({"transition":"1s"});
        };
    });

    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
        $("nav .subBack").toggleClass("viewControl");
        $("header").addClass("on");
    });

    $("header .mainMenu li").on("click",function(){
        let i = $(this).index();
        let target = $("#main section").eq(i).offset().top;
        
        $("html, body").stop().animate({scrollTop: target}, 1200);
    });

    // aboutme
    $(window).on("scroll", function(){
        let abou = $(this).scrollTop();
        // console.log(abou); // 스크롤 위치 확인

        if(abou >= aboutme && abou < coding) {
            $(".info").addClass("infoview");
            $(".infoleft").addClass("moveLeft");
            $(".inforight").addClass("moverRight");
        } else {
            $(".info").removeClass("infoview");
            $(".infoleft").removeClass("moveLeft");
            $(".inforight").removeClass("moverRight");
        };
    });
    //coding

    gsap.registerPlugin(ScrollTrigger);

        const upBox = document.querySelectorAll(".upBox");

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger: "#coding",
                pin: true,
                scrub: 3,
                start: "top top",
                end: "+=600%",
                markers: false,
            }
        });

        tl.from(upBox, {
            y: "200%",
            duration:"10",
            ease: "none",
            stagger:"5",
            opacity: "0",
        });

        tl.to(upBox, {
            y: "0"
        });

        
    $("#coding .codingtextBox ol li").on("click", function(){
        let i = $(this).index();
        console.log(i);

        $("#coding .codingtextBox li").removeClass("codingOrderedList");
        $("#coding .codingtextBox li").eq(i).addClass("codingOrderedList");

    });

    // aiDesign
    gsap.registerPlugin(ScrollTrigger);

    const scr = gsap.timeline({
        scrollTrigger : {
            trigger: "#aiDesign",
            pin: true,
            scrub: 3,
            start: "top top",
            end: "+=800%",
            markers: true,
        }
    });

    const upImg = document.querySelectorAll(".slide_list .upImg");

    upImg.forEach(function (upImg, index) {
    
        scr.from(upImg, {
            y: "200%",
            duration:"10",
            ease: "none",
            stagger:"5",
            opacity: "0",
         });

         scr.to(upImg, 1, {
            y: "0",
            delay: (index + 1) * 0.7,
            opacity: 1,
            });

        });

    // /aiDesign
    

    //footer
    $(window).on("scroll", function(){
        let viewTop = $(this).scrollTop();
        // console.log(viewTop);

        if(viewTop >= 100) {
            $(".topBtn").addClass("ftTopbtn");
        } else {
            $(".topBtn").removeClass("ftTopbtn");
        };
    });
})




