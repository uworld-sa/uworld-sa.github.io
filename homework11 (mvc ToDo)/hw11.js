class EventEmitter {
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
class ListModel extends EventEmitter {
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

class ListController  extends EventEmitter {
    constructor(rootElement) {
        super();
        this._root = rootElement;

        let json = localStorage.getItem(rootElement.id);
        let items = [];

        if (json !== undefined) {
            items = JSON.parse(json);
        }

        this._model = new ListModel(items,this._root);

        this._formView = new FormView(this._model, this._root);

        this._listView = new ListView(this._model, this._root);

        this._listView.on('itemCheckboxChange', item => {
            this._model.checkedItem(item, !item.checked);
        });
        this._listView.on('itemEditClick', (data) => {
            this._model.editItem(data);
        });
        this._listView.on('itemDeleteClick', item => {
            this._model.removeItem(item);
        });
        this._listView.on('itemDrag', (data) => {
            this._model.itemDrag(data);
        });
        this._formView.on('formSubmit', (data) => {
            this._model.addItem(data);
        })
        this._formView.on('reverseList', () => {
            this._model.reverseAll();
        });
        this._formView.on('removeAllItem', () => {
            this._model.removeAll();
        });
    }
}

var dragSrcEl = null;

class ListView extends EventEmitter {
    constructor(model, rootElement) {
        super();
        this._model = model;
        this._listContainer = document.createElement('ul');
        this.buildList();
        this._listContainer.classList.add('buy-list');
        rootElement.appendChild(this._listContainer);

        this._model.on('remove', item => {
            this.removeItem(item);
        });

        this._model.on('add', item => {
            let li = this.createTODO(item);
            this._listContainer.appendChild(li);
        });

        this._model.on('done', item => {
            this.checkItem(item);
        });

        this._model.on('rebuild', () => {
            this.buildList();
        });

        this._model.on('rebuild', () => {
            this.buildList();
        });

        this._model.on('rebuild', () => {
            this.buildList();
        });
    }

    buildList() {
        this._listContainer.innerHTML = '';
        this._model.getItems().forEach(item => {
            let li = this.createTODO(item);
            this._listContainer.appendChild(li);
        })
    }

    createTODO(item) {
        let li = document.createElement('li');
        li.task = item;
        let text = document.createElement('span');
        let remove = document.createElement('button');
        let edit = document.createElement('button');
        let checkbox = document.createElement('input');
        remove.innerHTML = 'x';
        remove.setAttribute('class', 'removeItem');
        remove.addEventListener('click', event => {
            this.emit('itemDeleteClick', item);
        });
        edit.innerHTML = 'Edit';
        edit.setAttribute('class', 'editItem');
        edit.addEventListener('click', event => {
            if (event.target.tagName == 'BUTTON' && event.target.className == 'editItem') {
                event.stopPropagation();
                let span = event.target.parentElement.querySelector('.text');
                let button = event.target.parentElement.querySelector('.editItem');
                span.setAttribute("contenteditable", "true");
                span.classList.add('edited');
                button.innerHTML = 'Save';
                button.setAttribute('class', 'saveItem');
            } else if (event.target.tagName == 'BUTTON' && event.target.className == 'saveItem') {
                let span = event.target.parentElement.querySelector('.text');
                let button = event.target.parentElement.querySelector('.saveItem');
                span.setAttribute("contenteditable", "false");
                span.classList.remove('edited');
                button.innerHTML = 'Edit';
                button.setAttribute('class', 'editItem');
                let now = new Date();
                let time = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ":" + now.getSeconds();
                let oldItem = Object.assign({}, item);
                item.text = span.innerHTML;
                item.updated = 'updated: ' + time;
                item.checked = false;
                let data = {oldItem,item};
                this.emit('itemEditClick', data);
            }
        });
        checkbox.type = "checkbox";
        checkbox.name = "done";
        checkbox.checked = item.checked;
        checkbox.addEventListener('change', event => {
            this.emit('itemCheckboxChange', item);
        });
        text.innerHTML = item.text;
        text.setAttribute('class', 'text');
        li.appendChild(remove);
        li.appendChild(edit);
        li.appendChild(checkbox);
        li.appendChild(text);
        if (item.created !== undefined) {
            let createdTODO = document.createElement('span');
            createdTODO.innerHTML = item.created;
            createdTODO.setAttribute('class', 'created');
            li.appendChild(createdTODO);
        }
        if (item.updated !== undefined) {
            let updatedTODO = document.createElement('span');
            updatedTODO.innerHTML = item.updated;
            updatedTODO.setAttribute('class', 'updated');
            li.appendChild(updatedTODO);
        }
        li.draggable = true;
        li.addEventListener('dragstart', event => {
            event.target.style.opacity = '0.4';

            dragSrcEl = this;

            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('task', JSON.stringify(event.target.task));
        }, false);
        li.addEventListener('dragenter', event => {
            event.target.classList.add('over');
        }, false);
        li.addEventListener('dragover', event => {
            if (event.preventDefault) {
                event.preventDefault();
            }

            event.dataTransfer.dropEffect = 'move';
            return false;
        }, false);
        li.addEventListener('dragleave', event => {
            event.target.classList.remove('over');
        }, false);
        li.addEventListener('drop', event => {
            if (event.stopPropagation) {
                event.stopPropagation();
            }

            if (dragSrcEl.task != event.target.task) {
                let data = {item1:JSON.parse(event.dataTransfer.getData('task')),item2:event.target.task};
                this.emit('itemDrag', data);
            }

            return false;
        }, false);
        li.addEventListener('dragend', event => {
            event.target.style.opacity = '1';
        }, false);

        return li;
    }



    removeItem(item) {
        [].forEach.call(this._listContainer.childNodes, element => {
            if (element.task === item) {
                this._listContainer.removeChild(element);
            }
        })
    }

    checkItem(item) {
        [].forEach.call(this._listContainer.childNodes, element => {
            if (element.task === item) {
                element.querySelector('input').checked = item.checked;
            }
        })
    }
}

class FormView extends EventEmitter {
    constructor(model, root) {
        super();

        this._model = model;
        this._root = root;
        this.createForm(this._root);
        this.createAdditionalButton(this._root);
    }

    createForm(root) {
        let form = document.createElement('form');
        form.innerHTML = `
            <div class="add-block">
                <input class="buy" type="text" name="text"/>
                <input class="add" type="submit" value="add">
            </div>
        `;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let value = form.text.value.trim();
            if (value) {
                let now = new Date();
                let time = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ":" + now.getSeconds();
                this.emit('formSubmit', {
                    text: value,
                    checked: false,
                    created: 'created: ' + time
                });
                form.text.value = '';
            }
        });
        root.appendChild(form);
    }
    createAdditionalButton(root) {
        let AdditionalButton = document.createElement('div');
        AdditionalButton.classList.add("control-buttons");

        let reverseButton = document.createElement('button');
        reverseButton.innerText = 'Reverse list';
        reverseButton.classList.add('reverse');
        reverseButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.emit('reverseList');
        });
        AdditionalButton.appendChild(reverseButton);

        let removeAllButton = document.createElement('button');
        removeAllButton.innerText = 'Clear list';
        removeAllButton.classList.add('removeAll');
        removeAllButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.emit('removeAllItem');
        });
        AdditionalButton.appendChild(removeAllButton);

        root.appendChild(AdditionalButton);
    }
}

document.addEventListener('DOMContentLoaded', function documentReady() {
    new ListController(document.getElementById('buy-list'));
});