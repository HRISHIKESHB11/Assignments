var x:number = 2;
var y:number = 50;
do
{
++x;
y-=x++;
}
while(x <= 10);
console.log(y);
