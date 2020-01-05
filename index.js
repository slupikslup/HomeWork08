var app = document.getElementById('app')

var random = (min, max) => Math.round(Math.random() * (max - min) + min)

var circless = document.createElement('div')

circless.style.position = 'absolute'

setInterval(() => {
circless.style.left = `${random(0, window.innerWidth - 580)}px`
circless.style.top = `${random(0, window.innerHeight - 580)}px`
}, 850)
app.appendChild(circless)
function Circle(size, backgroundColor, zIndex = 0, score, id) {
    var element = document.createElement('div');
    element.id = id
    element.score  = score
    element.onclick = (e) => scoreCount += score
    element.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background-color: ${backgroundColor};
    position: absolute;
    top: calc(50% - ${size / 2}px);
    left: calc(50% - ${size / 2}px);
    z-index:${zIndex}
    `;
    this.appendToApp = () =>circless.appendChild(element)
}

function Bird(size, imageSrc, intervalTime, zIndex = 5){
    var element = document.createElement('img')
    element.src = imageSrc
    element.style.cssText = `
    width : ${size}px;
    position : absolute;
    z-index : ${zIndex};
    transition : ${intervalTime / 1000}s all;
    `
    this.appendToApp = () => app    .appendChild(element)  
    var random = (min, max) => Math.round(Math.random() * (max - min) + min)
    this.startInterval = () => {
       setInterval(() => {
        element.style.top = `${random(0, window.innerHeight - size)}px`
        element.style.left = `${random(0, window.innerWidth - size)}px`
    }, intervalTime)
       }
    }

var firstCircle = new Circle(51, 'red',  6 , 100, 'first')
var secondCircle = new Circle(130, 'green', 5, 70, 'second')
var thirdCircle = new Circle(250, '#262638',4 , 50, 'third')
var forthCircle = new Circle(300, 'green',3 , 30, 'forth')
var fivesCircle = new Circle(400, '#262638',2 , 20, 'fives')
var sixsCircle = new Circle(480, 'black',1 , 10, 'sixs')

var img = document.createElement('img')
img.src = 'dart.png'
img.style.zIndex = 10
img.style.width = '75px'
app.appendChild(img)
img.style.position = 'absolute'
window.onmousemove = (event) => {
    img.style.top = `${event.clientY - 55}px`
    img.style.left = `${event.clientX + 3}px`
}   

var animationD = false
window.onclick = () => {
if(!animationD){
img.src = 'animation.gif'
animation = true
setTimeout(() => img.src = 'dart.png', 800)
return animationD = false    
}
}
var style = document.createElement('style')
style.innerText = `
html,
body{
    hieght:100%;
}
body{
    margin: 0
}
body:hover{
cursor:none;
}
`

var circles = [firstCircle, secondCircle, thirdCircle, forthCircle, fivesCircle, sixsCircle]
circles.forEach((circle) => circle.appendToApp())
var birds = []


for(var i = 0; i < 3; i++){
    birds.push(new Bird(random(50, 200), 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6165d18-54f5-4989-900d-ae5404b57f0b/dal9hu1-312417ff-2ea6-4173-bcd7-54d8ba098071.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MTY1ZDE4LTU0ZjUtNDk4OS05MDBkLWFlNTQwNGI1N2YwYlwvZGFsOWh1MS0zMTI0MTdmZi0yZWE2LTQxNzMtYmNkNy01NGQ4YmEwOTgwNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JPmCY9W7V-fPlPl7tXMgahfAZ8UmpeWPNRBqR3-vmuQ', random(2000, 4000)))
}

birds.forEach((bird) => bird.appendToApp())
birds.forEach((bird) => bird.startInterval())

var scoreCount = 0
var score =  document.createElement("p")

score.style.fontSize = '70px'
score.style.position = 'absolute'
score.style.margin = `0px`
setInterval(() => score.style.left = `${window.innerWidth * 0.43}px`)
window.onclick  = () => score.innerText = `Score : ${scoreCount}`
app.appendChild(score)