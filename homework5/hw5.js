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
    });

    function addPurchase() {
        if (buy.value == '') {
            return
        }
        let item = document.createElement('li');
        let text = document.createElement('span');
        let remove = document.createElement('button');
        remove.innerHTML = 'x';
        remove.setAttribute('class', 'removeItem');
        remove.addEventListener('click', function () {
            this.parentElement.remove();
        });
        let now = new Date();
        let time = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ":" + now.getSeconds();
        text.innerHTML = buy.value + ' created: ' + time;
        item.appendChild(remove);
        item.appendChild(text);
        list.appendChild(item);
        buy.value = '';
    }
    function reverseElements() {
        let elements = list.children;
        for (let i = elements.length - 1; i>=0; i -- ) {
            list.appendChild(elements[i]);
        }
    }
});