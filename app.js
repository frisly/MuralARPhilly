"use strict";

const  renderer = new THREE.WebGLRenderer({canvas: document.querySelector("canvas"), alpha: true});

const  camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
camera.position.z = 400;

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(150, 150, 150);
const material = new THREE.MeshPhongMaterial({
  color: 0xFFfffff,
  specular: 0xffffff,
  shininess: 0,
  shading: THREE.SmoothShading
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light1 = new THREE.PointLight(0xff80C0, 10, 0);
light1.position.set(200, 100, 300);
scene.add(light1);

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width ||canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // set render target sizes here
  }
}

function animate(time) {
  time *= 0.00021;  // seconds

  resizeCanvasToDisplaySize();

  mesh.rotation.y = time * 1;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);



/// Students JS ///


function Samiaha() {

  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = SamiahaCopy;

}

function Jonae(){

  document.getElementById("image").src="/assets/mural.jpg";
  document.getElementById("studentText").innerText = JonaeCopy;

}

function Quaron(){

  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = QuaronCopy;

}

function Damien(){

  document.getElementById("image").src="/assets/mural.jpg";
  document.getElementById("studentText").innerText = DamienCopy;

}

function Ani(){

  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = AniCopy;

}

function Cameron(){

  document.getElementById("image").src="/assets/mural.jpg";

  document.getElementById("studentText").innerText = CameronCopy;

}

function Jahsiah(){
  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = JahsiahCopy;

}

function Amirah(){

  document.getElementById("image").src="/assets/mural.jpg";
  document.getElementById("studentText").innerText = AmirahCopy;

}

function Mya(){

  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = MyaCopy;

}

function Oscar(){

  document.getElementById("image").src="/assets/mural.jpg";
  document.getElementById("studentText").innerText = OscarCopy;

}

function Kesiah(){

  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = KesiahCopy;

}

function Sylvania(){

  document.getElementById("image").src="/assets/mural.jpg";
  document.getElementById("studentText").innerText = SylvaniaCopy;

}

function Adlin(){

  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = AdlinCopy;

}

function Salai(){

  document.getElementById("image").src="/assets/mural.jpg";
  document.getElementById("studentText").innerText = SalaiCopy;

}

function Jessie(){

  document.getElementById("image").src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  document.getElementById("studentText").innerText = JessieCopy;

}



let SamiahaCopy = ''
let JonaeCopy = ''
let QuaronCopy = ''
let DamienCopy = 'Check this out.'
let AniCopy = ''
let CameronCopy = "Hey i actually changed it"
let JahsiahCopy = ''
let AmirahCopy = ''
let MyaCopy = ''
let OscarCopy = ''
let KesiahCopy = ''
let SylvaniaCopy = ''
let AdlinCopy = ''
let SalaiCopy = ''
let JessieCopy = ''
