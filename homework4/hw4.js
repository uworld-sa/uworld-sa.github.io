var mountains = [2,1,5,0,3,4,7,2,3,1,0];
let watter = 0;
let sorted = [].concat(mountains);
sorted = sorted.sort(function(a,b){
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});

for (let i = 1; i <= sorted[0]; i++ ) {
    let find = 0;
    let count = 0;
    mountains.forEach(function (value) {
        if (value >= i && value > 0 && find == 0) {
            find++;
            count = 0;
        } else if (value >= i && value > 0 && find > 0) {
            find++;
            watter += count;
            count = 0;
        } else {
            count++;
        }
    });
}
console.log(watter);
