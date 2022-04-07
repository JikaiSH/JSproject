//Can't change information
const username = "JikaiSH" //can't change
const country = "France"
const gender = "boy" //can't change
const sexuality = "Gay" //can't change
const taken = "Taken <3" //can('t) change

//Can change information
let age = "14" //can change
let language = "French, " + "English"

console.log('%cHi! i\'\am ' + username,"color:red;font-size: 50px;")
console.log('Im frome ' + country)
console.log('I have ' + age + 'y/o')
console.log('I speak ' + language)
console.log('Im a ' + gender)
console.log('Im ' + sexuality)
console.log('Im ' + taken)
console.log('https://jikaish.tk')


  function showtext() {
    var x = document.getElementById("innerdiv");
    //for only hide text
   // if (x.style.display === "none") {
     // x.style.display = "block";
    //} else {
    //  x.style.display = "none";
   // }
    document.getElementById("innerdiv").innerHTML = "I and yes an other boring test i test it for learn JS (aka JavaScript) " + 10 * 1
   if(document.getElementById("testing").innerHTML === "Show me") {
    document.getElementById("testing").innerHTML = "Hide me";
   }
   else {
    document.getElementById("testing").innerHTML = "Show me"
    document.getElementById("innerdiv").innerHTML = "And boom the text changed " + 10 * 2
   }
  }