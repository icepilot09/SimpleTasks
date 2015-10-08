function myFunction() {
	document.getElementById("button");
	alert("I am an alert");
};

function submitFunction() {
	var x = document.getElementById("textarea").value;
	alert(x);
};
	
function changeBackground() {
	document.getElementById('Div_1').style.background = 'blue';
};

function changeBack() {
	document.getElementById('Div_1').style.background = 'red';
};

function changeTextColor(){
	var letters = '0123456789ABCDEF' .split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		
	}
	document.getElementById('pColor').style.color = color;
}
var span = document.createElement(span);
span.innerHTML = "michael";
var empty = document.getElementById('empty');
empty.appendChild(span);





