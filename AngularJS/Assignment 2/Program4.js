var x = 2;
var y = 50;
do {
    ++x;
    y -= x++;
} while (x <= 10);
console.log(y);
