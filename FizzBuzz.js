/*
 * Programming Quiz: FizzBuzz (4-1)
 */

var x = 1;

while (x <= 60) {
    var printVal = (x % 3 == 0) ? "Fizz" : "";
    var printVal = (x % 5 == 0) ? printVal + "Buzz" : printVal;
    var printVal = !(x % 3 == 0 || x % 5 == 0) ? x : printVal ;
    console.log(printVal);
    x++;
}