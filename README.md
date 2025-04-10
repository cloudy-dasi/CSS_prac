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
    transform-origin: 0px 130px; /*xaxis yaxis - edge of parent block with x=0px y=130px*/
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
- <p>use <code style="color: pink; font-size: 12px">scale(number)</code> helps to avoid the distortion of the object's size when changing its size, it means multiply the object by <code style="color: pink; font-size: 12px">? number</code><p>
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
</details style="cursor: pointer">
<details><summary><code>class = "tooltip"</code></summary>

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
