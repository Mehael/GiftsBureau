$(document).ready(function () {	
	var db = categoryList(param['cat']);
	shuffle(db.items)
	var mastr_flag = "";
	if (param['master'] == 'y') {mastr_flag = "&master=y";}
	
	for (var i in db.items) {	
		if (i>5){break;}
		$("#category_items").append("<li><div id='"+db.items[i]["Img"]+mastr_flag+"' class='ch-item category_item'  style='background-image:url(./img/"+db.items[i]["Img"]+");'><div class='ch-info'><h3>"+db.items[i]["Name"]+"</h3><p>"+db.items[i]["Discr"]+"</p></div></div></li>");
	}
	document.getElementById("category_text").innerHTML = db.descr; 
 	document.getElementById("category_name").innerHTML = db.name; 
	
	if (param['master'] == 'y'){
		$('#master_nav').show();
		document.title = "Лучшие подарки для Павла Дурова";
	} else {
		document.title = 'Подарки из ' + db.name;
	}
	
	$(document).ready(function () {	
		resize();
	});	
});
//shuffles list in-place
function shuffle(list) {
  var i, j, t;
  for (i = 1; i < list.length; i++) {
    j = Math.floor(Math.random()*(1+i));  // choose j in [0..i]
    if (j != i) {
      t = list[i];                        // swap list[i] and list[j]
      list[i] = list[j];
      list[j] = t;
    }
  }
}