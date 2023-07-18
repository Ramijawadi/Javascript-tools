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

let myFriends = ["rami" , "salah" , "amine"]
console.log(`hello ${myFriends[0]}`) //hello rami
console.log(`${myFriends[1][0]}`) // s

/*Array Methods
Length*/

console.log(myFriends.length); //3
myFriends[2]= "jamil";
console.log(myFriends)

//ajouter dynamic a la fin de table 
myFriends[myFriends.length]= "tarek"
console.log(myFriends)

//update last element dans le table
myFriends[myFriends.length- 1 ]="samir"
console.log(myFriends)


/* Array methods
unshift("" , "")  add element in the first
push("", "") add element in the End
shift() remove / supprimer 1er element de table
pop() remove / supprimer last element de table
*/
 
myFriends.unshift(" med slah" , " kamel ");
console.log(myFriends)
myFriends.push("ghassen" , "alex")
console.log(myFriends)
let first = myFriends.shift();
console.log(myFriends)

console.log(`first name is ${first}`) // first name is med salah
let last = myFriends.pop();
console.log(myFriends)
console.log(`last name is ${last}`)//last name is alex

/*Array methods [search]*/
console.log(myFriends);
console.log(myFriends.indexOf("jamil")); //index de jamil dans table
console.log(myFriends.lastIndexOf("samir"))//index de samir apres recherche a partir de end c

/* sort 
reverse*/

// sort organiser alphabetique
//reverse organiser le maniere opposè 


