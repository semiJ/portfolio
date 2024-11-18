$(function(){
    //header 영역
    // let baseline = -200;

    // let welcome = $(".welcome").offset().top + baseline;
    // let aboutme = $(".aboutme").offset().top + baseline;
    // let coding = $(".coding").offset().top + baseline;
    // let design = $(".design").offset().top + baseline;

    // header 영역
    $(window).on("scroll", function(){
        let sc = $(this).scrollTop();

        if(sc >= 100) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
            $("header").stop().animate({"transition":"1s"});
        };
    });

    $("header .mainMenu li").on("click",function(){
        let i = $(this).index();
        let target = $("#main section").eq(i).offset().top;
        
        $("html, body").stop().animate({scrollTop: target}, 1200);
        // console.log(target);
    });

    // subMenu bar 클릭 이벤트
    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
        $("nav .subBack").toggleClass("viewControl");
    });

    //coding

    $(".coding .codingtextBox ol li").on("click", function(){
        i = $(this).index();

        $(".coding .codingtextBox li").removeClass("codingOrderedList");
        $(".coding .codingtextBox li").eq(i).addClass("codingOrderedList");
    });

    gsap.registerPlugin(ScrollTrigger);
    let upBox = document.querySelectorAll(".upBox");
    let tl = gsap.timeline({
        scrollTrigger : {
            trigger: ".coding",
            pin: true,
            scrub: 3,
            start: "top top",
            end: "+=800%",
            markers: false,
        }
    });

    tl.from(upBox, {
        y: "400%",
        duration:"10",
        ease: "none",
        stagger:"5",
        opacity: "0"
    });
    tl.to(upBox, {
        y:"0"
    });


    // aiDesign

    

    // /aiDesign
    

    //footer
    $(window).on("scroll", function(){
        let viewTop = $(this).scrollTop();
        console.log(viewTop); // 스크롤 위치 확인

        if(viewTop >= 100) {
            $(".topBtn").addClass("ftTopbtn");
        } else {
            $(".topBtn").removeClass("ftTopbtn");
        };
    });
})




