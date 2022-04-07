//Can't change information
const username = "Your name" //can't change
const country = "Your Country"
const gender = "Your gender" //can't change
const sexuality = "Your sexuality" //can't change
const taken = "Are you in couple ?" //can('t) change

//Can change information
let age = "Your age" //can change
let language = "Language you speak " // + "Second language"

console.log('%cHi! i\'\am ' + username,"color:red;font-size: 50px;")
console.log('Im frome ' + country)
console.log('I have ' + age + 'y/o')
console.log('I speak ' + language)
console.log('Im a ' + gender)
console.log('Im ' + sexuality)
console.log('Im ' + taken)
console.log('https://yourwebsite.here')


  function showtext() {
    var x = document.getElementById("innerdiv");
    //for only hide text
   // if (x.style.display === "none") {
     // x.style.display = "block";
    //} else {
    //  x.style.display = "none";
   // }
    document.getElementById("innerdiv").innerHTML = "I and yes an other boring test i test it for learn JS (aka JavaScript) " + 10 * 1
    document.getElementById("title").innerHTML = `<img src="https:\/\/external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fjavascript-logo.png&f=1&nofb=1" width="70px" height="50px"> Test !`
   if(document.getElementById("testing").innerHTML === "Return me") {
    document.getElementById("testing").innerHTML = "Change me";
    document.getElementById("title").innerHTML = `<img src="https:\/\/external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fjavascript-logo.png&f=1&nofb=1" width="70px" height="50px"> Test !`
   }
   else {
    document.getElementById("title").innerHTML = `<img src="https:\/\/external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fjavascript-logo.png&f=1&nofb=1" width="70px" height="50px"> Testing !`
    document.getElementById("innerdiv").innerHTML = "And boom the text changed " + 10 * 2
    document.getElementById("testing").innerHTML = "Return me"
   }
  }
