const surface = document.querySelector('.surface');
const ground = document.querySelector('.ground');
const sky = document.querySelector('.stars');

//poles
for(let i=1; i<=8; i++){
	const poleCenter = document.createElement('div');
	poleCenter.classList.add(`center-${i}`);
	
	const poleCenterWidth = `${i + 2}px`;
	const poleCenterHeight = `${i + 2}px`;
	
	//random position
	const radius = Math.random() * (33 - (i+2));
	const angle = Math.random() * 2 * Math.PI;
	//convert into retangular coordinates
	const x = radius * Math.cos(angle) + i*2;
	const y = radius * Math.sin(angle) + i*2;
	
	poleCenter.style.setProperty('--poleCenterWidth',poleCenterWidth);
	poleCenter.style.setProperty('--poleCenterHeight',poleCenterHeight);
	poleCenter.style.top = `${y + 35 - (i + 2) / 2}px`; 
	poleCenter.style.left = `${x + 35 - (i + 2) / 2}px`;
	
	surface.appendChild(poleCenter);
}
//heavy rain
for(let i=1; i<=4; i++){
	const heavyRain = document.createElement('div');
	heavyRain.classList.add(`heavy-rain-${i}`);
	const heavyLeft = `${i * 20 + 30}px`;
	const heavyDelay = `${i/2}s`;
	const heavyDur = `${i/1.6}s`
	
	heavyRain.style.setProperty('--heavyLeft', heavyLeft);
	heavyRain.style.setProperty('--heavyDelay', heavyDelay);
	heavyRain.style.setProperty('--heavyDur', heavyDur);
	ground.appendChild(heavyRain);
}
//heavy rain
for(let i=5; i<=10; i++){
	const heavyRain = document.createElement('div');
	heavyRain.classList.add(`heavy-rain-${i}`);
	const heavyLeft = `${i * 20 + 30}px`;
	const heavyDelay = `${i/2}s`;
	const heavyDur = `${i/10}s`
	
	heavyRain.style.setProperty('--heavyLeft', heavyLeft);
	heavyRain.style.setProperty('--heavyDelay', heavyDelay);
	heavyRain.style.setProperty('--heavyDur', heavyDur);
	ground.appendChild(heavyRain);
} 
//heavy rain
for(let i=11; i<=15; i++){
	const heavyRain = document.createElement('div');
	heavyRain.classList.add(`heavy-rain-${i}`);
	const heavyLeft = `${i * 15 + 200}px`;
	const heavyDelay = `${i/2}s`;
	const heavyDur = `${i/10}s`
	
	heavyRain.style.setProperty('--heavyLeft', heavyLeft);
	heavyRain.style.setProperty('--heavyDelay', heavyDelay);
	heavyRain.style.setProperty('--heavyDur', heavyDur);
	ground.appendChild(heavyRain);
}
//light rain
for(let i=1; i<=25; i++){
	const lightRain = document.createElement('div');
	lightRain.classList.add(`light-rain-${i}`);
	const lightLeft = `${i * 50 + 50}px`;
	const lightDelay = `${i/1.5}s`;
	
	lightRain.style.setProperty('--lightLeft', lightLeft);
	lightRain.style.setProperty('--lightDelay', lightDelay);
	ground.appendChild(lightRain);
}
//small rain
for(let i=1; i<=25; i++){
	const smallRain = document.createElement('div');
	smallRain.classList.add(`small-rain-${i}`);
	const smallLeft = `${i * 60 + 50}px`;
	const smallDelay = `${i/2}s`;
	
	smallRain.style.setProperty('--smallLeft', smallLeft);
	smallRain.style.setProperty('--smallDelay', smallDelay);
	ground.appendChild(smallRain);
}
//stars
for(let i=1; i<=100; i++){
	const stars = document.createElement('div');
	stars.classList.add(`star-${i}`);
	
	const radius = Math.random() * 200 - 2 + i;
	const degree = Math.random() * 2 * Math.PI;
	const x = Math.cos(degree) * radius;
	const y = Math.sin(degree) * radius;
	
	const axisX = Math.random()*10;
	const originLeft = Math.random()*50;
	const originTop = Math.random()*50;
	
	stars.style.setProperty = ('--axisX', `${axisX}px`);
	stars.style.setProperty = ('--left', `${originLeft}%`);
	stars.style.setProperty = ('--top', `${originTop}%`);
	stars.style.top = `${y + 200}px`;
	stars.style.left = `${x + 200}px`;
	sky.appendChild(stars);
}

