let word = "extravaganza";
let lastFour = word.slice(-4);
console.log(lastFour); 

const food = "The quick fox jumped over the lazy dog";
let modifiedFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(modifiedFood); 

const story = "The quick brown fox jumps over the lazy dog";
let countThe = story.toLowerCase().split("the").length - 1;
let countBrown = story.toLowerCase().split("brown").length - 1;
console.log(`"the" appears: ${countThe} times`); 
console.log(`"brown" appears: ${countBrown} times`);

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";

console.log(string1.includes("are")); 
console.log(string2.includes("sitting")); 


let upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord);


let lowerCaseWord1 = "amazing".toLowerCase();
let lowerCaseWord2 = "UndERneath".toLowerCase();
console.log(lowerCaseWord1); 
console.log(lowerCaseWord2); 

let titleCase = "A wonderful world"
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase); 

