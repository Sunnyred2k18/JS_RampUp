function findPrime() {
    var number = document.getElementById("number").value;
  
    if (isNaN(number)) {
        alert('Input must be a number.');
    } else if (number <= 1) {
        alert('Input must be greater than 1.');
    } else if (number < 10 || number > 99) {
        alert('Input must be a 2-digit number.');
        return false
    }

    var result = "";
    for (var i = 2; i <= number; i++) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += i + " ";
        }
    }
    document.getElementById("result").innerHTML = "Primes: " + result;
    console.log("Prime Numbers are :" + result)
}


