<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-CSS-black?style=for-the-badge&&logoColor=white&logo=css&color=blue" alt="css" />
    <img src="https://img.shields.io/badge/-Javascript-black?style=for-the-badge&logoColor=white&logo=javascript&color=yellow" alt="javascript" />
  </div>

  <h1 align="center">🚀 7 Days Practicing With CSS!</h1>

   <div align="center">
     This document shows some notes I take when practicing CSS with <a href="https://100dayscss.com/"><b>100 Days CSS</b></a>
    </div>
</div>

<!--define h2 with ##-->
<!--[link text](#url or anchor): add link of a section-->

## 🌒 <a name="table">Table of contents </a>
1. 🌄 [Pyramid](#pyramid)
2. ⏳ [Loading](#loading)
3. 📈 [Statistics](#statistics)
4. 👩 [Social Profile](#social-profile)
5. 🚨 [Notification](#notification)
6. 🌊 [Water Motion](#water-motion)
7. ☔ [Weather](#weather)

<!--define h3 with ###-->
<!--details tag: collapsed section: dropdown-->
<!--summary tag: used for name of dropdown-->

### <a name="pyramid">🌄 Pyramid</a>
<details style="cursor: pointer">
<summary><code>transform-origin</code></summary>

```css
{
    transform-origin: 0px 130px; /*xaxis yaxis - edge of parent block with x=0px y=130px - rotate around a circle a height = radius === 130px*/
    transform: rotate(-100deg); /*disapper from view*/
    animation: sun-move 5s infinite cubic-bezier(.5, .2, .5, .8);
}

@keyframes sun-move {/*% of 5s*/
    30%{transform: rotate(-28deg)}
	70% {transform: rotate(10deg)}
	100% {transform: rotate(70deg)}
}
```
- <p><code style="color: pink; font-size: 12px">transform-origin</code> means defining the center of an object when it transforms - <i>use case</i>: <code style="color: pink; font-size: 12px">rotate(degree)</code>.</p> 
- <p>Decide the <code style="color: pink; font-size: 12px">rotate(degree)</code> means deciding the position of the object when animating that object. The object will move followed by a curve due to rotate effect<p>
</details>

### <a name="loading">⏳ Loading</a>
<details style="cursor: pointer">
<summary><code>scale()</code></summary>

```css
{
    0% {transform: scale(0)}
    40% {transform: scale(1)}
	80% {transform: scale(1)}
	100% {transform: scale(0)}
}
```
- <p>use <code style="color: pink; font-size: 12px">scale(one number)</code> helps to avoid the distortion of the object's size when changing its size, it means multiply the object by <code style="color: pink; font-size: 12px">? number</code><p>
</details>

### <a name="statistics">📈 Statistics</a>
<details style="cursor: pointer"><summary>
<code>stroke-dasharray</code>
<code>stroke-dashoffset</code>
</summary>

```css
{
    stroke-dasharray: 300; /*an array of 300 dashes*/
    animation-name: appear-stroke;
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

@keyframes appear-stroke{
	0%{stroke-dashoffset: 300;}
	100%{stroke-dashoffset: 0;}
}
```
- <p><code style="color: pink; font-size: 12px">stroke-dasharray</code>: shows line/stroke under an array of dashes</p>
- <p><code style="color: pink; font-size: 12px">stroke-dasharray: 300</code>: dense collection of dashes helps to form into a connected line</p>
- <p><code style="color: pink; font-size: 12px">stroke-dashoffset</code>: define starting point of the array of dashes counted from right. <br><br> <i>For example</i>: <code style="font-size: 12px">stroke-dashoffset: 300</code> means the starting point of the array of dashes apart from the right 300px and from that point to the left the array of dashes will show up</p>
</details>
<details style="cursor: pointer"><summary><code>class = "tooltip"</code></summary>

```html
<div class='point-1'><div class= 'tooltip'>26</div></div>
```

```css
[class^='point-']:hover {
    .tooltip {
        transform: translate3d(0px, -3px, 0px);
        opacity: 1;
    }
}
```
- <p><code style="color: pink; font-size: 12px">tooltip</code> can be regarded as a child element which is used after hovering its parent element</p>
</details>

### <a name="social-profile">👩 Social Profile</a>
<details style="cursor: pointer"> <summary><code>display: grid</code></summary>

```css
{   display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	gap: 1px;
}
```
- <p>I used <code style="font-size: 12px; color: pink">grid</code> to organize each block of content cuz grid helps organize contents in the same frame well.</p>
</details>
<details style="cursor: pointer"><summary><code>transition instead of animation</code></summary>

```css
/*shouldnt*/
@keyframes round {
	100% {transform: rotate(360deg)}
}
```
- <p>There was a problem when I made the two circles of image profile move. At first I used animation (<code style="font-size: 12px; color: pink">keyframes</code>) to make it move when hovering, then added <code style="font-size: 12px; color: pink">animation-direction: reverse</code> into <code style="font-size: 12px; color: pink">animation</code> CSS property of one circle. However circles couldn't get back to their initial state when unhovering</p>
- <p><code style="font-size: 12px; color: pink">transition</code> means switch to another mode => it is suitable when triggered after an event and turned off when there is no event happens => helps element get back to its initial state when unhovering</p>
</details>

### <a name="notification">🚨 Notification</a>
<details style="cursor: pointer"><summary><code>a better way to make menu-icon: using svg</code></summary><br>

<i>This is an updated way compared to the one used in css file. <i>

```css
/*css file*/
.menu-icon{
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #5B99C2;
}
svg{
  position: relative;
  top: 5px;
}
svg path{
  stroke: rgba(255, 255, 255, 0.6);

}
svg circle{
  fill: rgba(255, 255, 255, 0.6);

}
.menu-icon:hover{
  cursor: pointer;
  svg path{
    stroke: white;
  }
  svg circle{
    fill: white;
  }
}
```

```html
<!--HTML file-->
<div class="menu-icon">
  <svg viewBox="0 0 35 35">
    <path d="M4 5.5 L20 5.5" style="fill: none; stroke-width: 5px; stroke-linecap: round"></path>
    <circle cx="28" cy="5" r="4"></circle>
    <path d="M4 18 L30 18" style="fill: none; stroke-width: 5px; stroke-linecap: round"></path>
  </svg>
</div>
```
</details>

<details style="cursor: pointer"><summary><code>toggle('active')</code></summary>

```js
//js syntax: element.classList.toggle('active') == .classListName_Of_Element:active{}
```
</details>

### <a name="water-motion">🌊 Water Motion</a>
*Note: Make the "sparkle-" similar to making "blubb-"
<details style="cursor: pointer">
<summary><code>filter property create blend effect</code></summary>

```css
/*using blur to make elements blend into each other*/
.ball{filter: blur(15px)}
[class^='blubb-']{filter: blur(5px);}
```

```css
/*contrast() used on a frame helps colors on that frame sharper and stand out*/
/*contrast(25) means multiply its default value 100% by 25 = 2500%*/
.frame{filter: contrast(25)}
```
</details>

<details style="cursor: pointer">
<summary><code>use loop to create 8 blubbs</code></summary>

```js
/*JS file*/
for(let i = 1; i<=8; i++){
	const blubb = document.createElement('div'); //8 frames
    blubb.classList.add(`blubb-${i}`); //8 class names with "blubb-(1,8)"
}
```
</details>

<details style="cursor: pointer">
<summary><code>set up blubb- position</code></summary>

```css
/*positions of 8 blubbs can be seen as a flower*/
[class^='blubb-']{
	position: absolute;
	width: 50px;
	height: 50px;
	top: calc(50% - 25px);
	left: calc(50% - 25px);
    transform: rotate(var(--randomRotate)); /*define positions of 8 blubbs with rotate(degree)*/
}
```

```js
const randomRotate = `${Math.random() * 300}deg`;
blubb.style.setProperty('--randomRotate', randomRotate);
```
- <p>what i found while making this "water motion" is that I can use variables in CSS file and then <code style="color: pink; font-size: 12px">setProperty("variable-name")</code> in JS file to set property for that variable</p>
</details>

<details style="cursor: pointer">
<summary><code>make blubb- move</code></summary><br>
blubb- will move followed by a curve - which means it has to use <code style="color: pink; font-size: 12px">transform-origin</code> and <code style="color: pink; font-size: 12px">animation - transform: rotate(deg)</code>

```css
/*CSS file*/
[class="blubb-"]:after{
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 200px;
    background: white;
    transform-origin: var(--originX) var(--originY);
    animation: rotate var(--blubbDur) ease-in var(--blubbDelay) infinite;
    filter: blur(5px); /*blend into center ball*/
}
```

```js
const originX = `${40 - i * 3}px`; //define the origin when transform (rotate) < .center radius (<45px) - a circle with radius < 45px
const originY = `${40 - i * 3}px`;
const blubbBlur = `${2.5 + i / 5}s`; //timer 2.5s < x <= 4s
const blubbDelay = `${i / 5}s`;

blubb.style.setProperty('--originX', originX);
blubb.style.setProperty('--originY', originY);
blubb.style.setProperty('--blubbDur', blubbBlur);
blubb.style.setProperty('--blubbDelay', blubbDelay);
```
- reason use <code style="color: pink; font-size: 12px">:after</code> pseudo class to add animation prop instead of adding into <code style="color: pink; font-size: 12px">[class="blubb-"]</code>is to prevent the contradiction with <code style="color: pink; font-size: 12px">animation keyframes - transform: rotate(deg)</code>

```css
/*if write like this - blubb will not positioned as a flower*/
[class^='blubb-']{
	position: absolute;
	width: 50px;
	height: 50px;
	top: calc(50% - 25px);
	left: calc(50% - 25px);
    transform: rotate(var(--randomRotate)); /*this*/
    transform-origin: var(--originX) var(--originY);
    animation: rotate var(--blubbDur) ease-in var(--blubbDelay) infinite;
}
@keyframes rotate {
	from {
		transform: rotate(0deg); /*this will replace --randomRotate*/
	}
	to {
		transform: rotate(360deg); /*this*/
	}
}
```
</details>


### <a name="weather">☔ Weather</a>