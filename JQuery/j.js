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


});


