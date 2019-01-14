import EventEmitter from '../EventEmitter';

export default class ListModel extends EventEmitter {
    constructor(items, root) {
        super();
        this._items = (items || []);
        this._rootElement = root;
    }

    getItems() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item);
        this.emit('add', item);
        this.saveItems();
    }

    editItem(data) {
        this._items.forEach((el,index) =>{
            if (el === data.oldItem) {
            this._items[index] = data.item;
        }
    });
        this.emit('rebuild');
        this.saveItems();
    }

    removeItem(item) {
        this._items.forEach((el,index) =>{
            if (el === item) {
            this._items.splice(index, 1);
            this.emit('remove', item);
        }
    });
        this.saveItems();
    }

    removeAll() {
        this._items = [];
        this.emit('rebuild');
        this.saveItems();
    }
    reverseAll() {
        let newItems = [];
        for (let i = this._items.length - 1; i >= 0 ; i-- ) {
            newItems.push(this._items[i]);
        }
        this._items = newItems;
        this.emit('rebuild');
        this.saveItems();
    }

    checkedItem(item, done = true) {
        item.checked = done;
        this.emit('done', item);
        this.saveItems();
    }

    itemDrag(data){
        this._items.forEach((el,index) =>{

            if (JSON.stringify(el) === JSON.stringify(data.item1)) {
            this._items[index] = data.item2;
        }
        if (JSON.stringify(el) === JSON.stringify(data.item2)) {
            this._items[index] = data.item1;
        }

    });
        this.emit('rebuild');
        this.saveItems();
    }

    saveItems() {
        try {
            localStorage.setItem(this._rootElement.id, JSON.stringify(this._items));
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('Превышен лимит');
            }
        }
    }
}