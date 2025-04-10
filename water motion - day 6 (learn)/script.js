const center = document.querySelector('.center');

for(let i = 1; i<=8; i++){
	const blubb = document.createElement('div');
    blubb.classList.add(`blubb-${i}`);
    
    // at first place: blubb.style.transform = `rotate(${Math.random()*300}deg)` within transform-origin and animation rotate => contradict to the transform rotate in the animation
    const randomRotate = `${Math.random() * 300}deg`;
    const originX = `${40 - i * 3}px`; //rotate a circle smaller than the .center
    const originY = `${40 - i * 3}px`;
    const blubbBlur = `${2.5 + i / 5}s`;
    const blubbDelay = `${i / 5}s`;

    blubb.style.setProperty('--randomRotate', randomRotate);
    blubb.style.setProperty('--originX', originX);
    blubb.style.setProperty('--originY', originY);
    blubb.style.setProperty('--blubbDur', blubbBlur);
    blubb.style.setProperty('--blubbDelay', blubbDelay);

	center.appendChild(blubb);
}

for(let i=1; i<=10; i++){
	const sparkle = document.createElement('div');
    sparkle.classList.add(`sparkle-${i}`);
    
    //at the first place sparkle.style.transform = `rotate(${Math.random()*300}deg)`; => same issue

    const widthSparkle = `${7 + i}px`;
    const heightSparkle = `${7 + i}px`;
    const randomRotate = `${Math.random() * 300}deg`;
    const originX = `${60 - i * 2}px`; //rotate a circle larger than the .center
    const originY = `${60 - i * 2}px`;
    const sparkleDur = `${3.5 + i / 5}s`; //3.5s + delay time
    const sparkleDelay = `${i / 5}s`;

    sparkle.style.setProperty('--widthSparkle', widthSparkle);
    sparkle.style.setProperty('--heightSparkle', heightSparkle);
    sparkle.style.setProperty('--randomRotate', randomRotate);
    sparkle.style.setProperty('--originX', originX);
    sparkle.style.setProperty('--originY', originY);
    sparkle.style.setProperty('--sparkleDur', sparkleDur);
    sparkle.style.setProperty('--sparkleDelay', sparkleDelay);
	
	center.append(sparkle);
}