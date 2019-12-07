var sideSize = 50;
var doubleSize = sideSize*2;
var semiSize = Math.round(sideSize/2);

var bList = itemList();

$( window ).resize(function() {
	resize();
});	

var lastW = 0;
var lastH = 0;	
function resize(){
	if ($(document).height() <= lastH && $(window).width() == lastW)
		return;

	$('.imgLiquid').remove();
	if ($(window).width()<992)
		return;
		
	lastH = $(document).height();
	lastW = $(window).width();
	
	var maxListindex = bList.length-1;
	var h = Math.round($("#page").height() / sideSize)+1;
	var w = Math.round($(window).width() / sideSize * 0.1);
	
	var s = Math.round($(window).width() * 0.9);
	var shift=0;
	for (var x = 0; x < w*3+2; x++){
	for (var y = 0; y < h; y++){
		var name = x+''+y+randomInteger(0, maxListindex)
		var image = bList[randomInteger(0, maxListindex)]["Img"];
		
		if (x == w*2+1){shift = s-((w+1)*2*sideSize);}
		$("#background" ).append('<div title="Название чудесного товара" id="'+image+'" class="'+name+' imgLiquidFill imgLiquid imgLiquidanim" style="width:'+sideSize+'px; height:'+sideSize+'px; top:'+ sideSize*y +'px; left:'+ (shift+(sideSize*x)) +'px;" ><img src="./img/' + image + '"/></div>')
		
		$("."+name).on(
		{
			click: function(){
				location.href = "./content.html?p=item&id="+ $( this ).attr("id");
			},
			mouseenter: function() 
			{
				$( this )
					.css('z-index', 2)
					.css('top', $( this ).position()["top"]-semiSize)
					.css('left', $( this ).position()["left"]-semiSize)
					.css('height', doubleSize)
					.css('width', doubleSize)
			},
			mouseleave: function()
			{
				$( this )
					.css('z-index', 0)
					.css('top', $( this ).position()["top"]+semiSize)
					.css('left', $( this ).position()["left"]+semiSize)
					.css('height', sideSize)
					.css('width', sideSize)

			}
		});

	}
	}
	
	$(".imgLiquidFill").imgLiquid({fill:true});	
		
}