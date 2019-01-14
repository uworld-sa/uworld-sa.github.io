export default class EventEmitter {
    constructor() {
        this._events = [];
    }

    on(event, handler) {
        this._events.push({
            event,
            handler
        })
    }

    emit(event, data) {
        for (let i = 0; i < this._events.length; i++) {
            if (this._events[i].event === event) {
                this._events[i].handler(data);
            }
        }
    }

}