var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';


var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.fontWeight='None';

var titles=document.querySelectorAll('.title');
console.log(titles);
//titles[0].textContent='hello';  => for pratice 

var odd=document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}

var even=document.querySelectorAll('li:nth-child(even)');
for (var i=0; i<even.length; i++){
    even[i].style.fontWeight='green';
}