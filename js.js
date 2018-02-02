function calculate() {
    
    var num1 = document.getElementById("in1").value,
        num2 = document.getElementById("in3").value,
        op = document.getElementById("operator").value;
    
    checkOp(op, num1, num2);
    
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    
    doOutput();
    mathOp(op, num1, num2);
    
}

function checkOp(op, num1, num2) {
    
    if (op == "" || num1 == "" || num2 == "") {
        doOutput("Please Insert values into blank inputs.");
        return;
    } else if(!(op == "sin" || op =="sine" || op == "cos" || op == "cosine" || op == "sqr" || op == "root" || op == "tan" || op == "tangent") && num1 == "" || num2 == "") {
        doOutput("Please insert values into blank inputs.");
        return;
    } else if(op == "/" && num1 == "" || num2 == "") {
        doOutput("Please insert values other than zero into the blank inputs.");
    } else {
        return;
    }
    
}

function mathOp(op, num1, num2) {
        
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

function doOutput(doOut) {
    
    document.getElementById("output").innerHTML = doOut;

}