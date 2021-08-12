
alert('Введіть 3 своїх улюбленик сайти');
let li1 = prompt(`Введіть перше посилання на будь який сайт`)
let lin1 = document.getElementById('link1');
lin1.href = li1;
lin1.textContent = li1;


let li2 = prompt(`Введіть друге посилання на будь який сайт`)
let lin2 = document.getElementById('link2');
lin2.href = li2;
lin2.textContent = li2;


let li3 = prompt(`Введіть третє посилання на будь який сайт`)
let lin3 = document.getElementById('link3');
lin3.href = li3;
lin3.textContent = li3;


let bodyColor = +prompt(`Виберіть колір для сторінки:\nвведіть 1 щоб вибрати червоний колір;\nвведіть 2 щоб вибрати зелений колір;\nвведіть 3 щоб вибрати синій колір;`);

if(bodyColor === 1){
    document.body.style.backgroundColor = 'red';
}
else if(bodyColor === 2){
    document.body.style.backgroundColor = 'green';
}
else if(bodyColor === 3){
    document.body.style.backgroundColor = 'blue';
}
let fontFamily = +prompt(`Виберіть тип шрифта для сторінки:\nвведіть 1 щоб вибрати звичайний шрифт;\nвведіть 2 щоб вибрати курсивний шрифт;`);
let ff = document.body.children;
if(fontFamily === 1){
    for(let i = 0; i < ff.length; i++){
        ff[i].style.fontStyle = 'normal';
    }
}
else if(fontFamily === 2){
    for(let i = 0; i < ff.length; i++){
        ff[i].style.fontStyle = 'italic';
    }
}


let posTitle = +prompt(`Виберіть вирівнювання для заголовка h1:\nвведіть 1 щоб вибрати вирівнювання по лівій стороні;\nвведіть 2 щоб вибрати вирівнювання по центру;\nвведіть 3 щоб вибрати вирівнювання по правій стороні;`);


if(posTitle === 1){
    document.body.firstElementChild.style.textAlign = 'left';
}
else if(posTitle === 2){
    document.body.firstElementChild.style.textAlign = 'center';
}
else if(posTitle === 3){
    document.body.firstElementChild.style.textAlign = 'right';
}


let ffParagraph = +prompt(`Виберіть фон для параграфа з посиланнями:\nвведіть 1 щоб вибрати оранжевий колір;\nвведіть 2 щоб вибрати фіолетовий колір;\nвведіть 3 щоб вибрати рожевий колір;`);

if(ffParagraph === 1){
    document.body.firstElementChild.nextElementSibling.style.backgroundColor = 'orange';
}
else if(ffParagraph === 2){
    document.body.firstElementChild.nextElementSibling.style.backgroundColor = 'violet';
}
else if(ffParagraph === 3){
    document.body.firstElementChild.nextElementSibling.style.backgroundColor = 'pink';
}




let colorparagraph = +prompt(`Виберіть колір для параграфа з посиланнями:\nвведіть 1 щоб вибрати коричневий колір;\nвведіть 2 щоб вибрати жовтий колір;\nвведіть 3 щоб вибрати білий колір;`);

if(colorparagraph === 1){
    document.body.firstElementChild.nextElementSibling.style.color = 'brown';
}
else if(colorparagraph === 2){
    document.body.firstElementChild.nextElementSibling.style.color = 'yellow';
}
else if(colorparagraph === 3){
    document.body.firstElementChild.nextElementSibling.style.color = 'white';
}

let colorlink = +prompt(`Виберіть колір для самих посилань:\nвведіть 1 щоб вибрати коричневий колір;\nвведіть 2 щоб вибрати жовтий колір;\nвведіть 3 щоб вибрати білий колір;`);
let link = document.body.getElementsByTagName('a');
console.log(link);

if(colorlink === 1){
    for(let i = 0; i < link.length; i++){
        link[i].style.color = 'brown';
    }
}
else if(colorlink === 2){
    for(let i = 0; i < link.length; i++){
        link[i].style.color = 'yellow';
    }
}
else if(colorlink === 3){
   for(let i = 0; i < link.length; i++){
        link[i].style.color = 'white';
    }
}

let colortextdiv = +prompt(`Виберіть колір тексту для елемента div:\nвведіть 1 щоб вибрати коричневий колір;\nвведіть 2 щоб вибрати жовтий колір;\nвведіть 3 щоб вибрати білий колір;`);


let div0 = document.body.getElementsByTagName('div');
console.log(div0);

if(colortextdiv === 1){
    div0[0].style.color = 'brown';
}
else if(colortextdiv === 2){
    div0[0].style.color = 'yellow';
}
else if(colortextdiv === 3){
    div0[0].style.color = 'white';
}

let fztextdiv = +prompt(`Виберіть розмір тексту для елемента div:\nвведіть 1 щоб вибрати 20px;\nвведіть 2 щоб вибрати 30px;\nвведіть 3 щоб вибрати 40px;`);
let div1 = document.body.getElementsByTagName('div');

if(fztextdiv === 1){
    div1[0].style.fontSize = '20px';
}
else if(fztextdiv === 2){
    div1[0].style.fontSize = '30px';
}
else if(fztextdiv === 3){
    div1[0].style.fontSize = '40px';
}

let fwtextdiv = +prompt(`Виберіть товщину тексту для елемента div:\nвведіть 1 щоб вибрати жирну товщину;\nвведіть 2 щоб вибрати звичайну товщину;\nвведіть 3 щоб вибрати cітлішу товщину;`);
let div2 = document.body.getElementsByTagName('div');

if(fwtextdiv === 1){
    div2[0].style.fontWeight = 'bold';
}
else if(fwtextdiv === 2){
    div2[0].style.fontWeight = 'normal';
}
else if(fwtextdiv === 3){
    div2[0].style.fontWeight = 'lighter';
}

let mark = +prompt(`Виберіть тип маркера для списку:\nвведіть 1 щоб вибрати маркер в виді круга;\nвведіть 2 щоб вибрати маркер в виді точки;\nвведіть 3 щоб вибрати маркер в виді квадрата;`);

let marker = document.getElementsByTagName('li');
console.log(marker);

if(mark === 1){
    for(let i = 0; i < marker.length; i++){
        marker[i].style.listStyle = 'circle';
    }
}

else if(mark === 2){
    for(let i = 0; i < marker.length; i++){
        marker[i].style.listStyle = 'disc';
    }
}


else if(mark === 3){
    for(let i = 0; i < marker.length; i++){
        marker[i].style.listStyle = 'square';
    }
}