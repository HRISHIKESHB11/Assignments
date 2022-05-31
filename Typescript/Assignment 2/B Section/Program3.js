var cus, dis, total, pur;
pur = 11223;
total = pur;
if (pur <= 2000) {
    dis = pur * 0.05;
    cus = total - dis;
    console.log('Dis:' + dis + ' Current value to give after discount:' + cus);
}
else if (total <= 5000) {
    dis = pur * 0.25;
    cus = total - dis;
    console.log('Dis:' + dis + ' Current value to give after discount:' + cus);
}
else if (total <= 10000) {
    dis = pur * 0.35;
    cus = total - dis;
    console.log('Dis:' + dis + ' Current value to give after discount:' + cus);
}
else
    (total > 10000);
{
    dis = pur * 0.50;
    cus = total - dis;
    console.log('Dis:' + dis + ' Current value to give after discount:' + cus);
}
