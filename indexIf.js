const readline = require('readline-sync');
console.log('Welcome to the Calculator \n');
console.log('==========================\n');
console.log('please enter the operator: ')
operator = readline.prompt();
console.log('Please enter the first number:');
number1 = +readline.prompt();
console.log('Please enter the second number:');
number2 = +readline.prompt();
if (operator == '+') { result = number1 + number2; }
else if (operator == '-') { result = number1 - number2; }
else if (operator == '*') { result = number1 * number2; }
else { result = (operator == '/')?number1 / number2:'Error'; }
console.log(result);
console.log(' %d %s %d = %d', number1, operator, number2, result);