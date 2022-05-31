var a;
a = 90;
console.log('if');
if (a > 80) {
    console.log('A is Greater than 80');
}
console.log('if else');
if (a < 90) {
    console.log('A is less to 90');
}
else {
    console.log('A is equal to 90');
}
console.log('Nested if else');
if (a < 90) {
    console.log('A is less to 90');
}
else if (a > 90) {
    console.log('A is greater to 90');
}
else if (a == 90) {
    console.log('A is equal to 90');
}
else {
    console.log('Error is occur');
}
