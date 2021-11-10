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

  document.getElementById("image").src="/assets/Samiah.jpeg";
  document.getElementById("studentText").innerText = SamiahaCopy;

}

function Jonae(){

  document.getElementById("image").src="/assets/Jonae1.jpg";
  document.getElementById("studentText").innerText = JonaeCopy;

}

function Oscar(){

  document.getElementById("image").src="/assets/Oscar.jpg";
  document.getElementById("studentText").innerText = OscarCopy;

}

function Damien(){

  document.getElementById("image").src="/assets/Damien.jpg";
  document.getElementById("studentText").innerText = DamienCopy;

}

function Ani(){

  document.getElementById("image").src="/assets/Ani'yah.jpg";
  document.getElementById("studentText").innerText = AniCopy;

}

function Cameron(){

  document.getElementById("image").src="/assets/Cameron.jpg";

  document.getElementById("studentText").innerHTML = CameronCopy;

}

function Jahsiah(){
  document.getElementById("image").src="/assets/Jahsiah.jpg";
  document.getElementById("studentText").innerText = JahsiahCopy;

}

function Amirah(){

  document.getElementById("image").src="/assets/Amirah.jpg";
  document.getElementById("studentText").innerText = AmirahCopy;

}

function Mya(){

  document.getElementById("image").src="/assets/Mya.jpg";
  document.getElementById("studentText").innerText = MyaCopy;

}

function Hector(){

  document.getElementById("image").src="assets/Hector.png";
  document.getElementById("studentText").innerText = HectorCopy;

}

function Keziah(){

  document.getElementById("image").src="/assets/Keziah.png";
  document.getElementById("studentText").innerText = KeziahCopy;

}

function Sylvania(){

  document.getElementById("image").src="/assets/Sylvania.jpg";
  document.getElementById("studentText").innerHTML = SylvaniaCopy;

}

function Kiarra(){

  document.getElementById("image").src="/assets/Kiarra.png";
  document.getElementById("studentText").innerText = KiarraCopy;

}

function Salai(){

  document.getElementById("image").src="/assets/Salai.jpg";
  document.getElementById("studentText").innerHTML = SalaiCopy;

}

function Jessie(){

  document.getElementById("image").src="/assets/Jessie.jpg";
  document.getElementById("studentText").innerHTML = JessieCopy;

}

function Paige(){

  document.getElementById("image").src="/assets/Paige.jpg";
  document.getElementById("studentText").innerHTML = PaigeCopy;

}



