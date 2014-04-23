var instance_KEH;

function KeyEventHandler(context){
	KeyEventHandler.prototype.context = context ? context : false;
	instance_KEH = this;
	window.onkeydown = instance_KEH.onKeyEvent;
	window.onkeyup = instance_KEH.onKeyEvent;
	window.onkeypress = instance_KEH.onKeyEvent;
}

KeyEventHandler.prototype.KETriggers = new Array();
KeyEventHandler.prototype.consoleDebug = false;

KeyEventHandler.prototype.addKeyEvent = function(_type, _condition, _actionPerformed) {
	var kevent = new KeyEvent(_type, _condition, _actionPerformed);
	return this.addKeyEventByObj(kevent);
};

KeyEventHandler.prototype.addKeyEventByObj = function(ke) {
	if(typeof this.KETriggers[ke.type] == "undefined") 
		this.KETriggers[ke.type] = new Array();
	this.KETriggers[ke.type].push(ke);

	return ke;
};

KeyEventHandler.prototype.onKeyEvent = function(event) {
	var eventType = event.type;
	var arrEvents = instance_KEH.KETriggers[eventType] || new Array();
	//console.log(instance_KEH.KETriggers);
	for(i in arrEvents){
		var ket = arrEvents[i];
		console.log(ket);
		instance_KEH.log(ket);
		if(ket.condition(event) === true){
			ket.onPerformed(event);
			instance_KEH.onPerformed(ket);
			return;
		}
	}
};

KeyEventHandler.prototype.onPerformed = function(keyevent) {
	this.log(keyevent);
};

KeyEventHandler.prototype.log = function(ke) {
	if(this.consoleDebug === true){
		console.debug(ke.toString());
	}
};

var KeyEvents = {
	KEY_DOWN 	: 'keydown',
	KEY_PRESS 	: 'keypress',
	KEY_UP 		: 'keyup'
}


function KeyEvent(_type, _condition, _actionPerformed){
	this.type = _type === null 
		? KeyEvents.ALL : _type.toString().toLowerCase();

	this.condition = _condition;
	this.action = _actionPerformed;
	this.result = new Object();
	var bool = true;
	for(var prop in KeyEvents) {
	    if(!KeyEvents.hasOwnProperty(prop) && KeyEvents[prop] === this.type) {
	    	throw new Error("The event type isn't a KeyboardEvent type.");
			return;
	    }			
	}

}

KeyEvent.prototype.onPerformed = function(event) {
	return this.result[parseInt(new Date().getTime()/1000)] = this.action(event);
};

KeyEvent.prototype.toString = function() {
	return "KeyEvent => [type= "+this.type+"," +
		" condition= "+this.condition.toString().substring(this.condition.toString().indexOf("{") + 1, this.condition.toString().lastIndexOf("}"))+"," +
			" action= "+this.action.toString().substring(this.action.toString().indexOf("{") + 1, this.action.toString().lastIndexOf("}"))+", result= "+this.result.toString()+"]\n";
};
