
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('granular'),
  antialias: true,
});

let spheres = [];

renderer.setSize(150, 150);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const LIGHT = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(LIGHT);

const LIGHT_REF = new THREE.PointLight(0xffffff, 0.95);
scene.add(LIGHT_REF);

const material = new THREE.MeshLambertMaterial({
  color: 0xff0000,
  wireframe: true
});

const material2 = new THREE.MeshPhongMaterial({
  color: 0xEB650f,
  transparent: true,
  opacity: 0.9
});

const material3 = new THREE.MeshLambertMaterial({
  color: 0x0febcb,
  wireframe: true
});

const material4 = new THREE.MeshLambertMaterial({
  color: 0xc3eb0f,
  transparent: true,
  opacity: 0.4
});

const material5 = new THREE.MeshLambertMaterial({
  color: 0x0febcb,
  wireframe: true
  // transparent: true,
  // opacity: 0.2
});

const material6 = new THREE.MeshLambertMaterial({
  color: 0x0DFCE6,
  wireframe: true
});

const material7 = new THREE.MeshLambertMaterial({
  color: 0x0BFC8D,
  // wireframe: true,
  transparent: true,
  opacity: 0.8,
  emissive: 0xff0000,
  emissiveIntensity: 0.9
});

const material8 = new THREE.MeshLambertMaterial({
  color: 0x0DFCE6,
  transparent: true,
  opacity: 0.3,
  emissive: 0xff0000,
  emissiveIntensity: 0.9
});

// go over the docs!
const geometry = new THREE.TorusGeometry(37, 10, 16, 100);
const geometry2 = new THREE.IcosahedronGeometry(10, 5);
const geometry3 = new THREE.IcosahedronGeometry(50, 2);
const geometry4 = new THREE.IcosahedronGeometry(20, 0);
const geometry5 = new THREE.IcosahedronGeometry(10, 0);
const geometry6 = new THREE.IcosahedronGeometry(55, 4);
const geometry7 = new THREE.IcosahedronGeometry(12, 0);
const geometry8 = new THREE.IcosahedronGeometry(6, 0);

// const donut = new THREE.Mesh(geometry, material5);
const icos = new THREE.Mesh(geometry2, material2);
const icos2 = new THREE.Mesh(geometry3, material6);
const icos3 = new THREE.Mesh(geometry6, material7);

const icosAlias = new THREE.Mesh(geometry2, material3);
const icos2Alias = new THREE.Mesh(geometry4, material4);

const molecule = new THREE.Mesh(geometry4, material);
const moleculeAlias = new THREE.Mesh(geometry8, material);
const moleculeGlow = new THREE.Mesh(geometry7, material8);

icos.position.z = -200;
icos.position.x = 0;
icos.position.z = -15;

icos2.position.z = -200;
icos2.position.x = 0;
icos2.position.z = -15;


icos3.position.z = -200;
icos3.position.x = 0;
icos3.position.z = -15;


molecule.position.z = -200;
molecule.position.x = 0;
molecule.position.z = -15;


moleculeAlias.position.z = -200;
moleculeAlias.position.x = 150;

moleculeGlow.position.z = -200;
moleculeGlow.position.x = 150;

icosAlias.position.z = -200;
icosAlias.position.x = 90;

icos2Alias.position.z = -200;
icos2Alias.position.x = 90;

scene.add(icos);
scene.add(icos2);
// scene.add(icos3);

// scene.add(donut);

// scene.add(molecule);
// scene.add(moleculeAlias);
// scene.add(moleculeGlow);

// scene.add(icosAlias);
// scene.add(icos2Alias);
const sphere = new THREE.SphereBufferGeometry(0.06, 32, 16);


for (let i = 0; i < 400; i++) {

  let randomColor = Math.random() * 0xffffff;//`#${Math.floor(Math.random()*16777215).toString(16)}`;

  let sphereGlow = new THREE.MeshLambertMaterial({
    color: randomColor,
    transparent: true,
    opacity: 0.5,
    emissive: 0xff0000,
    emissiveIntensity: 0.5
  });
  let mesh = new THREE.Mesh(sphere, sphereGlow);


  	// mesh.position.x = Math.random() * 10000 - 5000;
  	// mesh.position.y = Math.random() * 10000 - 5000;
  	// mesh.position.z = Math.random() * 10000 - 5000;

  	mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 10;
  	scene.add( mesh );
    mesh.position.y = Math.random() * 1;
    mesh.position.z = Math.random() * 1;
    // mesh.scale.x = mesh.scale.y = Math.random() * 3 + 1;
    mesh.scale.z = 10;
    // scene.add(mesh);
    spheres.push(mesh);
}

camera.position.z = 30;
