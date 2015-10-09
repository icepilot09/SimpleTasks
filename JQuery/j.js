$(document).ready(function () {
	$("#alert_button").click(function () {
		alert('I am an alert!');
	});

	$('#submit_button').click(function () {
		var x = $("#textarea").val();
		alert(x);
	});

	$('.forum').hover(
		function () {
			var $this = $(this);
			$this.data('bgcolor', $this.css('background-color')).css('background-color', '#380606');
		},
		function () {
			var $this = $(this);
			$this.css('background-color', $this.data('bgcolor'));
		}
		);

	$('p').click(function () {
		$(this).css(
			'color', 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ')'
			, 500);
	});

	$("#emptyjq").append("<span>Michael</span>");


	var items = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
	var ul;
	$.each(items, function (index, value) {
		{
			$('.arrayjq').append(ul);
			ul = $('<ul>', { 'class': 'test' });
		}
		var li = $('<li>').append(value);
		ul.append(li);
	});
	$('.arrayjq').append(ul);
});


