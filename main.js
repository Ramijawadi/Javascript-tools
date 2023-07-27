window.onload = function () {
  document.querySelector("h1").style.color = "blue";
};

// window.alert("hello from js file");
console.log("helllo from console");
console.error("Error");
console.table(["rami", "aymen", "salah"]);

var myName = "Rami";

/*js normale avant ES6 */
console.log("hello  " + myName);

/*ES6*/

console.log(` hello ES6  ${myName}`);

/*
data type 
String
Number
Array => Object
Object
Boolean*/

console.log(typeof "rami jawadi");
console.log(typeof 6000);
console.log(typeof [10, 20, 15]);
console.log(typeof ["os", "am", "sa"]);
console.log(typeof { name: "rami", age: "20", country: "Tun" });
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

/*
what's variable
*/

var name = "Rami";

console.log(name);

/*
var
-redeclare(yes)
-access  before declare(Undifined)
-variable Scope Drama [Added to window objects](yes)
-Block or function Scope()

let
-redeclare(no => error)
-access  before declare(error)
-variable Scope Drama(no)
-Block or function Scope()


const 
-redeclare(no => error)
-access  before declare(error)
-variable Scope Drama(no)
-Block or function Scope()
*/

var aabb = 1;
console.log(aabb);

/*
skip lines

*/

console.log("rami \njawadi \nwebdev");

/* concatenation*/

var name = "jawadi";
var lastname = "Rami";

document.write(name + " " + lastname);

console.log(name, lastname);

/* template literales ou template Strings */

let a = "we love";
let b = "javascript";
let c = "And";
let d = "programming";

console.log(a + " " + b + "\n" + c + " " + d);
console.log(`${a} ${b} 
${c} ${d}`);

/*exemple clean code with ES6*/

let title = "Rami jawadi";
let des = "Senior web developer ";

let markUp = `

<div class='card'>
  <div class='child'>
  <h2>${title}</h2>
  <p>${des}</p>
  </div>
</div>

`;

document.write(markUp);
console.log(`${title} ${des}`);

/* challenges */

var TitleName = "Elzero",
  DescriptionCard = "Elzeroweb school",
  DateTime = "25/10";

var challenge = `

<div>
<h3> hello  ${TitleName}</h3>
<p>${DescriptionCard}</p>
<span>${DateTime}</span>
</div>


`;

document.write(challenge);
document.write(challenge);
document.write(challenge);

/* operations arythmetique*/

console.log(10 + 20); //30
console.log(10 + "rami"); //10rami
console.log(10 - "rami"); //NaN
console.log(typeof NaN); //number
console.log(10 * 2); //20
console.log(20 / 3); //6.666

console.log(10 % 2);
console.log(11 % 2);

//++increment
var num = 1;
num++, console.log(num);

//--decrement
var num1 = 1;
num1--, console.log(num1);

console.log(-100); //-100
console.log(-"100"); //-100
console.log(-"-100"); //100
console.log(-"rami"); //NaN not a  number
console.log(-"15.5"); //-15.5
console.log(+null); //-0
console.log(+false); //-0
console.log(+true); //-1

console.log(Number("100")); //100 number

/* type casting*/
let aa = "10";
let bb = 20;
let cc = true;
console.log(+aa + bb); //30
console.log(aa + bb); //1020
console.log(false - true); //0-1 => -1

/*
opérateurs d'affectation
*/

let z = 10; //10

z = z + 20; //30

z += 40; // z = z + 40
z -= 50; // z = z - 50
z /= 50; //z= z/50

console.log(+"20" * -"-100"); //2000

/* number methods*/

console.log((100).toString()); // 100 string
console.log((100.5555555).toFixed(2)); //fixer nmbr afficheè apres la virgule
console.log(parseInt("100.500")); // nmbr entier 100
console.log(parseFloat("100.500 rami")); //100.5 nbr reele avec le virgule

console.log(Number.isInteger("100")); //false : fait un check si entier ou nn
console.log(Number.isInteger(100.5)); //false :fait un check si entier ou nn
console.log(Number.isInteger(100)); //true :fait un check si entier ou nn

