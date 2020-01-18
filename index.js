//Functions-and-While-Loops
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
function tryAndCatchOprtr(anOperator, numberArray){
  try { // statements to try
    operator = getOperator(anOperator); // function could throw exception
    if (operator == '/') {
       isZero(numberArray);
    }// function could throw exception
    
  }
  catch (e) {
    logMyErrors(e); // error handler 
  }
  return operator;
}

function operationSolution(operator, numberArray){
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
}

function operatorCreation(cnslOperator){
  function getNumber(){

    console.log('How many numbers do you want to %s ? ', cnslOperator);
    numberAmount = new Number(+readline.prompt()); 
    numberArray = [];
  
    number = new Number();//is an object and inherit from Number class
    for (let i = 0; i < numberAmount; i++) {
            rightNumber = false;
            //while to validate numbers
            while (!rightNumber){
              console.log('Please enter number %d:', (i+1));
              number = +readline.prompt();

              if (isNaN(number)){
                console.log("100, 2, 74 are examples of numbers");
                
              } else {
                numberArray[i] = number;
                rightNumber = true;  
              }
            }   
    }
    return numberArray;
  }
  //return operator = tryAndCatchOprtr(cnslOperator, rNumberArray),rNumberArray = getNumber();
  numberArray = getNumber();
  let operator = tryAndCatchOprtr(cnslOperator,numberArray);
  operationSolution(operator, numberArray);
  console.log(' The answer is: %d', result);
  
}



function init(){
let result;  
console.log('Welcome to the Calculator \n');
console.log('==========================\n');
console.log('to quit, click Ctrl+C');

var numberAmount;

const pause = () => new Promise(res => setTimeout(res, 0));

process.on ('SIGINT',() => {
  console.log('you clicked Ctrl+C!');
  process.exit(1);
});

(async function() {
      while(true){
          console.log('please enter the operator (+, -, * or /): ');
          cnsloperator = operatorCreation(readline.prompt());
           await pause();
          
      } 
    })();        
}
init();
