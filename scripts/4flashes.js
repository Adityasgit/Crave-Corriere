let flashes = document.getElementsByClassName("imgs-4");

console.log(flashes);
let jo = 0;
let stop = 0;
setInterval(() => {
    if ((jo >= 0 && jo <= 3) && stop == 0) {
        flashes[0].scrollBy(0, 1);
        flashes[3].scrollBy(0, 1);
        console.log(jo)
        jo++;
    }
    else {
        stop = 1;
        console.log(jo)
        flashes[0].scrollBy(0, -1);
        flashes[3].scrollBy(0, -1);
        jo--;
        if (jo == 0) {
            stop = 0;
        }
    }
}, 2000);

let jok = 0;
let stopk = 0;
setInterval(() => {
    if ((jok >= 0 && jok <= 3) && stopk == 0) {
        flashes[1].scrollBy(0, 1);
        flashes[2].scrollBy(0, 1);
        jok++;
    }
    else {
        stopk = 1;
        flashes[1].scrollBy(0, -1);
        flashes[2].scrollBy(0, -1);
        jok--;
        if (jok == 0) {
            stopk = 0;
        }
    }
}, 4000);
