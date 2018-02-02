        //Variable for making mathOp(); not run if an error is found.

var ifErrorFound = false;

function calculate() {

    var ifErrorFound = false,
        num1 = document.getElementById("in1").value,
        num2 = document.getElementById("in3").value,
        op = document.getElementById("operator").value;

    checkOpBefore(op, num1, num2);

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

    checkOpAfter(op, num1, num2);
    if (!ifErrorFound) {
        mathOp(op, num1, num2);
        resetOp();
        return;
    }
    
    yourMomGay();
    
}
        //Function checking for invalid operands/operators before they get parsed to integers.

function checkOpBefore(op, num1, num2) {

     if(!(op == "sin" || op =="sine" || op == "cos" || op == "cosine" || op == "sqr" || op == "root" || op == "tan" || op == "tangent") && num1 == "" || num2 == "") {
            yourMomGay();
            ifErrorFound = true;
        return;
    } else if(num1 == "" || op == "" || num2 == "") {
            ifErrorFound = true;
            yourMomGay();
        return;
    } else {
        return;
    }

}

        //Function checking for invalid operands/operators fater being parsed to integers.

function checkOpAfter(op, num1, num2) {

    if(op == "/" && num2 == 0 && num1 !== 0) {
        yourMomGay();
        ifErrorFound = true;
        return;
    } else if(isNaN(num2) || isNaN(num1)) {
        yourMomGay();
        ifErrorFound = true;
        return;
    }

}

function mathOp(op, num1, num2) {

        //Function figuring out which operator is being used, pulls the numbers from the inputs, and operates the aligned function.
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
                if (num2 == 0) {
                  yourMomGay;
                  break;
                }
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
            default:
                yourMomGay();
        }

}
        //Shorthand function for outputting results, saving keystrokes and time for expandability and QoL

function doOutput(doOut) {

    document.getElementById("in1").value = doOut;
    
}

function yourMomGay() {
    
    document.getElementById("output").innerHTML = "Your mom gay.";
    
}

function resetOp() {
    
    document.getElementById("in3").value = "";
    document.getElementById("output").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("operator").focus();
    
}