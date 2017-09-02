// elements
const
  title = document.getElementById('title'),
  body = document.querySelector('body'),
  ulContent = document.querySelector('ul'),
  content = document.getElementsByClassName('wrap-animate')[0],
  chap_1 = document.getElementById('chap1'),
  chap_2 = document.getElementById('chap2'),
  chap_3 = document.getElementById('chap3'),
  chap_4 = document.getElementById('chap4'),
  chap_5 = document.getElementById('chap5'),
  gear = document.getElementById('gearSet'),
  gearItem = document.getElementById('gearItem');

// canvas
const
  canvasIntro = document.getElementsByClassName('canvasIntro')[0];

// Timeline
const
  TL = new TimelineLite({
    paused: true
  });

// button group
const
  buttonGroup = document.querySelectorAll('button'),
  play = document.getElementById('playTween'),
  pause = document.getElementById('pauseTween'),
  resume = document.getElementById('ResumeTween'),
  reverse = document.getElementById('reverseTween'),
  fastForward = document.getElementById('speedTween'),
  slowDown = document.getElementById('slowTween'),
  increment = document.getElementById('seekTween'),
  midway = document.getElementById('halfwayTween'),
  restart = document.getElementById('restartTween');

// timeline chain

TL.set(content, {
  autoAlpha: 1
}).from(gear, 1, {
  x: -800,
  ease: Bounce.easeOut,
  onStart: cogStart,
}, '-=0.15').to(gear, 3, {
  y: -560,
  rotation: 360
}, '-=0.15').fromTo(gear, 1, {
  y: -200
},{
  width: 300,
  y: 1000
}, '-=0.15').from(gear, 2, {
  width: 100,
  y: -300,
}, '-=0.15').from(title, 0.5, {
  x: -300,
  autoAlpha: 0
}, '-=0.15').to(canvasIntro, 0.25, {
  x: -325,
  y: -100
}, '-=0.15').from(chap_1, 0.25, {
  x: 100,
  autoAlpha: 0
}, '-=0.15').from(chap_2, 0.25, {
  x: -150,
  autoAlpha: 0
}, '-=0.15').from(chap_3, 0.25, {
  x: 200,
  autoAlpha: 0
}, '-=0.15').from(chap_4, 0.25, {
  x: -250,
  autoAlpha: 0
}, '-=0.15').from(chap_5, 1, {
  x: 300,
  autoAlpha: 0,
  ease: Elastic.easeOut,
  onComplete: translucGear
}, '-=0.15').from(ulContent, 0.5, {
  y: -100,
  autoAlpha: 0
}, '-=0.15').to(gear, 3, {
  y: -500,
  onComplete: cogFinish
}, '-=0.15').staggerFrom(buttonGroup, 0.5, {
  cycle: {
    x: [500, -50],
    scale: [2, 0.5]
  },
  autoAlpha: 0,
  ease: Power1.easeOut
}, 0.5);

// event listeners

play.addEventListener('click', () => {
  TL.play();
});

pause.addEventListener('click', () => {
  TL.pause();
});

resume.addEventListener('click', () => {
  TL.resume();
});

reverse.addEventListener('click', () => {
  TL.reverse();
});

fastForward.addEventListener('click', () => {
  TL.timeScale(3);
});

slowDown.addEventListener('click', () => {
  TL.timeScale(0.25);
});

increment.addEventListener('click', () => {
  TL.seek(1);
});

midway.addEventListener('click', () => {
  TL.progress(0.5);
});

restart.addEventListener('click', () => {
  TL.restart();
});

// loader timeline

const TLDots = new TimelineMax({
  repeat: 2,
  onComplete: loadContent
}),
  dot = document.getElementsByClassName('dot'),
  preLoader = document.getElementById('preLoader');

TLDots.staggerFromTo(dot, 0.3, {
    y: 0,
    autoAlpha: 0
  }, {
    y: 20,
    autoAlpha: 1,
    ease: Back.easeInOut
  }, 0.05).fromTo(preLoader, 0.3, {
    autoAlpha: 1,
    scale: 1.3
  }, {
    autoAlpha: 0,
    scale: 1,
    ease: Power0.easeNone
  }, 0.9
);

function cogStart() {
  console.log('the animation has started!');
}

function cogFinish() {
  console.log('the animation is finished!');
  animate();
  body.style.backgroundColor = 'black';
}

function translucGear() {
  gear.style.opacity = '0.25';
}

function loadContent() {
  const TLDotsOut = new TimelineLite({
    onComplete: contentIn
  });

  TLDotsOut
  .set(dot, {
    backgroundColor: '#2b4d66'
  }).to(preLoader, 0.3, {
    autoAlpha: 1,
    scale: 1.3,
    ease: Power0.easeNone
  }).staggerFromTo(dot, 0.3, {
      y: 0,
      autoAlpha: 0
    }, {
      y: 20,
      autoAlpha: 1,
      ease: Back.easeInOut
    }, 0.05, 0
  ).to(preLoader, 0.3, {
    y: -150,
    autoAlpha: 0,
    ease: Back.easeIn},
    '+=0.3'
  );
}

function contentIn() {
  TL.play();
}

function animate() {

  let timer = 0.0001 * Date.now();

  for (let i = 0, spLength = spheres.length; i < spLength; i++) {
    let sphere = spheres[i];

    sphere.position.x = 10 * Math.cos(timer + i);
    sphere.position.y = 10 * Math.sin(timer + i * 1.1);
  }

  icos.rotation.x += 0.004;
  icos.rotation.y += 0.004;

  icos2.rotation.x += 0.001;
  icos2.rotation.y += 0.001;

  icosAlias.rotation.x += 0.004;
  icosAlias.rotation.y += 0.004;

  icos2Alias.rotation.x += 0.001;
  icos2Alias.rotation.y += 0.001;

  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}
