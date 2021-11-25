var myHeading = document.querySelector('h1');


var xxx = 'xxx';
var yyy = 10;
var myVariable = [1,'Bob','Steve',10];

myHeading.textContent = multiply(9,8);




function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}



var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/firefox-icon.jpg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.jpg');
    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  
  if(!myName || myName === null) {
  setUserName();
  } else {
  
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is not cool, ' + myName;
  }
};


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
};

myButton.onclick = function() {
  setUserName();
};