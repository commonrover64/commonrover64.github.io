function spawnFlower() {
  const flower = document.createElement("div");
  flower.classList.add("sakura");
  flower.innerText = "🌸";
  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.animationDuration = Math.random() * 4 + 3 + "s";
  flower.style.opacity = Math.random() * 0.5 + 0.3;
  
  // Random rotation: -360deg to 360deg
  const rotation = (Math.random() - 0.5) * 720; // Random between -360 and 360
  flower.style.setProperty('--rotation', `${rotation}deg`);
  
  // Random drift: -50px to 50px horizontal movement
  const drift = (Math.random() - 0.5) * 100;
  flower.style.setProperty('--drift', `${drift}px`);
  
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 8000);
}

function randomSakura() {
  spawnFlower();

  const nextSpawn = Math.random() * 3000 + 2000;

  setTimeout(randomSakura, nextSpawn);
}

document.getElementById('konnichiwaTrigger').addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => spawnFlower(), i * 50);
  }
});

randomSakura();