console.log(Number.isNaN("rami")); //true  l'operation not e number

/* Math Object*/

console.log(Math.round(99.2)); //99
console.log(Math.round(99.5)); //100

console.log(Math.ceil(99.2)); //100 incrementer vers max
console.log(Math.floor(99.9)); //99 decre vers min

console.log(Math.min(10, 20, 40)); //10
console.log(Math.max(10, 50, 40)); //50
console.log(Math.pow(2, 4)); //2*2*2*2 = 16
console.log(Math.random()); // numero aléatoire
console.log(Math.trunc(99.5)); //99

/*challenge*/

console.log(parseInt(Math.min(100, 200.5, 100, 2.4)));
console.log(1000 * 5 * Math.trunc(2.4));

//tous retourne 2
console.log(Math.trunc(2.4));
console.log(Math.floor(2.4));
console.log(parseInt(2.4));
console.log(Math.round(2.4));

console.log((Math.trunc(200.5) / Math.ceil(2.4)).toFixed(2));
console.log(parseInt(Math.round(Math.trunc(200.5) / Math.ceil(2.4))));

/*
String Methodes
indexOf(Value [] , start [optionel] 0)
lastIndexOf(Value [] , start [optionel] Lenght)
slice(start [] , end [optionel] not include end)
split(Seoarator [optionel , limit [optionel]])
*/

let k = "Rami jawadi";

console.log(k.indexOf("j")); //6
console.log(k.indexOf("j,7")); //-1
console.log(k.lastIndexOf("j")); //5

console.log(k.slice(4, 7)); //ja
let za = "alex vidal";
console.log(za.slice(-5)); //vidal
console.log(za.slice(0, 5)); //alex
// slice retourne partie coupé de (start , combien de caracteres)
console.log(za.repeat(4));
console.log(za.split("")); // ["a","l","e","x","","v","i","d","a","l"]
console.log(za.split(" ", 1)); // ["alex"] => return 1er partie de table

/*
smaller than
smaller than or Equal
*/

console.log(10 == "10"); // comparer les valeurs seulement
console.log(-100 == "-100"); //comparer les valeurs seulement
console.log(10 != "10"); //comparer les valeurs seulement

console.log(10 === "10"); //comparer les valeurs + type
console.log(10 !== "10"); //comparer les valeurs + type
console.log(10 !== 10); //comparer les valeurs + type

console.log(10 > 20); //false
console.log(10 > 10); //false
console.log(10 >= 10); //true

/*logical Operators


! Not
&& And
|| Or
*/

console.log(true); //true
console.log(!true); //false
console.log(!(10 == "10")); //false
console.log(10 == "10" && 10 > 50); //false
console.log(10 == "10" || 10 > 8 || 10 > 50); //true

/* 
control flow 
if condition
if
else if
else

if(condition){
block of code 

}
*/

let price = 100;
let discount = false;
let discountAmount = 30;

let country = "Tunisia";

if (discount === true) {
  price -= discountAmount; //price = price -discountAmount
} else if (country === "Tunisia") {
  price -= 60;
}
console.log(price);

//condition ? if true  : if false

let theGender = "Male";
let theName = "rami";
let theAge = 32;
theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = "Male" ? "Mr" : "Mrs";
document.write(result);
console.log(`hello ${theName}`);

/* many conditions */

theAge < 20
  ? console.log("20")
  : theAge > 20 && theAge < 60
    ? console.log("20 to 60")
    : theAge > 60
      ? console.log("more than 60")
      : console.log(unknown);

/*switch statement 
  switch(expression) {
    Case 1 :
    //code block
    break;
    Case 2 :
    //code block
    break;
    Default:
    //code block
  }
  */

let day = 2;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  default:
    console.log("Unknown day");
}

//chellenge test
// selon job return salar y
let job = "Support";
let salary = 0;

