// ==========================
// LOADER
// ==========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity .8s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2500);
});


// ==========================
// PAINEL HUD
// ==========================

const rpm = document.getElementById("rpm");

let currentRPM = 950;

setInterval(() => {

    const variacao = Math.floor(Math.random()*120)-60;

    currentRPM += variacao;

    if(currentRPM < 850)
        currentRPM = 850;

    if(currentRPM > 1300)
        currentRPM = 1300;

    rpm.textContent = currentRPM;

},350);


// ==========================
// BOTÃO START ENGINE
// ==========================

const startButton = document.querySelector(".start-engine");

let ligado = false;

startButton.addEventListener("click",()=>{

    if(!ligado){

        ligado = true;

        startButton.innerHTML="ENGINE RUNNING";

        startButton.style.background="#00ff88";

        acelerar();

    }else{

        ligado=false;

        startButton.innerHTML="START ENGINE";

        startButton.style.background="linear-gradient(90deg,#00b8ff,#00f0ff)";

        currentRPM=950;

    }

});


// ==========================
// ACELERAÇÃO
// ==========================

function acelerar(){

    let rpmMotor=950;

    const intervalo=setInterval(()=>{

        if(!ligado){

            clearInterval(intervalo);

            return;

        }

        rpmMotor+=220;

        rpm.textContent=rpmMotor;

        if(rpmMotor>=6200){

            setTimeout(()=>{

                rpmMotor=950;

            },300);

        }

    },60);

}



// ==========================
// ILUMINAÇÃO DINÂMICA
// ==========================

document.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth;

    const y=e.clientY/window.innerHeight;

    document.body.style.background=
`radial-gradient(circle at ${x*100}% ${y*100}%,
rgba(0,240,255,.20),
#090909 60%)`;

});



// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".part-card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".7s";

observer.observe(card);

});




// ==========================
// HOVER DO CARRO
// ==========================

const carro=document.getElementById("carImage");

if(carro){

carro.addEventListener("mousemove",(e)=>{

const rect=carro.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/25;

const rotateX=(rect.height/2-y)/25;

carro.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

carro.addEventListener("mouseleave",()=>{

carro.style.transform="rotateX(0) rotateY(0) scale(1)";

});

}



// ==========================
// TROCA DE CORES
// ==========================

function paintWhite(){

if(carro){

carro.style.filter="brightness(1) saturate(1)";

}

}

function paintBlue(){

if(carro){

carro.style.filter="hue-rotate(180deg)";

}

}

function paintRed(){

if(carro){

carro.style.filter="hue-rotate(310deg) saturate(2)";

}

}

function paintBlack(){

if(carro){

carro.style.filter="brightness(.35)";

}

}



// ==========================
// RELÓGIO DA HUD
// ==========================

setInterval(()=>{

const agora=new Date();

document.title=
`3D TUNING • ${agora.toLocaleTimeString()}`;

},1000);




// ==========================
// EFEITO DE BRILHO
// ==========================

document.querySelectorAll(".part-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(0,240,255,.18),
#171717 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="linear-gradient(180deg,#181818,#101010)";

});

});
