document.title = "Выбор друга";

$(document).ready(function () {	
	$('#frend_selected').click(function() { 
		location.href = "./content.html?p=category&cat=all&master=y";
	});
	

	resize();
});