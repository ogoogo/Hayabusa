gsap.registerPlugin(MotionPathPlugin);

// The start and end positions in terms of the page scroll
const offsetFromTop1 = innerHeight * 0.25;
const pathBB1 = document.querySelector("#vec1").getBoundingClientRect();
const pathBB2 = document.querySelector("#vec2").getBoundingClientRect();
const pathBB3 = document.querySelector("#vec3").getBoundingClientRect();
const pathBB4 = document.querySelector("#vec4").getBoundingClientRect();
const pathBB5 = document.querySelector("#vec5").getBoundingClientRect();
const pathBB6 = document.querySelector("#vec6").getBoundingClientRect();
const pathBB7 = document.querySelector("#vec7").getBoundingClientRect();
const pathBB8 = document.querySelector("#vec8").getBoundingClientRect();
const pathBB9 = document.querySelector("#vec9").getBoundingClientRect();
const startY1 = pathBB1.top - innerHeight + offsetFromTop1;
const startY2 = pathBB2.top - innerHeight + offsetFromTop1;
const startY3 = pathBB3.top - innerHeight + offsetFromTop1;
const startY4 = pathBB4.top - innerHeight + offsetFromTop1;
const startY5 = pathBB5.top - innerHeight + offsetFromTop1;
const startY6 = pathBB6.top - innerHeight + offsetFromTop1;
const startY7 = pathBB7.top - innerHeight + offsetFromTop1;
const startY8 = pathBB8.top - innerHeight + offsetFromTop1;
const startY9 = pathBB9.top - innerHeight + offsetFromTop1;
const finishDistance1 = startY1 + pathBB1.height - offsetFromTop1;
const finishDistance2 = startY2 + pathBB2.height - offsetFromTop1;
const finishDistance3 = startY3 + pathBB3.height - offsetFromTop1;
const finishDistance4 = startY4 + pathBB4.height - offsetFromTop1;
const finishDistance5 = startY5 + pathBB5.height - offsetFromTop1;
const finishDistance6 = startY6 + pathBB6.height - offsetFromTop1;
const finishDistance7 = startY7 + pathBB7.height - offsetFromTop1;
const finishDistance8 = startY8 + pathBB8.height - offsetFromTop1;
const finishDistance9 = startY9 + pathBB9.height - offsetFromTop1;

// the animation to use
var tween1 = gsap.to("#haya1", {
  duration: 5, 
  paused: true,
  ease: "none",
  motionPath: {
    path: "#vec1",
    align: "#vec1",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }    
}).pause(0.001);

var tween2 = gsap.to("#haya2", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec2",
      align: "#vec2",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

  var tween3 = gsap.to("#haya3", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec3",
      align: "#vec3",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

  var tween4 = gsap.to("#haya4", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec4",
      align: "#vec4",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

  var tween5 = gsap.to("#haya5", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec5",
      align: "#vec5",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

  var tween6 = gsap.to("#haya6", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec6",
      align: "#vec6",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

  var tween7 = gsap.to("#haya7", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec7",
      align: "#vec7",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

  var tween8 = gsap.to("#haya8", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec8",
      align: "#vec8",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

  var tween9 = gsap.to("#haya9", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#vec9",
      align: "#vec9",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
  }).pause(0.001);

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
  tween3.progress((scrollY - startY3) / finishDistance3);
  tween4.progress((scrollY - startY4) / finishDistance4);
  tween5.progress((scrollY - startY5) / finishDistance5);
  tween6.progress((scrollY - startY6) / finishDistance6);
  tween7.progress((scrollY - startY7) / finishDistance7);
  tween8.progress((scrollY - startY8) / finishDistance8);
  tween9.progress((scrollY - startY9) / finishDistance9);
  
  // Let the scroll event fire again
  requestId = null;
}

$(function () {
    $('.burger-btn').on('click',function(){
        $('.burger-btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('slide-in'); // 書き換え
        $('body').toggleClass('noscroll');
      });
  });

particlesJS("particles-js", {"particles":{"number":{"value":459,"density":{"enable":true,"value_area":710.2328774690454}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":0.3996003996003996,"opacity_min":0,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":true,"speed":9.74437262480918,"size_min":1.6240621041348633,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":721.5354273894853,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":200,"size":0,"duration":1.380452788514634,"opacity":0.032481242082697266,"speed":3},"repulse":{"distance":211.12807353753223,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

