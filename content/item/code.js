if (param['master'] == 'y'){
	$('#master_nav').show();
}

$(document).ready(function () {

	$('#byu').click(function() { 
		location.href = "./content.html?p=delivery&id="+param['id'];
	});
	var db = itemList();
	
	for (var i in db) {
		if (db[i]["Img"] == param['id']){
			document.title = db[i]["Name"];
			$("#item_img").attr("src", './img/'+db[i]["Img"]);
			if (db[i]["Name"]!=""){
				document.getElementById("item_name").innerHTML = db[i]["Name"];}
			if (db[i]["Discr"]!=""){
				document.getElementById("item_discr").textContent=db[i]["Discr"];}
			if (db[i]["Price"]!=""){
				document.getElementById("item_price").innerHTML = db[i]["Price"]+' <i class="fa fa-rouble"></i>';}			
		}
	} 
		
	if (param['id'] == 'GFhat.png'){
		document.getElementById("item_discr").textContent= "Снаряжение настоящего искателя тайн! Еще думаете, что бы недорогого и оригинального подарить мальчику: парню, другу, брату, однокласснику или сыну на 12, 13, 14, 15 или 16 лет? Этот головной убор будет интересным подарком, если парень интересуется загадками и тайнами.";
	}
	
	resize();
});