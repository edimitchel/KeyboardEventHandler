KeyboardEventHandler
====================

Small tool to simplify management of keyboard event.


How to use
----------

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
addKeyEventTrigger(EventType keyEventType,Function condition, Function actionOnTrigger);

// Attach the function to the Keyboard Event Listener
window.onkeydown = onKeyEvent;
```

For example, I wish to refresh the page when I press Ctrl+R and my cursor is in my form with id "form".

```
addKeyEventTrigger(
	EventTypes.KEY_UP,
	function(event){
		return event.ctrlKey && event.which == 82 && event.target.id == "form";
	},function(e){
		// Prevent the default behavior to do what I want
		e.preventDefault();

		// Refresh my page
		window.location.reload();

		return false;
	}
);

window.onkeydown = onKeyEvent;
```


