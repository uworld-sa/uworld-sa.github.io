import EventEmitter from '../EventEmitter';

var dragSrcEl = null;

export default class ListView extends EventEmitter {
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