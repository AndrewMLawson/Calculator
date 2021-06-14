//Initialize display and evaluator variables
let evaluator = {
    display: "",
    num1: "",
    num2: "",
    operator: "",
    result: "",
}

//debugging
update("1");
update("1");
update("delete");
update("2");
update("addition");
update("3");
update("delete");
update("3");
update("4");
update("evaluate");
console.log(evaluator.num1);
console.log(evaluator.operator);
console.log(evaluator.num2);
console.log(evaluator.result);


//Input Functions

//Update evaluator object function
function update(buttonInput){
    if (isNaN(buttonInput) === false && evaluator.operator === ""){
        evaluator.num1 = evaluator.num1.concat(buttonInput);
    } else if (isNaN(buttonInput) === false && evaluator.operator){
        evaluator.num2 = evaluator.num2.concat(buttonInput);
    } else if (buttonInput === "." &&  evaluator.operator === ""){
        if (evaluator.num1.indexOf(".") === -1) {
            evaluator.num1 = evaluator.num1.concat(buttonInput);
        }
    } else if (buttonInput === "." && evaluator.operator){
        if (evaluator.num2.indexOf(".") === -1) {
            evaluator.num2 = evaluator.num2.concat(buttonInput);
        }
    } else if (buttonInput === "clear") {
        evaluator.display = "";
        evaluator.operator = "";
        evaluator.num1 = "";
        evaluator.num2 = "";
        evaluator.result = "";
    } else if (buttonInput === "delete"){
        if (evaluator.operator === ""){
            evaluator.num1 = evaluator.num1.slice(0, -1);
        } else {
            evaluator.num2 = evaluator.num2.slice(0, -1);
        }
    } else if (buttonInput === "addition") {
        evaluator.operator = "addition"
    } else if (buttonInput === "subtraction"){
        evaluator.operator = "subtraction"
    } else if (buttonInput === "multiplication"){
        evaluator.operator = "multiplication"
    } else if (buttonInput === "division") {
        evaluator.operator = "division"
    } else if (buttonInput === "evaluate"){
        evaluate(evaluator)
    }
}

//Evaluate Function
function evaluate(o){
    let f1 = parseFloat(o.num1);
    let f2 = parseFloat(o.num2);
if (o.operator === "addition") {
    evaluator.result = add(f1, f2);
} else if (o.operator === "subtraction"){
    evaluator.result = subtract(f1, f2);
} else if (o.operator === "multiplication"){
    evaluator.result  === multiply(f1, f2);
} else {
    evaluator.result === divide(f1, f2);
}
}


//Basic math functions
function add(num1, num2) {
    console.log(num1);
    console.log(num2);
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

