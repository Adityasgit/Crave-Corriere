// for buttons
let rbtn = document.getElementById("rbtn");
let lbtn = document.getElementById("lbtn");
let page = document.getElementsByClassName("flexmax")[0];
let pause = document.getElementById("pause");
// for infinte slides
let i = document.getElementsByClassName("individualrest");
let len = i.length;
console.log(len);
let j = 1;
let max = 1;
console.log(rbtn);
console.log(page);

rbtn.addEventListener('click', () => {
    page.scrollBy(1, 0);
    if (max == len + 1) {
        page.scrollBy(-10000, 0);
        max = 1;
    }
    max++;
});



lbtn.addEventListener('click', () => {
    page.scrollBy(-1, 0);
    if (max == 0) {
        page.scrollBy(10000, 0);
        max = len;
    }
    max--;
});
let signal = 1;
pause.addEventListener('click', () => {
    if (signal == 1) {
        signal = 0;
        pause.innerHTML = pause.innerHTML.replace("ll", "l");
        pause.className = 'play';
        console.log(signal);
        return signal;
    }
    if (signal == 0) {
        signal = 1;
        pause.innerHTML = pause.innerHTML.replace("l", "ll");

        console.log(signal);
        return signal;
    }
})
console.log(signal);


setInterval(() => {
    if (signal == 1) {
        if (j == len) {
            page.scrollBy(-10000, 0);
            j = 1;
        }
        else if (j != len) {
            page.scrollBy(1, 0);
            j++;
        }
    }
}, 4000);


