$(function(){
    let baseline = -200;

    let welcome = $(".welcome").offset().top + baseline;
    let aboutme = $(".aboutme").offset().top + baseline;
    let bi = $(".bi").offset().top + baseline;
    let coding = $(".coding").offset().top + baseline;
    let design = $(".design").offset().top + baseline;

// header 영역
$(window).on("scroll", function(){
    let sc = $(this).scrollTop();
    // console.log(sc);

    if(sc >= 100) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
        $("header").stop().animate({"transition":"1s"});
    };
});

$("header li").on("click",function(){
    let i = $(this).index();
    let target = $("main section").eq(i).offset().top;
    
    $("html, body").stop().animate({scrollTop: target}, 1200);
    // console.log(target);
});


// main 영역
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll(".upSection");
    let scTl = gsap.timeline({
        scrollTrigger : {
            trigger: "#main",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=800%",
            markers: true,
        }
    });

scTl.from(sections, {
    Y: "400%",
    duration:"10",
    ease: "none",
    stagger:"3",
    opacity: "1"
});
scTl.to(sections, {
    Y:"0"
});

// welcome ain
    


// coding 영역
    $(".codingArea ol li").on("click", function(){
        i = $(this).index();

        $(".codingDetail .codingDetail li").removeClass("codingative");
        $(".codingDetail .codingDetail li").eq(i).addClass("codingative");
    });


    $(".codingArea ol li").on("click", function(){
        i = $(this).index();

        $(".codingArea li").removeClass("codingOrderedList");
        $(".codingArea li").eq(i).addClass("codingOrderedList");
    });

    gsap.registerPlugin(ScrollTrigger);
    let codingBox = document.querySelectorAll(".codingBox");
    let cB = gsap.timeline({
        scrollTrigger : {
            trigger: ".coding",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=800%",
            markers: false,
        }
    });

    cB.from(codingBox, {
        X: "400%",
        duration:"10",
        ease: "none",
        stagger:"5",
        opacity: "0"
    });
    cB.to(codingBox, {
        X:"0"
    });

// Design
    $(".inner ol li").on("click", function(){
        i = $(this).index();

        $(".inner .textBox li").removeClass("codingative");
        $(".inner .textBox li").eq(i).addClass("codingative");
    });


    $(".inner ol li").on("click", function(){
        i = $(this).index();

        $(".inner li").removeClass("codingOrderedList");
        $(".inner li").eq(i).addClass("codingOrderedList");
    });

    $(".inner ol li").on("click", function(){
        i = $(this).index();

        $(".imgBox li").removeClass("designView");
        $(".imgBox li").eq(i).addClass("designView");
    });

    gsap.registerPlugin(ScrollTrigger);
    let upBox = document.querySelectorAll(".upBox");
    let tl = gsap.timeline({
        scrollTrigger : {
            trigger: ".design",
            pin: true,
            scrub: 1,
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