switch (job) {
  case "Manager":
    salary += 8000;
    console.log(`the salary is ${salary}`);
    break;

  case "IT":
  case "Support":
    salary += 6000;
    console.log(`the salary is ${salary}`);
    break;
  case "Developper":
  case "Designer":
    salary += 7000;
    console.log(`the salary is ${salary}`);
  default:
    salary = 4000;
    console.log(`the salary is ${salary}`);
}

/*Array*/

let myFriends = ["rami", "salah", "amine"];
console.log(`hello ${myFriends[0]}`); //hello rami
console.log(`${myFriends[1][0]}`); // s

/*Array Methods
Length*/

console.log(myFriends.length); //3
myFriends[2] = "jamil";
console.log(myFriends);

//ajouter dynamic a la fin de table
myFriends[myFriends.length] = "tarek";
console.log(myFriends);

//update last element dans le table
myFriends[myFriends.length - 1] = "samir";
console.log(myFriends);

/* Array methods
unshift("" , "")  add element in the first
push("", "") add element in the End
shift() remove / supprimer 1er element de table
pop() remove / supprimer last element de table
*/

myFriends.unshift(" med slah", " kamel ");
console.log(myFriends);
myFriends.push("ghassen", "alex");
console.log(myFriends);
let first = myFriends.shift();
console.log(myFriends);

console.log(`first name is ${first}`); // first name is med salah
let last = myFriends.pop();
console.log(myFriends);
console.log(`last name is ${last}`); //last name is alex

/*Array methods [search]*/
console.log(myFriends);
console.log(myFriends.indexOf("jamil")); //index de jamil dans table
console.log(myFriends.lastIndexOf("samir")); //index de samir apres recherche a partir de end c

/* sort 
reverse*/

// sort organiser alphabetique
//reverse organiser le maniere opposè

/*loop
loop on Sequences*/

let Myfriends = [1, 2, "rami", "alex", "amine", "salah"];

console.log(Myfriends[0]);
console.log(Myfriends[1]);
console.log(Myfriends[2]);
console.log(Myfriends[3]);
console.log(Myfriends[4]);

//autre methode

for (let i = 0; i < 5; i++) {
  console.log(Myfriends[i]);
}

//stocker seulement les name dans un array
let onlyName = [];

for (let i = 0; i < Myfriends.length; i++) {
  if (typeof Myfriends[i] === "string") {
    onlyName.push(Myfriends[i]);
  }
}
console.log(onlyName);

/*

loop control
Break // stopper le loop et sortir
Continue // continuer l execusion sans sortir 
Label // utuliser pour stocker une codition ou etc .. et on peux appeler dans break par exemple

*/

let products = ["keyboard", "Mouse", 10, 20, "pen", 30, 40, "monitor"];
let product = ["keyboard", "Mouse", "pen", "monitor"];

let colors = ["red", "green", "blue"];

//console log vas afficher jusqua le pen puis fait le check
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  if (products[i] === "pen") {
    break;
  }
}

//console log vas parcourir et fait le check puis afficher sans pen
for (let i = 0; i < products.length; i++) {
  if (products[i] === "pen") {
    break;
  }
  console.log(products[i]);
}

for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
}

mainLoop: for (let i = 0; i < product.length; i++) {
  console.log(product[i]);

  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`-${colors[j]}`);
    if (colors[j] === "green") {
      break;
      // break mainLoop; va stoper et sortir  dès la premiere iteration quand il trouve le "Green"
    }
  }
}

/*
Product Practice

*/

let productss = ["keyboard", "Mouse", "pen", "monitor", "Iphone", "pad"];

let colorss = ["black", "red", "yellow"];

let count = 3;
document.write(`<h1> show ${count} products</h1>`);

for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`<h1> ${[i + 1]}  ${productss[i]}</h1>`);
  for (let j = 0; j < colorss.length; j++) {
    document.write(`<p>${colorss[j]}</p>`);
  }

  document.write(`</div>`);
}


/*
Loop
while // puisque condition est vrai executer le block
*/

let tab = ["keyboard", "Mouse", "pen", "rami"];


let index = 0;

while (index < tab.length) {
  console.log(tab[index]);
  index++;

}

/*
Do / While // executer le block puis check me while
*/
let i = 0;
do {
  console.log(i); //0
  i++;

} while (false)
console.log(i)//1


