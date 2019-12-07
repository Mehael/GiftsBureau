var param = new Array();
var tmp = new Array();		// два вспомагательных
var tmp2 = new Array();		// массива

var get = location.search;	// строка GET запроса
if(get != '') {
	tmp = (get.substr(1)).split('&');	// разделяем переменные
	for(var i=0; i < tmp.length; i++) {
		tmp2 = tmp[i].split('=');		// массив param будет содержать
		param[tmp2[0]] = tmp2[1];		// пары ключ(имя переменной)->значение
	}
}

function insert_content(div_id){
	var xhr= new XMLHttpRequest();
	xhr.open('GET', './content/'+param['p']+'/'+div_id+'.html', true);
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		
		var html = this.responseText;
		$(document).ready(function () {	
			document.getElementById(div_id+'_content').innerHTML= html;
		});
	};
	xhr.send();
}

	insert_content('page');
	insert_content('footer');
	
$(document).ready(function () {	
	$.getScript('./content/'+ param['p'] + '/code.js', function (e) {	
		var fileName = location.href.split("/").slice(-1).toString(); 
		
		if (param['p'] == "category"){
			$('#reload_bn').click( function (e) { location.reload();});  
		}
		
		$('.category_item').click(function() { 
			location.href = "./content.html?p=item&id="+ $( this ).attr("id");
		});
		//---------
	});
	
	if (param['p']!= "index"){
		$('#logo').click(function (e) {location.href = "./content.html?p=index";})
		.addClass('live_logo');
		
	}
	
	var object = document.getElementById('navigation');
	for (var childItem in object.childNodes) {
		var id = object.childNodes[childItem].id
		if (!(typeof id === 'undefined')){
			if (param['cat'] == id){
				$('#'+id).addClass('navSelected');
			} else {
				$('#'+id).click(function() {
					location.href = "./content.html?p=category&cat=" + $(this).attr("id");
				});
			}
		}
	}
});