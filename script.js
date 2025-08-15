let firstnum = prompt("1-qaramni kiriting");
let znak = prompt(" Tanlang \n 1)+ \n 2)- \n 3)* \n 4)/");
let secondnum = prompt("2-qaramni kiriting");
 let abox = document.createElement('div');
 let but = document.createElement('button');
 let natija = document.createElement('div');
 document.body.appendChild(abox);
 document.body.appendChild(but);
 document.body.appendChild(natija);
 let a = document.createElement('div');
 let b = document.createElement('div');
 let c = document.createElement('div');
 abox.appendChild(a);
 abox.appendChild(b);  
 abox.appendChild(c);
 abox.style.width = '450px';
  abox.style.height = '100px';
   abox.style.backgroundColor = 'yellow';
   abox.style.padding = '20px';
   abox.style.fontSize = '30px';
abox.style.display = 'flex';
abox.style.justifyContent = 'space-around';
abox.style.alignItems = 'center';
   but.style.marginTop = '70px';
   but.style.width = '300px';
   but.style.height = '75px';
   natija.style.fontSize = '40px';
natija.style.width = ' 300px';
natija.style.height = '75px';
natija.style.marginTop = '70px';
natija.style.backgroundColor = 'red';
natija.style.textAlign = 'center';
natija.style.display = 'flex';
natija.style.justifyContent = 'center';
natija.style.alignItems = 'center';
   but.style.backgroundColor = 'green';
   but.innerText = 'check';
   but.style.color = 'white';
   but.style.display = 'flex';
   but.style.justifyContent = 'center';
   but.style.alignItems = 'center';
   but.style.fontSize = '40px';
document.body.style.display = 'flex';
document.body.style.paddingTop = '70px';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
a.style.width = '55px';
a.style.height = '55px';
a.style.display = 'flex';
a.style.justifyContent = 'center';
a.style.alignItems = 'center';
a.style.border = '2px black solid';
a.innerText = firstnum;
c.innerText = secondnum;
b.style.width = '55px';
b.style.height = '55px';
b.style.display = 'flex';
b.style.justifyContent = 'center';
b.style.alignItems = 'center';
b.style.border = '2px black solid';

c.style.width = '55px';
c.style.height = '55px';
c.style.display = 'flex';
c.style.justifyContent = 'center';
c.style.alignItems = 'center';
c.style.border = '2px black solid';

let sign;

if (znak === '1') {
    sign = b.innerText = "+" ;
  } else if  (znak === '2') {
    sign = b.innerText = "-" ;
  } else if (znak === '3') {
    sign = b.innerText = "*" ;
  } else if (znak === '4') {
    sign = b.innerText = "/" ;
  } ;
let result;

if (znak === '1') {
  result = firstnum + secondnum;
} else if (znak === '2') {
  result = firstnum - secondnum;
} else if (znak === '3') {
  result = firstnum * secondnum;
} else if (znak === '4') {
  result = firstnum / secondnum;
} else {
  result = "Please try again later!";
}
but.addEventListener('click', ()=> {
   natija.innerText = 'Natija:' + result
});
