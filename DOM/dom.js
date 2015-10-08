function myFunction() {
	document.getElementById("button");
	alert("I am an alert");
};

function submitFunction() {
	var x = document.getElementById("textarea").value;
	alert(x);
};

// var div = document.getElementById('colordiv');
// div.onmouseover = function() {
// 	this.style.backgroundColor = 'green';
// };
// div.onmouseout = function() {
// 	this.style.backgroundColor = 'transparent';
// };
	
function changeBackground(id, color) {
	document.getElementById(id).style.background = color;
}