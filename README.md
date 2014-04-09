KeyboardEventHandler
====================

Small tool for simplify management of keyboard event.


How to use
----------

The usage is simple. Just call the function *addKeyEventTrigger* :

```
/*
	@keyEventType 		: keydown, keyup, keypress
	@condition 			: Return if the event respect your condition
	@actionOnTrigger 	: Action performed when the event is triggered
*/
addKeyEventTrigger(EventType keyEventType,Function condition, Function actionOnTrigger);
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
	}
);

```
