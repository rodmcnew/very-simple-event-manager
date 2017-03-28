A very simple event manager written in ES5

```js
var eventManager = new VerySimpleEventManager();

eventManager.on('test', function (optionalEventData) {
    console.log('test event was triggered!', optionalEventData)
});

eventManager.trigger('test', {message: 'this is a test'});
