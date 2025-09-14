/// EmailJS Init
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // replace with your EmailJS public key
})();

// Contact Form Submit
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
  .then(()=>{document.getElementById("msg-status").innerHTML="✅ Message Sent Successfully!";},
        (error)=>{document.getElementById("msg-status").innerHTML="❌ Failed: "+JSON.stringify(error);});
});

// Loader
window.addEventListener("load",()=>{document.getElementById("loader").style.display="none";});

// Network status
function updateNetworkStatus(){
  const status=document.getElementById("network-status");
  if(!navigator.onLine){status.innerText="⚠️ You are offline!";status.style.display="block";}
  else{status.style.display="none";}
}
window.addEventListener("online",updateNetworkStatus);
window.addEventListener("offline",updateNetworkStatus);

// AOS & Tilt
AOS.init({duration:1000, once:true});
VanillaTilt.init(document.querySelectorAll(".card"), {max:15,speed:300,glare:true,"max-glare":0.3});

// Typing Effect
const text="Hi, I'm Prasanth S";let i=0;
function typing(){if(i<text.length){document.getElementById("typed").innerHTML+=text.charAt(i);i++;setTimeout(typing,100);}}
typing();

// Particle Background
const canvas=document.getElementById("particles"),ctx=canvas.getContext("2d");
canvas.width=innerWidth;canvas.height=innerHeight;
let particles=[];
for(let i=0;i<100;i++){particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,dx:(Math.random()-0.5)*1,dy:(Math.random()-0.5)*1,r:Math.random()*2+1});}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="white";ctx.fill();
    p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1;});
  requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize",()=>{canvas.width=innerWidth;canvas.height=innerHeight;});
