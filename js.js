        //Variable for making mathOp(); not run if an error is found.
var ifErrorFound;

function calculate() {
    
    var ifErrorFound = "0",
        num1 = document.getElementById("in1").value,
        num2 = document.getElementById("in3").value,
        op = document.getElementById("operator").value;
    
    checkOpBefore(op, num1, num2);
    
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    
    checkOpAfter(op, num1, num2);
    
    mathOp(op, num1, num2);
    
}
        //Function checking for invalid operands/operators before they get parsed to integers.

function checkOpBefore(op, num1, num2) {
    
     if(!(op == "sin" || op =="sine" || op == "cos" || op == "cosine" || op == "sqr" || op == "root" || op == "tan" || op == "tangent") && num1 == "" || num2 == "") {
        doOutput("Please insert values into blank inputs.");
        ifErrorFound = "1";
        return;
    } else if(num1 == "" || op == "" || num2 == "") {
        ifErrorFound = "1";
        doOutput("Please insert values into blank inputs.");
        return;
    } else {
        return;
    }
    
}

        //Function checking for invalid operands/operators fater being parsed to integers.

function checkOpAfter(op, num1, num2) {   

    if(op == "/" && num2 == 0 && num1 !== 0) {
        doOutput("Anything divided by 0 is not a definable value due to lack of unique values.");
        ifErrorFound = "1";
        return;
    } else {
        return;
    }
    
}

function mathOp(op, num1, num2) {
    

    
        //Function figuring out which operator is being used, pulls the numbers from the inputs, and operates the aligned function.
    
    if(ifErrorFound !== "1") {
    
        switch(op) {
            case "+":
            case "add":
            case "addition":    
                doOutput(num1 + num2);
                break;
            case "-":
            case "subtract":
                doOutput(num1 - num2);
                break;
            case "*":
            case "mult":
            case "multiply":
                doOutput(num1 * num2); 
                break;
            case "/":
            case "div":
            case "divide":
                doOutput(num1 / num2);
                break;
            case "mod":
            case "%":    
            case "modulus":
                doOutput(num1 % num2);
                break;
            case "exp":
            case "**":
            case "exponent":
                doOutput(num1 ** num2);
                break;
            case "round":
                doOutput(Math.round(num1 / num2));
                break;
            case "sqr":
            case "root":
                doOutput(Math.sqrt(num1));
                break;
            case "sin":
            case "sine":
                doOutput(Math.sin(num1));
                break;
            case "cos":
            case "cosine":
                doOutput(Math.cos(num1));
                break;
            case "tan":
            case "tangent":
                doOutput(Math.tan(num1));
                break;
        }
        
    }
    
}
        //Shorthand function for outputting results, saving keystrokes and time for expandability and QoL

function doOutput(doOut) {
    
    document.getElementById("output").innerHTML = doOut;

}