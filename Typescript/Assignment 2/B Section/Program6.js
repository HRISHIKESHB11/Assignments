var i, total;
i = 100;
while (i >= 0) {
    if (total == 0) {
        break;
    }
    else {
        total = i - 3;
        console.log(total);
        --i;
    }
}
