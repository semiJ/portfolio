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
    let target = $("#main section").eq(i).offset().top;
    
    $("html, body").stop().animate({scrollTop: target}, 1200);
    // console.log(target);
});


// main 영역
// window.onload = function () {
//   var elm = "#main > section";
//   $(elm).each(function (index) {
//     // 개별적으로 Wheel 이벤트 적용
//     $(this).on("mousewheel DOMMouseScroll", function (e) {
//       e.preventDefault();
//       var delta = 0;
//       if (!event) event = window.event;
//       if (event.wheelDelta) {
//         delta = event.wheelDelta / 120;
//         if (window.opera) delta = -delta;
//       } else if (event.detail) delta = -event.detail / 3;
//       var moveTop = $(window).scrollTop();
//       var elmSelecter = $(elm).eq(index);
//       // 마우스휠을 위에서 아래로
//       if (delta < 0) {
//         if ($(elmSelecter).next() != undefined) {
//           try {
//             moveTop = $(elmSelecter).next().offset().top;
//           } catch (e) {}
//         }
//         // 마우스휠을 아래에서 위로
//       } else {
//         if ($(elmSelecter).prev() != undefined) {
//           try {
//             moveTop = $(elmSelecter).prev().offset().top;
//           } catch (e) {}
//         }
//       }

//       // 화면 이동 0.8초(800)
//       $("html,body")
//         .stop()
//         .animate(
//           {
//             scrollTop: moveTop + "vh",
//           },
//           {
//             duration: 800,
//             complete: function () {},
//           }
//         );
//     });
//   });
// };

// welcome ain
    


// coding 영역
    $(".codingArea ol li").on("click", function(){
        i = $(this).index();

        $(".codingArea ol li").removeClass("codingOrderedList");
        $(".codingArea ol li").eq(i).addClass("codingOrderedList");
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

        $(".inner li").removeClass("codingOrderedList");
        $(".inner li").eq(i).addClass("codingOrderedList");
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