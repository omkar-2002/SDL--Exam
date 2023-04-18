function fibonacci(num) {
    var a = 0, b = 1, result = [];
    for (var i = 0; i < num; i++) {
      result.push(a);
      var temp = a + b;
      a = b;
      b = temp;
    }
    return result;
  }
  
  function printFibonacci() {
    var inputNum = document.getElementById("inputNum").value;
    var fib = fibonacci(inputNum);
    var output = "";
    for (var i = 0; i < fib.length; i++) {
      output += fib[i] + " ";
    }
    document.getElementById("fibonacci").innerHTML = output;
  }
  