/*loop challenge / exercice */

let Admins = ["Ahmed", "Oussema", "Rami", "Sayed", "Samir"];
let Emplyees = ["Amjad", "samah", "Ameer", "Omar", "Amany", "Semia", "Rafik", "Rayen"];
let AdminCount = 3;

document.write(`<div> we have ${AdminCount} Admins </div>`)
document.write(`<hr>`);

document.write(`<div>`);

for (let i = 0; i < AdminCount; i++) {

  document.write(`<p> Tha Admin For Team ${[i + 1]} Is ${Admins[i]}</p>`);
  document.write(`<h3>Team Members:</h3>`);
  for (let j = 0; j < Emplyees.length; j++) {
    if (Admins[i][0] == Emplyees[j][0]) {

      document.write(`<p> ${-[j + 1]} ${Emplyees[j]}</p>`)

    }
  }

  document.write(`<hr>`);

}
document.write(`</div>`);

/***************************/

/*Function 
dry : dont repeat yourself

 */


/* au lieu de repeter */
console.log("hello Rami");
console.log("hello salah");
console.log("hello amine");
console.log("hello samir");

/* on fait just un appel a la function*/

function sayHello(userName) {
  console.log(` Hello ${userName}`)

}
sayHello("Rami"); // Hello Rami
sayHello("salah"); //Hello salah
sayHello("amine");//Hello amine


/* Function advanced Exemples*/

function Person(userName, age) {

  if (age < 20) {

    console.log("this app is not suitable for you")
  }
  else {
    console.log(` hello ${userName} your age is ${age}`)
  }


}
Person("Rami", 32);
Person("Rami", 40);
Person("Rami", 25);
Person("Rami", 15);


function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;

    }
    console.log(i);
  }
}
generateYears(1992, 2023, 2020); // afficher tous sauf 2020

/*

Function 
Rturn
automatic Semicolone insertion
Interrupting*/

function calc(num1, num2) {

  return num1 + num2;


}
let Rs = calc(10, 5);
console.log(Rs)

/**************************/

function Generate(start, end) {

  for (i = start; i <= end; i++) {
    console.log(i)
    if (i === 15) {
      return `interruption`; // return stope l execution
    }

  }
}

Generate(5, 18)

/*Function default value*/

function Persons(username, age = "unknwon") {

  // if (age === undefined){

  //   age ="unknown"
  // }

  // age = age || "unknown"

  return `Hello your name is ${username} and your age is ${age}`

}
console.log(Persons("Rami"));



/*

Function advanced
parametres
default
Rest
Loop
Condition
*/

function showInfo(user = "unknown", age = "unknown", rate = 0, show = "yes", ...skills) {

  document.write(`<div>`)

  document.write(`<h1> the user is ${user}</h1>`)
  document.write(`<p> the age is ${age}</p>`)
  document.write(`<p>the hour rate is $${rate}</p>`)
  if (show === "yes") {

    if (skills.length > 0) {

      document.write(`<p>skills : ${skills.join(" | ")}</p>`)

    } else {

      document.write(`<p>skills : No skills</p>`)
    }
  }
  else {

    document.write(`<p>skills are hidden</p>`)
  }


  document.write(`</div>`)


}
showInfo("rami", 30, 20, "html", "css")


/* Anonymos function*/  //function sans nom


document.getElementById("show").onclick = function () {

  console.log("show")

}

/* regular function*/


let print = function (num) {
  return num;
}
console.log(print(20));
/* arrow function */

let printt = (num) =>
  num;

console.log(printt(20));


/*DOM  
document object model*/



let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");



console.log(myIdElement);
console.log(myTagElement);
console.log(myClassElement);
console.log(myQueryElement); // retourne premier span
console.log(myQueryAllElement);


console.log(document.title); //afficher le title
console.log(document.body);//afficher le body
console.log(document.forms[0])//1er forme
console.log(document.links[0]); //https//google.com

/*
 
Create element DOM*/

let myElement = document.createElement("div"); //cree element div
let mayAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product one")
let myComment = document.createComment("this is Div")

