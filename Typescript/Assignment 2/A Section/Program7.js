var ch;
var x = 97;
do {
    ch = String.fromCharCode(x);
    console.log(ch + "");
    if (x % 10 == 0)
        break;
    ++x;
} while (x <= 100);
