$(function(){

    gsap.registerPlugin(ScrollTrigger);

    // header 영역  
    let baseline = -900;

    let header = $("header").offset().top + baseline;
    let welcome = $("#welcome").offset().top + baseline;
    let aboutme = $("#aboutme").offset().top + baseline;
    let coding = $("#coding").offset().top + baseline;
    let aiDesign = $("#aiDesign").offset().top + baseline;
    let ft = $("footer").offset().top + baseline;


    
    $(window).on("scroll", function(){
        let sc = $(this).scrollTop();

        if(sc >= aboutme) {
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

    $("header .subMenu li").on("click",function(){
        let i = $(this).index();
        let target = $("#main section").eq(i).offset().top;
        
        $("html, body").stop().animate({scrollTop: target}, 1200);
    });

    //welcome

    let viewBox = document.querySelector("#welcome .welcomebox");
    let txt = document.querySelector("#welcome .welcomeText");
    let subtxt = document.querySelector("#welcome .welcomeMy");
    let scroll = document.querySelector("#welcome .scroll");

    let te = gsap.timeline({
        scrollTrigger: {
            trigger: "#welcome",
            pin: true,
            scrub: 3,
            start: "top top",
            end: "bottom top",
            markers: false,
        },
    });
    
    te.to(scroll, {
        opacity: "0",
        duration: "30",
    }); 

    te.to(viewBox, {
        scale: "0.3",
        opacity: 0.8,
        translateY: "-200%",
        duration: "80",
    });
    
    te.to(txt, { 
        opacity: "1",
        left: "50%",
        duration: "50",
    });

    te.to(subtxt, { 
        opacity: "1",
        right: "50%",
        duration: "20",
    });

    $(window).on("scroll", function(){
        let wel = $(this).scrollTop();
        // console.log(wel); // 스크롤 위치 확인

        if(wel < coding && wel >= aiDesign) {
            $("#welcome .welcomeText").addClass("topslide");
            $("#welcome .welcomeMy").addClass("bottomslide");
        } else {
            $("#welcome .welcomeText").removeClass("topslide");
            $("#welcome .welcomeMy").removeClass("bottomslide");
        };
    });
    

    // /welcome


    // aboutme
    $(window).on("scroll", function(){
        let abou = $(this).scrollTop();
        // console.log(abou); // 스크롤 위치 확인

        if(abou >= aboutme) {
            $("#aboutme .info").addClass("infoview");
            $("#aboutme .infoLeft").addClass("aniLeft");
            $("#aboutme .infoRight").addClass("aniRight");
        } else {
            $("#aboutme .info").removeClass("infoview");
            $("#aboutme .infoLeft").removeClass("aniLeft");
            $("#aboutme .infoRight").removeClass("aniRight");
        };
    });

    //coding

        const upBox = document.querySelectorAll(".upBox");
        const resultLink = document.querySelectorAll(".resultLink");

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger: "#coding",
                pin: true,
                scrub: 3,
                start: "top top",
                end: "+=600%",
                markers: false,
                onUpdate: (self) => {
                    let index = Math.floor(self.progress * upBox.length - 1);
                    resultLink.forEach((t) => t.classList.remove("resultView"));
                    if (resultLink[index]){
                        resultLink[index].classList.add("resultView");
                    }
                }
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

    // aiDesign

    let moveCard = gsap.utils.toArray("#aiDesign .moveCard li");
    let moveCardmove01 = gsap.utils.toArray("#aiDesign .moveCard li.move01");
    let moveCardmove02 = gsap.utils.toArray("#aiDesign .moveCard li.move02");
    let moveCardmove03 = gsap.utils.toArray("#aiDesign .moveCard li.move03");
    
    gsap.to(moveCard,{
        xPercent: -100 * (moveCard.length - 6) ,
        scrollTrigger:{
            trigger: "#aiDesign",
            pin: true,
            scrub: 4,
            start : "center center",
            end :"200%",
            markers :false,
        },
    });

    gsap.to(moveCardmove01,{
        y:50, 
        rotation:50,
        scrollTrigger:{
            trigger:"#aiDesign",
            scrub:2,
            end :"200%",
            markers :false,
        },
    });

    gsap.to(moveCardmove02,{
        y:50, 
        rotation:-20,
        scrollTrigger:{
            trigger:"#aiDesign",
            scrub:2,
            end :"150%",
            markers :false,
        },
    });

    gsap.to(moveCardmove03,{
        y:50, 
        rotation:70,
        scrollTrigger:{
            trigger:"#aiDesign",
            scrub:2,
            end :"150%",
            markers :false,
        },
    });


    $("#aiDesign .moveCard .aibox").on("click", function() {
        let i = $(this).index();
        $("#aiDesign .viewCard li").removeClass("designop");
        $("#aiDesign .viewCard li").eq(i).addClass("designop");

        $("#aiDesign .designWrap").removeClass("dgview");
        $("#aiDesign .designWrap").addClass("dgview");
    });

    $("#aiDesign .viewCard .xmark").on("click", function() {
        $("#aiDesign .viewCard li").removeClass("designop");
        $("#aiDesign .designWrap").removeClass("dgview");
    });

    $(window).on("scroll", function(){
        let dgsc = $(this).scrollTop();

        if(dgsc < footer && dgsc >= coding) {
            $("#aiDesign .viewCard li").eq(i).addClass("designop");
            $("#aiDesign .designWrap").addClass("dgview");
        } else {
            $("#aiDesign .viewCard li").removeClass("designop");
            $("#aiDesign .designWrap").removeClass("dgview");
        };
    });


    // /aiDesign
    

    //footer
    $(window).on("scroll", function(){
        let viewTop = $(this).scrollTop();
        // console.log(viewTop);

        if(viewTop >= coding) {
            $(".topBtn").addClass("ftTopbtn");
        } else {
            $(".topBtn").removeClass("ftTopbtn");
        };
    });
})




