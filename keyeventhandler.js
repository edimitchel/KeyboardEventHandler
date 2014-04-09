
KeyEventTrigger = new Array();
var EventTypes = {
	KEY_DOWN : 'keydown', 
	KEY_PRESS : 'keypress', 
	KEY_UP : 'keyup'
};

function addKeyEventTrigger(type, condition, action){
	if(!(type == EventTypes.KEY_UP || type == EventTypes.KEY_PRESS || type == EventTypes.KEY_DOWN)) 
		throw new Error("Le type de l'évènement n'est pas un type KeyboardEvent");

	if(typeof KeyEventTrigger[type] == "undefined") 
		KeyEventTrigger[type] = new Array();

	KeyEventTrigger[type].push({
		cond : condition,
		func : action
	});
}


function onKeyHandler(event){
	console.log(event);
	var eventType = event.type;
	for(i in KeyEventTrigger[eventType]){
		var ket = KeyEventTrigger[eventType][i];
		if(ket.cond(event)){
			ket.func(event);
			return;
		}
	}
}

document.body.onload = init();
window.onkeydown = onKeyHandler;
window.onkeyup = onKeyHandler;

addKeyEventTrigger(EventTypes.KEY_DOWN,function(event){
	return event.ctrlKey && event.which == 70;
},function(e){
	e.preventDefault();
	clearFields();
});

addKeyEventTrigger(EventTypes.KEY_UP,function(event){
	return event.ctrlKey && event.which == 86 && event.target.id == "requete";
},function(e){
	e.preventDefault();
	minifier(1)
});
