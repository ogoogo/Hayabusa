gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

// gasp.to(".movingHayabusa",{
//     autoAlpha:1,
//     scrollTrigger:{
//         trigger:".rocket",
//         start:"top center",
//     }
// });

if (window.matchMedia('(max-width: 480px)').matches) {
    //スマホ処理
    gsap.to(".light1",{
        autoAlpha:1,
        duration:3,
        scrollTrigger:{
            trigger:".pol8",
            start:"bottom top",  
        }
    });
    
    gsap.to(".koushinFukkatsu",{
        autoAlpha:1,
        duration:3,
        delay:.5,
        scrollTrigger:{
            trigger:".pol8",
            start:"bottom top",  
        }
    });
    gsap.to(".light2",{
        y:320,
        duration:5,
        
        scrollTrigger:{
            trigger:".light2",
            start:"center 25%",  
        }
    });
    gsap.to("#haya1",{
        y:1630,
        ease:"none",
        
        
        scrollTrigger:{
            trigger:"#haya1",
            start:"top center",  
            end:"+=1630",
            scrub:true
        }
    });
    gsap.to("#haya2",{
        y:510,
        ease:"none",
        
        
        scrollTrigger:{
            trigger:"#haya2",
            start:"top center",  
            end:"+=510",
            scrub:true
        }
    });
    gsap.to(".rocket",{
        y:20,
        scrollTrigger:{
            trigger:".pol1",
            start:"top 75%",
            end:"bottom top",
            
            scrub:true
            
        }
    });
    gsap.to(".itokawa",{
        y:20,
        scrollTrigger:{
            trigger:".pol2",
            start:"top 75%",
            end:"bottom top",
            
            scrub:true
            
        }
    });

    gsap.to(".minerva",{
        y:20,
        scrollTrigger:{
            trigger:".pol4",
            start:"top 75%",
            end:"bottom top",
            
            scrub:true,
           
        }
    });

    gsap.to(".landing",{
        y:20,
        scrollTrigger:{
            trigger:".pol5",
            start:"top 50%",
            end:"bottom top",
            
            scrub:true
            
        }
    });
} else if (window.matchMedia('(min-width:480px)').matches) {
    //PC処理
    // The start and end positions in terms of the page scroll
    const offsetFromTop1 = innerHeight * 0.25;
    const offsetFromTop2 = innerHeight * 0.5;
    const pathBB1 = document.querySelector("#wholevec1").getBoundingClientRect();
    const pathBB2 = document.querySelector("#wholevec2").getBoundingClientRect();
    // const pathBB3 = document.querySelector("#vec3").getBoundingClientRect();
    // const pathBB4 = document.querySelector("#vec4").getBoundingClientRect();
    // const pathBB5 = document.querySelector("#vec5").getBoundingClientRect();
    // const pathBB6 = document.querySelector("#vec6").getBoundingClientRect();
    // const pathBB7 = document.querySelector("#vec7").getBoundingClientRect();
    // const pathBB8 = document.querySelector("#vec8").getBoundingClientRect();
    // const pathBB9 = document.querySelector("#vec9").getBoundingClientRect();
    const startY1 = pathBB1.top - innerHeight + offsetFromTop1;
    const startY2 = pathBB2.top - innerHeight + offsetFromTop2;
    // const startY3 = pathBB3.top - innerHeight + offsetFromTop1;
    // const startY4 = pathBB4.top - innerHeight + offsetFromTop1;
    // const startY5 = pathBB5.top - innerHeight + offsetFromTop1;
    // const startY6 = pathBB6.top - innerHeight + offsetFromTop1;
    // const startY7 = pathBB7.top - innerHeight + offsetFromTop1;
    // const startY8 = pathBB8.top - innerHeight + offsetFromTop1;
    // const startY9 = pathBB9.top - innerHeight + offsetFromTop1;
    const finishDistance1 = pathBB1.height + offsetFromTop1;
    const finishDistance2 = pathBB2.height;
    // const finishDistance3 =pathBB3.height;
    // const finishDistance4 = pathBB4.height ;
    // const finishDistance5 =  pathBB5.height;
    // const finishDistance6 = pathBB6.height;
    // const finishDistance7 = pathBB7.height;
    // const finishDistance8 = pathBB8.height;
    // const finishDistance9 = pathBB9.height;

    // the animation to use
    var tween1 = gsap.to("#haya1", {
    duration: 1, 
    paused: true,
    ease:CustomEase.create("custom", "M0,0,C0.056,0.02,0.044,0.124,0.128,0.124,0.204,0.124,0.217,0.3,0.3,0.3,0.398,0.3,0.315,0.48,0.418,0.48,0.506,0.48,0.524,0.604,0.61,0.604,0.68,0.604,0.618,0.7,0.69,0.7,0.777,0.7,0.813,0.876,0.9,0.876,0.966,0.876,0.93,0.97,1,1"),
    motionPath: {
        path: "#wholevec1",
        align: "#wholevec1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }    
    }).pause(0.001);

    var tween2 = gsap.to("#haya2", {
        duration: 5, 
        paused: true,
        ease:CustomEase.create("custom", "M0,0,C0.242,0.01,0.286,0.415,0.474,0.422,0.762,0.432,0.767,1,1,1"),
        motionPath: {
        path: "#wholevec2",
        align: "#wholevec2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
        }    
    }).pause(0.001);

    //   var tween3 = gsap.to("#haya3", {
    //     duration: 5, 
    //     paused: true,
    //     // ease: "none",
    //     motionPath: {
    //       path: "#vec3",
    //       align: "#vec3",
    //       autoRotate: true,
    //       alignOrigin: [0.5, 0.5]
    //     }    
    //   }).pause(0.001);

    //   var tween4 = gsap.to("#haya4", {
    //     duration: 5, 
    //     paused: true,
    //     // ease: "none",
    //     motionPath: {
    //       path: "#vec4",
    //       align: "#vec4",
    //       autoRotate: true,
    //       alignOrigin: [0.5, 0.5]
    //     }    
    //   }).pause(0.001);

    //   var tween5 = gsap.to("#haya5", {
    //     duration: 5, 
    //     paused: true,
    //     // ease: "none",
    //     motionPath: {
    //       path: "#vec5",
    //       align: "#vec5",
    //       autoRotate: true,
    //       alignOrigin: [0.5, 0.5]
    //     }    
    //   }).pause(0.001);

    //   var tween6 = gsap.to("#haya6", {
    //     duration: 5, 
    //     paused: true,
    //     // ease: "none",
    //     motionPath: {
    //       path: "#vec6",
    //       align: "#vec6",
    //       autoRotate: true,
    //       alignOrigin: [0.5, 0.5]
    //     }    
    //   }).pause(0.001);

    //   var tween7 = gsap.to("#haya7", {
    //     duration: 5, 
    //     paused: true,
    //     // ease: "none",
    //     motionPath: {
    //       path: "#vec7",
    //       align: "#vec7",
    //       autoRotate: true,
    //       alignOrigin: [0.5, 0.5]
    //     }    
    //   }).pause(0.001);

    //   var tween8 = gsap.to("#haya8", {
    //     duration: 5, 
    //     paused: true,
    //     // ease: "none",
    //     motionPath: {
    //       path: "#vec8",
    //       align: "#vec8",
    //       autoRotate: true,
    //       alignOrigin: [0.5, 0.5]
    //     }    
    //   }).pause(0.001);

    //   var tween9 = gsap.to("#haya9", {
    //     duration: 5, 
    //     paused: true,
    //     // ease: "none",
    //     motionPath: {
    //       path: "#vec9",
    //       align: "#vec9",
    //       autoRotate: true,
    //       alignOrigin: [0.5, 0.5]
    //     }    
    //   }).pause(0.001);

    // Listen to the scroll event
    document.addEventListener("scroll", function() {
    // Prevent the update from happening too often (throttle the scroll event)
    if (!requestId) {
        requestId = requestAnimationFrame(update);
    }
    });

    update();

    function update() {
    // Update our animation
    tween1.progress((scrollY - startY1) / finishDistance1);
    tween2.progress((scrollY - startY2) / finishDistance2);
    //   tween3.progress((scrollY - startY3) / finishDistance3);
    //   tween4.progress((scrollY - startY4) / finishDistance4);
    //   tween5.progress((scrollY - startY5) / finishDistance5);
    //   tween6.progress((scrollY - startY6) / finishDistance6);
    //   tween7.progress((scrollY - startY7) / finishDistance7);
    //   tween8.progress((scrollY - startY8) / finishDistance8);
    //   tween9.progress((scrollY - startY9) / finishDistance9);
    
    // Let the scroll event fire again
    requestId = null;
    }



  

    gsap.to(".rocket",{
        y:50,
        scrollTrigger:{
            trigger:".pol1",
            start:"top 75%",
            end:"bottom top",
            
            scrub:true
            
        }
    });
    gsap.to(".itokawa",{
        y:50,
        scrollTrigger:{
            trigger:".pol2",
            start:"top 75%",
            end:"bottom top",
            
            scrub:true
            
        }
    });

    gsap.to(".minerva",{
        y:50,
        scrollTrigger:{
            trigger:".pol4",
            start:"top 75%",
            end:"bottom top",
            
            scrub:true
            
        }
    });
    gsap.to(".landing",{
        y:50,
        scrollTrigger:{
            trigger:".pol5",
            start:"top 50%",
            end:"bottom top",
         
            
            scrub:true
            
        }
    });

    gsap.to(".light1",{
        autoAlpha:1,
        duration:3,
        scrollTrigger:{
            trigger:".pol7",
            start:"bottom top",  
        }
    });

    gsap.to(".koushinFukkatsu",{
        autoAlpha:1,
        duration:3,
        delay:.5,
        scrollTrigger:{
            trigger:".pol7",
            start:"bottom top",  
        }
    });
    gsap.to(".light2",{
        y:759,
        duration:5,
        
            scrollTrigger:{
            trigger:".light2",
            start:"center 25%",  
        }
    });

}

gsap.to(".hayabusaTop",{
    rotation:360,
    duration:7,
    ease:"none",
    repeat:-1,
    scrollTrigger:{
        trigger:".hayabusaTop",
        start:"center 75%",
        end:"center 25%"

    }
    
});

gsap.to('.ion1', { 
    autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
    scrollTrigger: {
      trigger: '.ion1',
      start: 'top center'
    }
  });

  gsap.to('.ion2', { 
    autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
    scrollTrigger: {
      trigger: '.ion2',
      start: 'top center'
    }
  });

  gsap.to('.ion3', { 
    autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
    scrollTrigger: {
      trigger: '.ion3',
      start: 'top center'
    }
  });

  gsap.to('.ion4', { 
    autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
    scrollTrigger: {
      trigger: '.ion4',
      start: 'top center'
    }
  });


//   var rellax = new Rellax('.rellax',{
//       speed:-2,
//       wrapper:".timeline",
//       relativeToWrapper:"true"
//   });

var bar = new ProgressBar.Line(loading_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1000,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定	
		style: {
			position:'absolute',
			left:'50%',
			top:'50%',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-family':'sans-serif',
			'font-size':'1.5rem',
			color:'#003149',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画
	$("#loading").delay(500).fadeOut(800);//アニメーションが終わったら#loadingをフェードアウト
});  

$(function () {
    $('.bodyButton1').nextAll().hide();
    $('.bodyButton1').click(function () {
        if ($(this).nextAll().is(':hidden')) {
            $(this).nextAll().slideDown();
            $(this).text('-　サンプル採取装置');
            $(".sampleLight").css("opacity",1);
        } else {
            $(this).nextAll().slideUp();
            $(this).text('+　サンプル採取装置');
            $(".sampleLight").css("opacity",0);
        }
    });
});
$(function () {
    $('.bodyButton2').nextAll().hide();
    $('.bodyButton2').click(function () {
        if ($(this).nextAll().is(':hidden')) {
            $(this).nextAll().slideDown();
            $(this).text('-　再突入カプセル');
            $(".capsuleLight").css("opacity",1);
        } else {
            $(this).nextAll().slideUp();
            $(this).text('+　再突入カプセル');
            $(".capsuleLight").css("opacity",0);
        }
    });
});
$(function () {
    $('.bodyButton3').nextAll().hide();
    $('.bodyButton3').click(function () {
        if ($(this).nextAll().is(':hidden')) {
            $(this).nextAll().slideDown();
            $(this).text('-　探査ローバー　ミネルバ');
            $(".minervaLight").css("opacity",1);
        } else {
            $(this).nextAll().slideUp();
            $(this).text('+　探査ローバー　ミネルバ');
            $(".minervaLight").css("opacity",0);
        }
    });
});
$(function () {
    $('.bodyButton4').nextAll().hide();
    $('.bodyButton4').click(function () {
        if ($(this).nextAll().is(':hidden')) {
            $(this).nextAll().slideDown();
            $(this).text('-　イオンエンジン');
            $(".ionLight").css("opacity",1);
        } else {
            $(this).nextAll().slideUp();
            $(this).text('+　イオンエンジン');
            $(".ionLight").css("opacity",0);
        }
    });
});
$(function () {
    $('.bodyButton5').nextAll().hide();
    $('.bodyButton5').click(function () {
        if ($(this).nextAll().is(':hidden')) {
            $(this).nextAll().slideDown();
            $(this).text('-　太陽電池パドル');
            $(".solarLight1").css("opacity",1);
            $(".solarLight2").css("opacity",1);
        } else {
            $(this).nextAll().slideUp();
            $(this).text('+　太陽電池パドル');
            $(".solarLight1").css("opacity",0);
            $(".solarLight2").css("opacity",0);
        }
    });
});
 

$(function () {
    $('.burger-btn').on('click',function(){
        $('.burger-btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('slide-in'); // 書き換え
        $('body').toggleClass('noscroll');
      });

    $(".hamButton").on("click",function(){
        $('.burger-btn').removeClass('close');
        $('.nav-wrapper').removeClass('slide-in'); // 書き換え
        $('body').removeClass('noscroll');
    });
  });

particlesJS("particles-js", {"particles":{"number":{"value":459,"density":{"enable":true,"value_area":710.2328774690454}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":0.3996003996003996,"opacity_min":0,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":true,"speed":9.74437262480918,"size_min":1.6240621041348633,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":721.5354273894853,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":200,"size":0,"duration":1.380452788514634,"opacity":0.032481242082697266,"speed":3},"repulse":{"distance":211.12807353753223,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

