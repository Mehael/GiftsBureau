function database() {
return [
		{CategoryName: "AT", CategoryTitle: "Время приключений", CategoryDescr: "описание категории", items : [
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"AdotherPlush.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"ADbroPlush.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"ADbemoHodie.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"ADFistHoodie.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"ADbro.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"AdInSpace.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"ADiceKing.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"ADshirtBrutal.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"ADshirt.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"JakeDress.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"FinnShoes.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"JakeShoes.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"hoodie.png", Price:randomInteger(100, 1500)}
			]
		},
		{CategoryName: "HS", CategoryTitle: "Хардстоун", CategoryDescr: "описание категории", items : [
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"HSamulet.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"heartstone.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"heartsoneAmulet.png", Price:randomInteger(100, 1500)}
			]
		},
		{CategoryName: "ESport", CategoryTitle: "ww", CategoryDescr: "HS", items : [
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"CsDagge2r.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"csDagger.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"DotaScroll.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"DotaEgida.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"NavuFan.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"WOWsword.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"Pudge.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"WOTShield.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"WOTtank.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"WOTbullet.png", Price:randomInteger(100, 1500)}
			]
		},
		
		{CategoryName: "GF", CategoryTitle: "Подарки из Гравити Фолс", CategoryDescr: "Диппер и Мейбл расследуют тайны Грэвити Фолсс! Эти подарки можно подарить другу, сыну или подруге на 12, 13, 14, 15, 16 лет. (Если только это не великовозрастное дитя, конечно)", items : [
				{Name:"Тёмный Билл", Discr:"Приглядывает за тобой",  Img:"GFamulet.png", Price:randomInteger(100, 1500)},
				{Name:"Семейный Рюкзак", Discr:"Вместе навсегда",  Img:"GFbag.png", Price:randomInteger(100, 1500)},
				{Name:"Кепка Диппера", Discr:"Let's go Dipper!",  Img:"GFhat.png", Price:randomInteger(100, 1500)},
				{Name:"Билл из дневника", Discr:"Приглядывает за тобой",  Img:"GVamulet.png", Price:randomInteger(100, 1500)}
			]
		},
		
		{CategoryName: "anime", CategoryTitle: "ww", CategoryDescr: "HS", items : [
				{Name:"John", Discr:"Doe",  Img:"sailorMoon.png", Price:randomInteger(100, 1500)},
				{Name:"John", Discr:"Doe",  Img:"ZeldaShields.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"Zelda.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"Pokeball.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"FaryTalesAmulets.png", Price:randomInteger(100, 1500)},
				{Name:"Полезная инфа", Discr:"Полезная инфа",  Img:"TitansAmulet.png", Price:randomInteger(100, 1500)}
			]
		}
	]; 
}

function itemList(){
	var request = database();
	var bList = [];
	for (categoryId in request){
		for (item in request[categoryId]["items"]){
			var bingo = request[categoryId]["items"][item];
			bList.push(bingo);
		}
	}
	return bList;
}

function categoryList(catName){
	if (catName == 'all'){
		return {
			items: itemList(),
			name: "Подарок для Павла Дурова",
			descr: "Найденные интересы: GravityFalls - 2 лайка, AdventureTime - 1 лайк."
		}
	}

	var request = database();
	var descr_l = "";
	var name_l = "";
	var bList = [];
	for (categoryId in request){
		if (request[categoryId]["CategoryName"] != catName)
			continue;
		
		descr_l = request[categoryId]["CategoryDescr"];
		name_l = request[categoryId]["CategoryTitle"];
		for (item in request[categoryId]["items"]){
			var bingo = request[categoryId]["items"][item];
			bList.push(bingo);
		}
	}
	return {
		items: bList,
		name: name_l,
		descr: descr_l
	}
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}