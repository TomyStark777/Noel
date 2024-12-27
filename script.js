let container = document.querySelector(".container");
let body = document.querySelector("body");
let ok = document.querySelector("#ok");
let start = document.getElementById("start");
let form = document.getElementById("getName");
let nom = document.getElementById("name");
let afficher = document.getElementById("afficher");
let count = 3; 
let url = ["gdg.png","annie.jpg","billy.jpg","club.jpg","joanna.jpg"];

ok.addEventListener('click', () => { 
    afficher.style.display = "none"
    form.style.display = "none";
    start.style.display = "flex";
});

start.addEventListener('click', () => {
    const interval1 = setInterval(() => { 
        start.style.fontFamily = "Times New Roman"; 
        start.style.fontSize = "1.5em"; 
        if (count > 0) { 
            start.innerHTML = `<h2>${count}</h2>`; 
            count--; 
        } else if (count == 0) { 
            start.style.fontFamily = "Christmas"; 
            start.innerHTML = `<h2>C'est Noël !</h2>`;
            launchConfetti(); 
            count--; 
        } else { 
            start.style.display = "none"; 
            container.style.fontSize = "2em"; 
            container.innerHTML = `<div id ="message"><h1><strong>${nom.value}</strong><br>Joyeux Noël !</h1></div> `;
            container.style.textShadow = "2px 2px 4px #000000;"; 
        } 
    }, 800);

    
    setInterval(() => {
        launchConfetti();
        body.ap
        body.style.backgroundImage = "url(" + url[Math.floor(Math.random() * url.length)] + ")";    
    }, 5000);
});

// Créer et ajouter l'élément audio 
    let audio = document.createElement("audio"); 
    audio.src = "musique.m4a"; 
    audio.autoplay = true; 
    body.appendChild(audio);

function launchConfetti() {
    confetti({
        particleCount: 100,
        angle: 60,
        spread: 70,
        startVelocity: 70,
        origin: { x: 0, y: 1 },
        colors: ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff']
    });
    confetti({
        particleCount: 100,
        angle: 120,
        spread: 70,
        startVelocity: 70,
        origin: { x: 1, y: 1 },
        colors: ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff']
    });
}
