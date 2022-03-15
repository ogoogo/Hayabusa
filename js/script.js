gsap.registerPlugin(MotionPathPlugin);

// The start and end positions in terms of the page scroll
const offsetFromTop = innerHeight * 0.25;
const pathBB = document.querySelector("#vec1").getBoundingClientRect();
const startY = pathBB.top - innerHeight + offsetFromTop;
const finishDistance = startY + pathBB.height - offsetFromTop;

// the animation to use
var tween = gsap.to("#movingHayabusa", {
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
  tween.progress((scrollY - startY) / finishDistance);
  
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

