function calculate() {
            
    var num1 = parseFloat(document.getElementById("in1").value),
        num2 = parseFloat(document.getElementById("in3").value),
        op = document.getElementById("operator").value;
        
    switch(op) {
        case "+":
            
        case "add":
            
        case "addition":    
            document.getElementById("output").innerHTML = num1 + num2;
            break;
        case "-":
            
        case "subtract":
            document.getElementById("output").innerHTML = num1 - num2;
            break;
        case "*":
        
        case "mult":
            
        case "multiply":
            document.getElementById("output").innerHTML = num1 * num2;
            break;
        case "/":
        
        case "div":
            
        case "divide":
            document.getElementById("output").innerHTML = num1 / num2;
            break;
        case "mod":
        
        case "%":
            
        case "modulus":
            document.getElementById("output").innerHTML = num1 % num2;
            break;
        case "exp":
            
        case "**":
            
        case "exponent":
            document.getElementById("output").innerHTML = num1 ** num2;
            break;
        case "./":
            document.getElementById("output").innerHTML = Math.round(num1 / num2);
    }
}