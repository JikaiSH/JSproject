  function showtext() {
    //for only hide text
    //var x = document.getElementById("innerdiv");
    const dStyle = document.querySelector('style');
    //for only hide text
   // if (x.style.display === "none") {
     // x.style.display = "block";
    //} else {
    //  x.style.display = "none";
   // }
    document.getElementById("innerdiv").innerHTML = "There is" + 4 + "bot online at this time"
    document.getElementById("title").innerHTML = `<img src="https:\/\/external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fjavascript-logo.png&f=1&nofb=1" width="70px" height="50px"> JS Manager (beta) !`

   if(document.getElementById("testing").innerHTML === "Launch Server") {
    document.getElementById("testing").innerHTML = "Stop Server";
    document.getElementById("innerdiv").innerHTML = "There is " + 4 + " bots online at this time"
    dStyle.innerHTML = '#test {color: rgb(21, 255, 0);}';
    document.getElementById("test").innerHTML = "System Online";
    document.getElementById("title").innerHTML = `<img src="https:\/\/external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fjavascript-logo.png&f=1&nofb=1" width="70px" height="50px"> JS Manager (beta on)`
   }
   else {
    document.getElementById("title").innerHTML = `<img src="https:\/\/external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fjavascript-logo.png&f=1&nofb=1" width="70px" height="50px"> JS Manager (beta off)`
    dStyle.innerHTML = '#test {color: red;}';
    document.getElementById("test").innerHTML = "System Offline";
    document.getElementById("innerdiv").innerHTML = "There is " + 4 + " bots offline at this time"
    document.getElementById("testing").innerHTML = "Launch Server"
   }
  }

  //Can't change information
//const username = "Your name" //can't change
//const country = "Your Country"
//const gender = "Your gender" //can't change
//const sexuality = "Your sexuality" //can't change
//const taken = "Are you in couple ?" //can('t) change

//Can change information
//let age = "Your age" //can change
//let language = "Language you speak " // + "Second language"

//console.log('%cHi! i\'\am ' + username,"color:red;font-size: 50px;")
//console.log('Im frome ' + country)
//console.log('I have ' + age + 'y/o')
//console.log('I speak ' + language)
//console.log('Im a ' + gender)
//console.log('Im ' + sexuality)
//console.log('Im ' + taken)
//console.log('https://yourwebsite.here')