$(function(){
    // header 영역  
    let baseline = -800;

    let welcome = $("#welcome").offset().top + baseline;
    let aboutme = $("#aboutme").offset().top + baseline;
    let coding = $("#coding").offset().top + baseline;
    let aiDesign = $("#aiDesign").offset().top + baseline;


    
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
        // console.log(target);
    });

    // section 슬라이드
    window.onload = function () {
        var elm = "#main > section";
        $(elm).each(function (index) {
          // 개별적으로 Wheel 이벤트 적용
          $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                try {
                  moveTop = $(elmSelecter).next().offset().top;
                } catch (e) {}
              }
              // 마우스휠을 아래에서 위로
            } else {
              if ($(elmSelecter).prev() != undefined) {
                try {
                  moveTop = $(elmSelecter).prev().offset().top;
                } catch (e) {}
              }
            }
  
            // 화면 이동 0.8초(800)
            $("html,body")
              .stop()
              .animate(
                {
                  scrollTop: moveTop + "px",
                },
                {
                  duration: 500,
                  complete: function () {},
                }
              );
          });
        });
      };
    

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
                trigger: "#coding",
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
            y: "0"
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




