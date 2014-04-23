KeyboardEventHandler
====================

Small tool to simplify management of keyboard event.


How to use with function
------------------------

Include it!

```
<script src="keyeventhandler.js"></script>
```


The usage is simple. Just call the function *addKeyEventTrigger* and attach the *onKeyEvent* function on the keyboard event listener:

```
/*
	@keyEventType 		: keydown, keyup, keypress
	@condition 			: Return if the event respect your condition
	@actionOnTrigger 	: Action performed when the event is triggered
*/
addKeyEventTrigger(KeyEvents keyEventType,Function condition, Function actionOnTrigger);

// Attach the function to the Keyboard Event Listener
window.onkeydown = onKeyEvent;
```
___

For example, I wish to refresh the page when I press Ctrl+R and my cursor is in my form with id "form".

```
addKeyEventTrigger(
	KeyEvents.KEY_UP,
	function(event){
		return event.ctrlKey && event.which == 82 && event.target.id == "form";
	},function(e){
		// Refresh my page
		window.location.reload();

		return false;
	}
);

window.onkeydown = onKeyEvent;
```


How to use with object
----------------------

__It's more simply to use__

Include it!

```
<script src="keyeventhandler.js"></script>
```
___

The usage is simple. Just call instance a KeyEventHandler object and call the method *addKeyEvent* (no more things):

```
new KeyEventHandler();

/*
	@keyEventType 		: a KeyEvents property [keydown, keypress, keyup]
	@condition 			: Return if the event respect your condition
	@actionOnTrigger 	: Action performed when the event is triggered
*/
{instance}.addKeyEvent(KeyEvents keyEventType,Function condition, Function actionOnTrigger);

```

For example, I wish to refresh the page when I press R and the shift key.

```
var keh = new KeyEventHandler();
keh.addKeyEvent(
	KeyEvents.KEY_UP,
	function(event){
		return event.shitfKey && event.which == 82;
	},function(e){
		// Refresh my page
		window.location.reload();

		return false;
	}
);
```

___
__Enjoy it in your project__
___


