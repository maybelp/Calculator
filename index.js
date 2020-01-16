//Branching code
const readline = require('readline-sync'); 

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
    

console.log('Welcome to the Calculator \n');
console.log('==========================\n');
console.log('please enter the operator: ');
operator = readline.prompt();
try { // statements to try
  operatorName = getOperator(operator); // function could throw exception
}
catch (e) {
  operatorName = 'unknown';
  console.error(e);
  //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
console.log('please enter the first number: ');
fNumber = +readline.prompt();
console.log('Please enter the second number: ');
sNumber = +readline.prompt();
switch (operator) {
    case '+':
        result = fNumber + sNumber;
      break;
    case '-':
        result = fNumber - sNumber;
      break;
    case '*': 
        result = fNumber * sNumber;
        
      break;
    case '/':
        if (sNumber != 0) {result = fNumber / sNumber;}
        else{console.log (Error)}
      break;
    default:
     console.log(`Sorry, ${operator} NaN.`);
  }

console.log(' The answer is: %d', result);
}
init();
