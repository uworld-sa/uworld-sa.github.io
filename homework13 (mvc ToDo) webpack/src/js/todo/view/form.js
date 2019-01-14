import EventEmitter from '../EventEmitter';

export default class FormView extends EventEmitter {
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