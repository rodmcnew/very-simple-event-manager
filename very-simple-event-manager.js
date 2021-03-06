function VerySimpleEventManager() {

    /**
     * Is a map of event-name to handler-array for each kind of event
     * 
     * @type {{}}
     */
    var handlers = {};
    
    /**
     * Add a listener
     *
     * @param {string} eventName The event's name
     * @param {function} handler A function that is called when the event is triggerd. Arg 1 will be the optional 'event-data' object
     */
    this.on = function (eventName, handler) {
        if (!handlers[eventName]) {
            handlers[eventName] = []
        }
        handlers[eventName].push(handler);
    };

    /**
     * Trigger an event
     *
     * @param {string} eventName The event's name
     * @param {object} [eventData] Optional object containing extra data for the event. Is passed to handler functions
     */
    this.trigger = function (eventName, eventData) {
        if (!handlers[eventName]) {
            return;
        }
        handlers[eventName].forEach(function (handler) {
            handler(eventData);
        });
    }
}
