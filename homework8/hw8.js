(function($) {
    var square = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    var squareGame = [].concat(square);
    var squareList;
    let size = 60;

    function shuffleSquare() {
        for(let i = 0; i < 500; ++i) {
            switch (Math.round(3 * Math.random())) {
                case 0:
                    move(37);
                    break;
                case 1:
                    move(38);
                    break;
                case 2:
                    move(39);
                    break;
                case 3:
                    move(40);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        shuffleSquare();
        squareList = document.getElementById('square');
        let newGame = document.getElementById('newGame');
        newGame.addEventListener('click', function(){
            shuffleSquare();
        });
        startGame();
    });
    document.addEventListener('keydown', function (e) {
        move(e.which);
        if (e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40) {
            if (JSON.stringify(square) === JSON.stringify(squareGame)) {
                alert('Поздравляю!!!');
            }
        }
    });

    function move(keyCode) {
        let pos = squareGame.indexOf(0);
        if (keyCode == 37) {
            if (pos % 4 != 3 ) {
                let leftItem = $('#square li[data-index=' + squareGame[pos + 1] + ']');
                let hole = $('#square li[data-index=' + squareGame[pos] + ']');
                leftItem.css('left',(pos % 4) * size);
                hole.css('left',((pos + 1) % 4) * size);
                let tempItem = squareGame[pos];
                squareGame[pos]=squareGame[pos+1];
                squareGame[pos+1]=tempItem;
            }
        }
        if (keyCode == 39) {
            if (pos % 4 != 0 ) {
                let rightItem = $('#square li[data-index=' + squareGame[pos - 1] + ']');
                let hole = $('#square li[data-index=' + squareGame[pos] + ']');
                rightItem.css('left',(pos % 4) * size);
                hole.css('left',((pos - 1) % 4) * size);
                let tempItem = squareGame[pos];
                squareGame[pos]=squareGame[pos-1];
                squareGame[pos-1]=tempItem;
            }
        }
        if (keyCode == 38) {
            if (Math.floor(pos / 4) != 3 ) {
                let topItem = $('#square li[data-index=' + squareGame[pos + 4] + ']');
                let hole = $('#square li[data-index=' + squareGame[pos] + ']');
                topItem.css('top',Math.floor(pos / 4) * size);
                hole.css('top',(Math.floor(pos / 4) + 1) * size);
                let tempItem = squareGame[pos];
                squareGame[pos]=squareGame[pos+4];
                squareGame[pos+4]=tempItem;
            }
        }
        if (keyCode == 40) {
            if (Math.floor(pos / 4) != 0 ) {
                let topItem = $('#square li[data-index=' + squareGame[pos - 4] + ']');
                let hole = $('#square li[data-index=' + squareGame[pos] + ']');
                topItem.css('top',Math.floor(pos / 4) * size);
                hole.css('top',(Math.floor(pos / 4) - 1) * size);
                let tempItem = squareGame[pos];
                squareGame[pos]=squareGame[pos-4];
                squareGame[pos-4]=tempItem;
            }
        }
    }

    function startGame() {
        squareGame.forEach(function (value, index) {
            let li = document.createElement('li');
            if (value === 0) {
                li.innerText = '';
            } else {
                li.innerText = value;
            }
            li.setAttribute('data-index', value);
            li.style.left = (index % 4) * size + 'px';
            li.style.top = Math.floor(index / 4) * size + 'px';
            li.classList.add('item' + value);
            squareList.appendChild(li);
        });
        $( "#square li" ).draggable({
            snap: true,
            stack: "#square li",
            containment: "#square",
            scroll: false,
            revert: function (el) {
                if (el == false) {
                    return true
                } else if (el[0].dataset.index != 0) {
                    return true
                }

                let posHole = squareGame.indexOf(parseInt(el[0].dataset.index));
                let posItem = squareGame.indexOf(parseInt(this[0].dataset.index));

                if (posHole - posItem == -1) {
                    move(37);
                } else if (posHole - posItem == 1) {
                    move(39);
                } else if (posHole - posItem == -4) {
                    move(38);
                } else  if (posHole - posItem == 4) {
                    move(40);
                } else {
                    return true
                }
            },
            revertDuration: 200
        });
        $( "#square li" ).droppable();

    }

})(jQuery)