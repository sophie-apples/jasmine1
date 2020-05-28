Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}

Calculator.prototype.subtract = function(number) {
    if (typeof(number) == "number") {
        this.value -= number;
    } else {
        alert("Error!");
    }
}

Calculator.prototype.multiply = function(numOne, numTwo) {
    if (typeof(numOne, numTwo) == "number") {
        this.value = numOne*numTwo;
    } else {
        alert("Error!");
    }
}

Calculator.prototype.divide = function(numOne, numTwo) {
    if (typeof(numOne, numTwo) == "number") {
        this.value = numOne/numTwo;
    } else {
        alert("Error!");
    }
}