myElement.className = "product";
myElement.setAttributeNode(mayAttr);
myElement.setAttribute("data-custom", "Testing"); //modifier attribute
//Append comment

myElement.appendChild(myComment);


//Append Text to element : append = ajouter 
myElement.appendChild(myText);


//Append Element to Body

document.body.appendChild(myElement);
console.log(myElement)

/*DOM event  */
//onclick  +  onmouseenter + onmouseleave + onscroll..
let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("clicked")
}

window.onscroll = function () {
  console.log("skrolling ..")
}


/* Validation form
preventDefault // blocker  l'event 
*/ 


let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
console.log(userInput);
console.log(ageInput);

document.forms[0].onsubmit = function (e) {
  
  let userValid = false;
  let ageValid = false;

  console.log(userInput.value);
  console.log(userInput.value.length);
  if (userInput.value !== "" && userInput.value.length <= 10) {
    console.log("valid")
    userValid = true;
  }

  if (ageInput.value !== ""){

    console.log( "age is valid");
    ageValid = true ;
  }


  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
 


};

document.links[2].onclick = function(event) {

  console.log(event);
  event.preventDefault(); //bloquer l'event search on Google
  
  };

  /* event simaulation 
  Focus
  click
  onblur*/
  let one = document.querySelector(".one");
  let two = document.querySelector(".two");


  window.onload = function () {
    one.focus();  // focus sur input 1 chaque reload de page 
  };

  two.onblur = function() {

    document.links[1].click(); //link vers google si je sort de input 2

  }


  /*
  DOM 
  Css
  cssText
  removeProperty(propertyName)
  setProoerty(propertyName , value , property)
  */

  let element = document.getElementById("div");

  element.style.color = "red";
  element.style.fontSize = "5rem";

  element.style.cssText ="color:green ; font-size:20px ; opacity: 0.9"
  //si on utulise le cssText il va dominer tous le css qui existe 


  element.style.removeProperty("color"); //effacer le color
  element.style.setProperty("font-size" , "6rem" , "important");


  /*
  BOM : browser object model
  alert message
  confirm message
  prompt message
  
  */

  // alert("hello");


//   let confirmed = confirm("are you sure to deelete this item");
//   console.log(confirmed); // boolean : true if ok , false if cancel


//   if (confirmed === true){
// console.log("item deleted")

//   }else {

//     console.log("items not deleted")
//   }


// let promtMessage = prompt("what is your suitable day ! write the day from 3 characteres");
// console.log(promtMessage);

/* BOM
setTimeout
clearTimeout

*/

setTimeout (function (){

console.log(`message`);
}, 3000 )

//another methode setTimeout  with params 

setTimeout(sayHello,3000 , "Rami", 29)
function sayHello (user , age) {

console.log(`hello im ${user} and my age is ${age} `)

}

//clear timeout 

let counter = setTimeout(sayHello ,3000 , "alex", 20)

function sayMsg() {
console.log(`im a message`);

}

let btn = document.getElementById("clear");
btn.onclick = function() {

  clearTimeout(counter);
};


//scrolling to top js native


let bntt = document.getElementById("up");

window.onscroll = function () {

  if(window.scrollY >= 300){

    bntt.style.display = "block";
  }else 
  bntt.style.display = "none";
}

bntt.onclick = function () {
  window.scrollTo ({

    left: 0 ,
    top:0 ,
    behavior : "smooth",
  })
}

/* destructuring array*/


let f = 1 ;
let g = 2 ;
let h = 3 ;

let friends = ["rami", "salah", "amine"];

[f, g , h] = friends;

console.log(f);
console.log(g);
console.log(h)

//afficher salah seulement
 
let [ ,y, ]= friends;
console.log(y)

/* destructuring array => swapping */
let book = "Video";
let video = "Book";

/*save book variable in stash*/
 let stash = book ; //Video

 //change Book value

 book= video ; //Book
 //change Video value

 video = stash 

 console.log(book);
 console.log(video);

 //methode destruturing
 [book, video] = [video, book]