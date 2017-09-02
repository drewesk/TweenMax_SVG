const title = document.getElementById('title'),
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

const canvasIntro = document.getElementsByClassName('canvasIntro')[0];

const TL = new TimelineLite();

TL.from(gear, 1, {
  x: -800,
  ease: Bounce.easeOut,
  onStart: cogStart,
}).to(gear, 3, {
  y: -560,
  rotation: 360
}).fromTo(gear, 1, {
  y: -200
},{
  width: 300,
  y: 1000
}).from(gear, 2, {
  width: 100,
  y: -300,
}).from(title, 0.5, {
  x: -300,
  autoAlpha: 0
}).to(canvasIntro, 0.25, {
  x: -325,
  y: -100
}).from(chap_1, 0.25, {
  x: 100,
  autoAlpha: 0
}).from(chap_2, 0.25, {
  x: -150,
  autoAlpha: 0
}).from(chap_3, 0.25, {
  x: 200,
  autoAlpha: 0
}).from(chap_4, 0.25, {
  x: -250,
  autoAlpha: 0
}).from(chap_5, 1, {
  x: 300,
  autoAlpha: 0,
  ease: Elastic.easeOut,
  onComplete: translucGear
}).from(ulContent, 0.5, {
  y: -100,
  autoAlpha: 0
}).to(gear, 3, {
  y: -600,
  onComplete: cogFinish
});

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
