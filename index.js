var age = 18;
// if (age < 18) {
//   text = "Not a voter";
// }
// else if (age === 18) {
//   text = "He is a voter";
// }
// we can avoid suuch long codes using TERNARY OPERATOR:
var text = age >= 18 ? "He is a voter" : "He is not a voter";
var a = 7;
//nested ternary operation:
var type =
  a >= 20 ? "He is an adult" : a < 10 ? "He is a child" : "He is young";
console.log(text);
console.log(type);

