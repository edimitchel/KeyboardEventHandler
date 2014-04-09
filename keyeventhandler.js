KeyEventTrigger = new Array();
var EventTypes = {
	KEY_DOWN : 'keydown', 
	KEY_PRESS : 'keypress', 
	KEY_UP : 'keyup'
};

function addKeyEventTrigger(keyEventType, condition, actionOnTrigger){
	if(!(keyEventType == EventTypes.KEY_UP || keyEventType == EventTypes.KEY_PRESS || keyEventType == EventTypes.KEY_DOWN)) 
		throw new Error("The event type isn't a KeyboardEvent type.");

	if(typeof KeyEventTrigger[keyEventType] == "undefined") 
		KeyEventTrigger[keyEventType] = new Array();

	KeyEventTrigger[keyEventType].push({
		cond : condition,
		func : actionOnTrigger
	});
}


function onKeyHandler(event){
	var eventType = event.type;
	for(i in KeyEventTrigger[eventType]){
		var ket = KeyEventTrigger[eventType][i];
		if(ket.cond(event)){
			ket.func(event);
			return;
		}
	}
}
