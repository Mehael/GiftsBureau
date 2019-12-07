document.title = "Покупка подарка";

$(document).ready(function () {	
	document.getElementById('undo_to_item').href = "./content.html?p=item&id="+param['id']+"&master=y";
	
	$('#pay').click(function() { 
		$('#nice_req').fadeIn('slow');
	});
	
	resize();

});