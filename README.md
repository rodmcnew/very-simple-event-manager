# very-simple-event-manager
A very simple event manager written in ES5
```js
var eventManager = new verySimpleEventManager();

eventManager.on('test', function (optionalEventData) {
    console.log(optionalEventData)
});

eventManager.trigger('test', {message: 'this is a test'});
