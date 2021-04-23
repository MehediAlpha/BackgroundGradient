var btnEnter = document.getElementById("btnEnter");
var userText = document.getElementById("userText");
//var ul = document.querySelector("ul");
var ul = document.getElementById("test");

btnEnter.addEventListener("click", function(){
	if (userText.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(userText.value));
		ul.appendChild(li);
		userText.value = "";
	} 
})

var color1 = document.getElementById("color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);