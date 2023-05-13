let content = [`Feeling Hungry?`, `Craving for Food?`, `Looking for Taste?`, `Cooking gone Wrong?`, `Delicious Food!`, `Mouth watering dishes!`,`Up to 60% off`,`On-Time Delivery`];
let docinsert = document.getElementById("imgs-4-relative1");
let curr = 0;
setInterval(() => {

    docinsert.innerHTML = content[curr];
    curr++;
    if (curr == content.length) {
        curr = 0;
    }
}, 2000);
console.log(docinsert)