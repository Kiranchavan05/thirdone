
var itemList=document.querySelector('#items');

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='lightblue';
console.log(itemList.parentElement.parentElement.parentElement);


//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello 4";

//lastChild
console.log(itemList.lastChild);


//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='itteem 1';

//firstChild
console.log(itemList.firstChild);


//nextsibling
console.log(itemList.nextSibling);


//nextElementSibling
console.log(itemList.nextElementSibling);  //it is comming null cause not available of nextelemtsibling

//previousSibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

//create Element
var newDiv=document.createElement('Div');
//setAttribute
newDiv.setAttribute('title','Hello Div');

//createtestnode
var newDivText=document.createTextNode('HELLo');
//appendchild
newDiv.appendChild(newDivText);

//now go head and add HELLo word before item lister
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);

console.log(newDiv);



