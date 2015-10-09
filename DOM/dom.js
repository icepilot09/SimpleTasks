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


var options = [
	 ['Option 1', 'Option 2'],
];
function makeLI(array){
	var list = document.getElementById('arrayul')
	for (var i = 0; i < array.length; i++) {
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(array[i]));
		list.appendChild(item);
		
	}
	return list;
	
}
document.getElementById('arrayul').appendChild(makeLI(options[0]));



