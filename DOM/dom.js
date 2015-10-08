function myFunction() {
	document.getElementById("button");
	alert("I am an alert");
};

function submitFunction() {
	var x = document.getElementById("textarea").value;
	alert(x);
};
	
function changeColor() {
	document.getElementById('Div_color').style.background = 'blue';
};

function changeBack() {
	document.getElementById('Div_color').style.background = 'red';
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


var li = document.createElement(li);
li.innerHTML = [0,1,2,3,4];
var array = document.getElementById('arrayul');
array.appendChild(li);



