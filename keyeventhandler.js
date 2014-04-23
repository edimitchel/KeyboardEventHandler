KeyEventTrigger = new Array();
var KeyEvents = {
	KEY_DOWN 	: 'keydown', 
	KEY_PRESS 	: 'keypress', 
	KEY_UP 		: 'keyup'
};

function addKeyEventTrigger(keyEventType, condition, actionOnTrigger){
	for(var prop in KeyEvents) {
	    if(!KeyEvents.hasOwnProperty(prop) && KeyEvents[prop] === keyEventType) {
	    	throw new Error("The event type isn't a KeyboardEvent type.");
		return;
	    }			
	}

	if(typeof KeyEventTrigger[keyEventType] == "undefined") 
		KeyEventTrigger[keyEventType] = new Array();

	KeyEventTrigger[keyEventType].push({
		cond : condition,
		func : actionOnTrigger
	});
}


function onKeyEvent(event){
	var eventType = event.type;
	for(i in KeyEventTrigger[eventType]){
		var ket = KeyEventTrigger[eventType][i];
		if(ket.cond(event)){
			ket.func(event);
			return;
		}
	}
}
