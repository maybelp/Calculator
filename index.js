//ForLoopsAndArrays code
const readline = require('readline-sync'); 
function isZero(numberArray) {
  for (let i =1; i < numberArray.length; i++){
    if (numberArray[i] === 0) 
       {throw new Error('InvalidNumberForDenominator');}
  } 
}
function logMyErrors(e){
  console.error (e);
  }

function wrongOne(){
    throw new Error('InvalidOperatorNo');

}
function getOperator(oprtr) {
    
    let voperator = ['+', '-', '*', '/'];
    let postVoperator = 0;
    let found = false;
    while (postVoperator < voperator.length){
        if (voperator[postVoperator] != oprtr) { ++postVoperator; }
        else{
            postVoperator = voperator.length;
            found = true;
        }    
    }
    if (found == true) {
      return oprtr;
    } else {
      wrongOne(); // throw keyword is used here
    }
}
function init(){
let result;  
console.log('Welcome to the Calculator \n');
console.log('==========================\n');
console.log('please enter the operator: ')
operator = readline.prompt();
console.log('How many numbers do you want to %s ? ', operator);
numberAmount = parseInt(readline.prompt()); 
numberArray = [];
for (let i = 0; i < numberAmount; i++) {
    console.log('Please enter the number %d:', (i+1));
    numberArray[i] = +readline.prompt();
  }
try { // statements to try
    operator = getOperator(operator); // function could throw exception
    if (operator == '/') isZero(numberArray);// function could throw exception
    
  }
catch (e) {
    logMyErrors(e); // error handler 
}

switch (operator) {
    case '+':
        result = numberArray.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0);
      break;
    case '-':
        result = numberArray[0];
        console.log("hola result %d : ", result );
        for (let i = 1; i < numberArray.length; i++) {
          result -= numberArray[i];
        } 

      break;
    case '*': 
        result = 1;
        for (let i = 0; i < numberArray.length; i++) {
            result *= numberArray[i];
        }
      break;
    case '/':
        result = numberArray[0]; 
        for (let i = 1; i < numberArray.length; i++) {
            result /= numberArray[i];
        }
      break;
    default:
     console.log(`Sorry, ${operator} NaN.`);
  }

console.log(' The answer is: %d', result);
}
init();
