const title = document.getElementById('title');
const content = document.getElementsByClassName('wrap-animate')[0];
const link = document.getElementById('googleMax');
const chap_1 = document.getElementById('chap1');
const chap_2 = document.getElementById('chap2');
const chap_3 = document.getElementById('chap3');
const chap_4 = document.getElementById('chap4');
const chap_5 = document.getElementById('chap5');
const gear = document.getElementById('gearSet');
const gearItem = document.getElementById('gearItem');
const image = document.getElementById('chessOct');

const TL = new TimelineLite();

TL.from(gear, 1, {
  x: -800,
  ease: Bounce.easeOut,
  onStart: cogStart
}).from(title, 1, {
  x: 300,
  autoAlpha: 0
}).from(chap_1, 1, {
  x: 100,
  autoAlpha: 0
}).from(chap_2, 1, {
  x: 150,
  autoAlpha:0
}).from(chap_3, 1, {
  x: 200,
  autoAlpha: 0
}).from(chap_4, 1, {
  x: 250,
  autoAlpha: 0
}).from(chap_5, 1, {
  x: 300,
  autoAlpha: 0
}).from(gear, 1, {
  width: 100,
  y: -300,
  onComplete: cogFinish
});

function cogStart() {
  console.log('the animation has started!');
}

function cogFinish() {
  console.log('the animation is finished!');
  content.style.display = 'none';
  relay();
}

function relay() {
  window.requestAnimationFrame(relay);
    resume();
}
