//ForLoopsAndArrays code
const readline = require('readline-sync'); 
function isZero(value) {
    return typeof value === 0; 
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
    try { // statements to try
        operatorName = getOperator(myOperator); // function could throw exception
    }
    catch (e) {
        operatorName = 'unknown';
        console.error(e);
        //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
    }

console.log('Welcome to the Calculator \n');
console.log('==========================\n');
console.log('please enter the operator: ')
operator = readline.prompt();
operator = getOperator(operator);
console.log('How many numbers do you want to + ? ');
numberAmount = parseInt(readline.prompt()); 
numberArray = [];
for (let i = 0; i < numberAmount; i++) {
    console.log('Please enter the number %d:', (i+1));
    numberArray[i] = +readline.prompt();
  }
switch (operator) {
    case '+':
        result = numberArray.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0);
      break;
    case '-':
        for(let i = 1; i < numberAmount; i++) -numberArray[i];
        result = numberArray.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0);
      break;
    case '*': 
        result = 1;
        for (let i = 0; i < numberAmount; i++) {
            result *= numberArray[i];
        }
      break;
    case '/':
        result = numberAmount[0]; 

        for (let i = 1; i < numberAmount; i++) {
            result /= numberArray[i];
        }
      break;
    default:
     console.log(`Sorry, ${operator} NaN.`);
  }

console.log(' The answer is: %d', result);
}
init();
