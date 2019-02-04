document.addEventListener('DOMContentLoaded',function () {

    let currentItem;

    document.getElementById('addForm').addEventListener('submit',function(event){
        let name = document.getElementById('dishName');
        let calories = document.getElementById('dishCalories');

        let formData = 'name=' + encodeURIComponent(name.value) + '&calories=' + encodeURIComponent(calories.value);
       let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        let xhr = new XHR();

        xhr.open('POST', `http://localhost:3000/api/foods`, false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function () {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                document.getElementById('message').innerText = response.message;
                document.getElementById('message').style.display = 'block';
            } else {
                alert('Ошибка');
            }
        }

        xhr.onerror = function () {
            alert('Ошибка ' + this.status);
        }

        xhr.send(formData);

        event.preventDefault()
    });
    document.getElementById('add').addEventListener('click',function(){
        let contentDiv = document.querySelectorAll('#content > div');
        for (let el of contentDiv) {
            el.style.display = "none";
        }
        document.getElementById('addpage').style.display = 'block';
        let title = document.getElementsByTagName('h1');
        title[0].innerText = 'Страница добавления';
    });
    document.getElementById('list').addEventListener('click',function(){
        let contentDiv = document.querySelectorAll('#content > div');
        for (let el of contentDiv) {
            el.style.display = "none";
        }
        document.getElementById('listpage').style.display = 'block';
        let title = document.getElementsByTagName('h1');
        title[0].innerText = 'Список продуктов';

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        let xhr = new XHR();

        xhr.open('GET', `http://localhost:3000/api/foods`, false);

        xhr.onload = function () {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                let ul = document.createElement('ul');

                for (let el of response.data) {
                    let li = document.createElement('li');
                    li.innerText = `Название: ${el.name}  Калорийность: ${el.calories}`;
                    ul.appendChild(li)
                }
                document.getElementById('listpage').innerText = '';
                document.getElementById('listpage').appendChild(ul);
            } else {
                alert('Ошибка');
            }
        }

        xhr.onerror = function () {
            alert('Ошибка ' + this.status);
        }

        xhr.send();
    });
    document.getElementById('front').addEventListener('click',function(){
        let contentDiv = document.querySelectorAll('#content > div');
        for (let el of contentDiv) {
            el.style.display = "none";
        }
        document.getElementById('frontPage').style.display = 'block';
        let title = document.getElementsByTagName('h1');
        title[0].innerText = 'Дневное меню';
    });
    document.getElementById('findDish').addEventListener('keyup',function(){
        currentItem = undefined;
        let name = document.getElementById('findDish');

        if (name.value == ''){
            let findList = document.getElementById('findList');
            findList.style.display = 'none';
            event.preventDefault();
            return
        }

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        let xhr = new XHR();

        xhr.open('GET', `http://localhost:3000/api/foods/find/${name.value}`, false);

        xhr.onload = function () {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                let findList = document.getElementById('findList');
                findList.style.display = 'block';
                findList.innerHTML = '';
                for (let el of response.data) {
                    let li = document.createElement('li');
                    li.innerText = `Название: ${el.name}  Калорийность: ${el.calories}`;
                    li.addEventListener('click',function () {
                        currentItem = el;
                        findList.innerHTML = '';
                        let input = document.getElementById('findDish');
                        input.value = el.name;
                    });
                    findList.appendChild(li)
                }
            } else {
                alert('Ошибка');
            }
        }

        xhr.onerror = function () {
            alert('Ошибка ' + this.status);
        }

        xhr.send();

        event.preventDefault();
    });
    document.getElementById('addFindDish').addEventListener('click',function(event){
        if (currentItem == undefined) {
            event.preventDefault();
            return
        }
        let menuList = document.getElementById('menuList');
        let li = document.createElement('li');
        li.innerText = `Название: ${currentItem.name}  Калорийность: ${currentItem.calories}`;
        li.dataset.calories = currentItem.calories;
        let button = document.createElement('button');
        button.innerText = 'Удалить'
        button.addEventListener('click',function () {
            this.remove();
        });
        let dishes = document.querySelectorAll('#menuList li');
        let count = 0;
        for (let el of dishes) {
            count += parseInt(el.dataset.calories);
        }
        count += currentItem.calories;
        let maxCalories = document.getElementById('countCalories').value;

        if (maxCalories == '') {
            alert('И кто тут забыл указать калории?');
            return
        }

        if (count >= parseInt(maxCalories)) {
            alert('Ой йой. Слишком много калорий. Потолстеешь');
            return
        }
        menuList.appendChild(li);

        event.preventDefault()
    });
});