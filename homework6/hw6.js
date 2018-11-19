function createDodo(dodo){
    let dodoPrototype = document.getElementById('smiley');
    let dodo_clone = dodoPrototype.cloneNode(true);
    dodo_clone.removeAttribute('id');
    let propertiesList = document.getElementById('property');
    let property = propertiesList.cloneNode(true);
    property.removeAttribute('id');
    let actionsList = document.getElementById('actions');
    let actions = actionsList.cloneNode(true);
    actions.removeAttribute('id');
    let dodos = document.getElementById('dodos');
    let dodo_item = document.createElement('div');
    dodo_item.className = 'dodo-item';
    dodo_item.appendChild(dodo_clone);
    dodo_item.appendChild(property);
    dodo_item.appendChild(actions);
    //name
    let name = dodo_item.querySelector('.name');
    name.innerHTML = dodo.name();
    //health
    let health = dodo_item.querySelector('.health span');
    health.innerHTML = dodo.health();
    //satiety
    let satiety = dodo_item.querySelector('.satiety span');
    satiety.innerHTML = dodo.satiety();
    //happy
    let happy = dodo_item.querySelector('.happy span');
    happy.innerHTML = dodo.happy();
    //strenght
    let strenght = dodo_item.querySelector('.strenght span');
    strenght.innerHTML = dodo.strenght();
    //append to list
    dodos.appendChild(dodo_item);
    delete dodoPrototype;
    delete propertiesList;
    return dodo_item;
}
function dodo(name_input) {
    let name = (name_input) ? name_input : 'Dodo';
    let health = 100;
    let satiety = 100;
    let happy = 100;
    let strenght = 100;
    let blocked = false;
    let die = false;

    let timer = setInterval(() => this.step(), 3000);
    this.name = function() {
        return name;
    };
    this.health = function() {
        return health;
    };
    this.satiety = function() {
        return satiety;
    };
    this.happy = function() {
        return happy;
    };
    this.strenght = function() {
        return strenght;
    };
    this.blocked = function() {
        return blocked;
    };
    this.die = function() {
        return die;
    };
    this.step = function() {
        (health - 5 <= 0) ? health = 0 : health -= 5;
        (satiety - 5 <= 0) ? satiety = 0 : satiety -= 5;
        (happy - 5 <= 0) ? happy = 0 : happy -= 5;
        (strenght - 5 <= 0) ? strenght = 0 : strenght -= 5;
        if (health <= 0) {
            die = true;
            clearInterval(timer);
            var elements = dodo_item.querySelectorAll('.actions button');
            for (var i=0; i < elements.length; i++) {
                elements[i].disabled = true;
            }
        }
        this.update();
    }
    this.eat = function() {
        if (blocked == true) {
           return
        }
        satiety += 15;
        happy += 3;
        health += 5;
        strenght -= 5;
        this.update();
        blocked = true;
        setTimeout(() => blocked = false, 500);
    }
    this.play = function() {
        if (blocked == true) {
            return
        }
        satiety -= 10;
        happy += 15;
        strenght -= 10;
        this.update();
        blocked = true;
        setTimeout(() => blocked = false, 500);
    }
    this.walk = function() {
        if (blocked == true) {
            return
        }
        satiety -= 5;
        happy += 5;
        health += 5;
        strenght -= 10;
        this.update();
        blocked = true;
        setTimeout(() => blocked = false, 500);
    }
    this.sleep = function() {
        if (blocked == true) {
            return
        }
        satiety -= 10;
        happy += 5;
        strenght += 5;
        this.update();
        blocked = true;
        setTimeout(() => blocked = false, 500);
    }
    this.threat = function() {
        if (blocked == true) {
            return
        }
        health += 25;
        satiety -= 5;
        happy -= 25;
        this.update();
        blocked = true;
        setTimeout(() => blocked = false, 500);
    }
    this.train = function() {
        if (blocked == true) {
            return
        }
        health -= 10;
        satiety -= 10;
        happy += 5;
        strenght += 23;
        this.update();
        blocked = true;
        setTimeout(() => blocked = false, 500);
    }
    this.read = function() {
        if (blocked == true) {
            return
        }
        health -= 3;
        satiety -= 5;
        happy += 15;
        strenght -= 5;
        this.update();
        blocked = true;
        setTimeout(() => blocked = false, 500);
    }
    this.update = function() {
        (health <= 0) ? health = 0 : health ;
        (satiety <= 0) ? satiety = 0 : satiety;
        (happy <= 0) ? happy = 0 : happy;
        (strenght <= 0) ? strenght = 0 : strenght;
        if (health > 100) {
            dodo_item.querySelector('.health span').innerHTML = 100;
            health = 100;
        } else {
            dodo_item.querySelector('.health span').innerHTML = health;
        }
        if (satiety > 100) {
            dodo_item.querySelector('.satiety span').innerHTML = 100; satiety =100;
        } else {
            dodo_item.querySelector('.satiety span').innerHTML = satiety;
        }
        if (happy > 100) {
            dodo_item.querySelector('.happy span').innerHTML = 100; happy =100;
        } else {
            dodo_item.querySelector('.happy span').innerHTML = happy;
        }
        if (strenght > 100) {
            dodo_item.querySelector('.strenght span').innerHTML = 100; strenght =100;
        } else {
            dodo_item.querySelector('.strenght span').innerHTML = strenght
        }
        if (health >= 75 && satiety >= 75 && happy >= 75 && strenght >= 75) {
            dodo_item.querySelector('.smiley').classList.remove('normal','angry','furious','rip');
        }
        if ((health < 75 && health >= 50) || (satiety < 75 && satiety >= 50) || (happy < 75 && happy >= 50) || (strenght < 75 && strenght >= 50)) {
            dodo_item.querySelector('.smiley').classList.add('normal');
            dodo_item.querySelector('.smiley').classList.remove('angry','furious','rip');
        }
        if ((health < 50 && health >= 25) || (satiety < 50 && satiety >= 25) || (happy < 50 && happy >= 25) || (strenght < 50 && strenght >= 25)) {
            dodo_item.querySelector('.smiley').classList.add('angry');
            dodo_item.querySelector('.smiley').classList.remove('normal','furious','rip');
        }
        if (health < 25 || satiety < 25 || happy < 25 || strenght < 25 ) {
            dodo_item.querySelector('.smiley').classList.add('furious');
            dodo_item.querySelector('.smiley').classList.remove('normal','angry','rip');
        }
        if (health <= 0) {
            dodo_item.querySelector('.smiley').classList.add('rip');
            dodo_item.querySelector('.smiley').classList.remove('normal','angry','furious');
        }
    }
    let dodo_item = createDodo(this);
    dodo_item.querySelector('.eat').addEventListener('click', () => this.eat());
    dodo_item.querySelector('.play').addEventListener('click', () => this.play());
    dodo_item.querySelector('.walk').addEventListener('click', () => this.walk());
    dodo_item.querySelector('.sleep').addEventListener('click', () => this.sleep());
    dodo_item.querySelector('.threat').addEventListener('click', () => this.threat());
    dodo_item.querySelector('.train').addEventListener('click', () => this.train());
    dodo_item.querySelector('.read').addEventListener('click', () => this.read());
}

var dodoCount = 0;



document.addEventListener('DOMContentLoaded', function documentReady() {
    let add = document.getElementById('add-dodo');
    add.addEventListener('click', function () {
        if (dodoCount == 0) {
            new dodo('Dodo');
        } else {
            new dodo('Dodo' + dodoCount);
        }
        dodoCount++;
    });
});