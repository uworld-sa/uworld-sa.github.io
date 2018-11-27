document.addEventListener('DOMContentLoaded', function documentReady() {
    let button = document.getElementById('add');
    let list = document.getElementById('buy-list');
    let buy = document.getElementById('buy');
    let reverse = document.getElementById('reverse');
    let clearAll = document.getElementById('removeAll');

    button.addEventListener('click', addPurchase);
    reverse.addEventListener('click', reverseElements);
    clearAll.addEventListener('click', function () {
       list.innerHTML = '';
        saveTODO();
    });

    let json = localStorage.getItem('TODO');
    if (json !== undefined) {
        json = JSON.parse(json);
        for (let key in json) {
            createTODO(json[key].text,json[key].input,json[key].created,json[key].updated);
        }
    };

    function createTODO(textTODO,checked,created,updated) {
        let item = document.createElement('li');
        let text = document.createElement('span');
        let remove = document.createElement('button');
        let edit = document.createElement('button');
        let checkbox = document.createElement('input');
        remove.innerHTML = 'x';
        remove.setAttribute('class', 'removeItem');
        edit.innerHTML = 'Edit';
        edit.setAttribute('class', 'editItem');
        checkbox.type = "checkbox";
        checkbox.name = "done";
        checkbox.checked = checked;
        text.innerHTML = textTODO;
        text.setAttribute('class', 'text');
        item.appendChild(remove);
        item.appendChild(edit);
        item.appendChild(checkbox);
        item.appendChild(text);
        if (created !== undefined) {
            let createdTODO = document.createElement('span');
            createdTODO.innerHTML = created;
            createdTODO.setAttribute('class', 'created');
            item.appendChild(createdTODO);
        }
        if (updated !== undefined) {
            let updatedTODO = document.createElement('span');
            updatedTODO.innerHTML = updated;
            updatedTODO.setAttribute('class', 'updated');
            item.appendChild(updatedTODO);
        }
        list.appendChild(item);
    }
    function addPurchase() {
        if (buy.value == '') {
            return
        }
        let now = new Date();
        let time = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ":" + now.getSeconds();
        createTODO(buy.value,false,'created: ' + time)
        buy.value = '';
        saveTODO();
    }
    function reverseElements() {
        let elements = list.children;
        for (let i = elements.length - 1; i>=0; i -- ) {
            list.appendChild(elements[i]);
        }
        saveTODO();
    }
    function saveTODO() {
        console.log(list.children);
        let todoArr = [];
        for (let i = 0; i < list.children.length; i++) {
            console.log(list.children[i]);
            let textTODO = list.children[i].querySelector('.text');
            let createdTODO = list.children[i].querySelector('.created');
            let updatedTODO = list.children[i].querySelector('.updated');
            let input = list.children[i].querySelector('input');
            createdTODO = (createdTODO != undefined) ? (createdTODO.innerHTML) : (undefined);
            updatedTODO = (updatedTODO != undefined) ? (updatedTODO.innerHTML) : (undefined);
            todoArr.push({text: textTODO.innerHTML,input:input.checked,created:createdTODO,updated:updatedTODO});
        }
        localStorage.setItem('TODO', JSON.stringify(todoArr));
    }
    list.onclick = function(event) {
        // вывести тип события, элемент и координаты клика
        if (event.target.tagName == 'BUTTON' && event.target.className == 'removeItem') {
            event.target.parentElement.remove();
            saveTODO();
        } else if (event.target.tagName == 'BUTTON' && event.target.className == 'editItem') {
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
            let updatedTODO = event.target.parentElement.querySelector('.updated');
            console.log(updatedTODO);
            if (updatedTODO !== null) {
                updatedTODO.innerHTML = 'updated: ' + time;
            } else {
                let updatedTODO = document.createElement('span');
                updatedTODO.innerHTML = 'updated: ' + time;
                updatedTODO.setAttribute('class', 'updated');
                event.target.parentElement.appendChild(updatedTODO);
            }
            saveTODO();
        } else if (event.target.tagName == 'INPUT') {
            saveTODO();
        }
    }
});