let SamiahaCopy = ''
let JonaeCopy = ''
let OscarCopy = ''
let DamienCopy = "I am safe when I have my headphones on listening to music, When I have friends and family to talk to, When I get to create and start projects, When I get to doodle during classes, Listening and learning something from a conversation, Seeing others be happy doing what they love, That's all I need to feel safe."
let AniCopy = ''
let CameronCopy = "DEAR SAFETY BY COCO ANAÉ <br /> <br> Dear Safety,<br> Safety when you enclosed me in your arms you remind me of my loving maternal figures <br> The way nana’s and momma’s boisterous laughs fill my craving ears <br> It’s something that I always want to hear <br>Safety you are placed here<br>To my heart I hold you so sondear<br>Thank you for being in many moments and ones to come<br>Not being too far away or being only near <br> <br> Safety remember these moments <br>Cherish them dear to your heart<br>Let the leaping sun dance on your soul<br>Have the wind and sky combine and ease your mind<br>Remember those joyful laughs and don’t leave this tranquil home<br>Without you there wouldn’t be any home <br>Only house about to be taken away<br>As if foreclosure was its middle name<br><br>That’s right Safety you are a valuable mantle in this home<br>A home embodying loving and harmless satire, season to perfection and mouthwatering delicious meals, playful pinches are as embracing as warm hugs, air smelling of fresh cleanliness that is my blankets, and the all round tranquil ringing of joyful laughter<br><br>Safety you may seem full of different components stripped down to various layers of complexity<br>Yet safety you will always get me <br>You are a joy filling my lonely void<br>Lemme savor more this homemade flavor of yours<br>Continue to protect and serve my mind to remind me of premonitions ready to strike on sight<br>I will never let you go without a fight Safety; you make the wrongs turn right<br><br>Now outside is where predators lie<br>Not just the ones National Geographic advertise<br>The metaphorical ones draped in their white collars and wrinkless three-piece silk fabric suits<br>They always seem to spew lies<br>Strategizing ways to control me and my community’s minds<br>Safety just as you are critical at home <br>We need you more than ever in these crucial times <br>Don’t just aid me Safety <br>Make yourself able in minorities’ lives <br>When they are safe it feels as if I’m on cloud nine <br>When they are safe all your simple complexities stand idly by<br>Hold me in your arms Safety and please hold on tight<br>Spread your good to everyone who needs to hear, “It’s alright”<br>Cause if everything in the world was all wrong safety <br>I wouldn’t be profounded by your wonders tonight <br><br>Yours Truly, Black Girl stitching up a loose thread of the fabric that is life"
let JahsiahCopy = ''
let AmirahCopy = ''
let MyaCopy = ''
let HectorCopy = "I step into a room and the moment I relax I'm sent forward 200 years. Unsure of anything around me, I take a moment to realise a few interesting things. For starters everyone is walking around normally. I don't recognize a soul but 200 years would start many new generations. I see no masks that imply that humans found a cure for corona. And we survive. The human race will survive for at least another 200 years. Yet it's stange. Not because everything is so advanced. But, not a soul is upset. I decided to look around to see why people are so happy in 2220. I see everything is so advanced. I visit a library. I don't see a single book. I see everything is digital. I think? It's all just  wires. I found the history section. And I put the headset on and I instantly lived the past 200 years in a matter of seconds. But it felt like 200 years.  I see a upbringing of tec. People shutdown the government. And made their own. We have no president after the 76th president messed up so far we almost fired every nuke we had. We removed people with such power. The states have been removed. The world is united. All known as earth. There are no countries or states or any titles. We are all united. It's almost scary to think we are finally all one. Races are no longer as seen as before. Religion is gone. After 2200 when we found a way to find out what happens after death. It's all nothing. It started a 5 year great depression. Until everyone was convinced to live life to the fullest and not fight over it. Some people still practice out of fear of the lord's test. It's sad but some people can't change. Gender is no longer an issue. It was solved in 2196 when gender was removed. No guys no girls no anything. Love was finally just love. Self love was at a high time high. And I was happy to find out kpop was a phase. At 2022 k pop died out and became underground again. Immortality was invented. I was shocked to think what this would do. Everyone stops ageing at 25. Birth was no longer necessary. For once the total population stopped. Crime was unnecessary since people won't die leaving most crimes out. I remove the headset and look around. I looked up and a stranger asked me if I wanted to join them. I looked and saw a bunch of them singing. I smiled and said I'll pass. But thank you. He smiled and said it wasn't a problem. No one was fat. No one was skinny. All anyone was forced on was peace. It was...beautiful. "
let KeziahCopy = ''
let SylvaniaCopy = "To Grandma <br><br>Dear Grandma i  write this letter to tell you that i love you very much and to tell you stay safe don't go anywhere i'm sorry that i couldn't came to celebrate your  108 birthday  with you because of my college was calling me to choose my class i wish you happy 108 birthday Grandma it is a pleasure to have you as my grandma may God bless you and add more years and your life, be safe because the Covid 19 epidemic  is very dangerous outside i don't want you to go and i don't want to lose you. "
let KiarraCopy = ''
let SalaiCopy = "Dear younger self, <br>The world we live in is only safe as what you and your community make it. As long as you keep a positive mindset and stay focused on what you believe that your community should be to keep you safe and at peace.<br> Move a certain way everyone should not know what you have or what you doing because you're becoming a target once people see you doing good and that takes a big part on why my community isn’t really safe as it should be and continue to be. You don’t let anyone change that."
let JessieCopy = "Safety smell like tea make me relax.<br>I am safe when i have something to eat.<br>I am safe when my mom holding my hand.<br>When my family Support me all the time I feel safety.<br>My family is safe when we have a place to live.<br>My community is safe when at the sleepy night."
let PaigeCopy = ""