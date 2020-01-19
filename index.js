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
function printVowelQuantity(oQuantity, aQuantity, eQuantity, iQuantity,uQuantity){
  console.log('The vowel counts are:\n');
  console.log(`A: ${aQuantity} \n E: ${eQuantity} \n I: ${iQuantity} \n O: ${oQuantity} \n U: ${uQuantity}`);
}
function performOneVowelCountingCalculation(){
  console.log("Please enter a string: ");
  myStr = readline.prompt();
  const chars = myStr.split('');
  aQuantity = 0;
  eQuantity = 0;
  iQuantity = 0;
  oQuantity = 0;
  uQuantity = 0; 
  for (let i=0; i<chars.length; i++){
    if (chars[i] == "a" || chars[i] == "A") {++aQuantity;}
    else if (chars[i] == "e" || chars[i] == "E") {++eQuantity;}
    else if (chars[i] == "i" || chars[i] == "I") {++iQuantity;}
    else if (chars[i] == "o" || chars[i] == "O") {++oQuantity;}
    else if (chars[i] == "u" || chars[i] == "U") {++uQuantity;}

  } 
  printVowelQuantity(oQuantity, aQuantity, eQuantity, iQuantity,uQuantity);
}

function performOneArithmeticCalculation(){
  console.log('please enter the operator (+, -, * or /): ');
  cnslOperator = readline.prompt();
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
function printWelcomeMessage(){
  console.log('Welcome to the Calculator \n');
  console.log('==========================\n');
  console.log('to quit, click Ctrl+C');

}
function getCalculationMode(){
  console.log('Which calculator mode do you want?\n 1) Arithmetic\n 2) Vowel counting');
  mode = readline.prompt();
  return mode;
}
//main program
function init(){
  const ARITHMETIC_MODE = '1';
  const VOWEL_COUNTING_MODE = '2';  
  printWelcomeMessage();
        while(true){
          const calculationMode = getCalculationMode();
          if (calculationMode === ARITHMETIC_MODE) {
            performOneArithmeticCalculation();
            } else if (calculationMode === VOWEL_COUNTING_MODE) {
            performOneVowelCountingCalculation();
            }
           }
                  
}            

init();
