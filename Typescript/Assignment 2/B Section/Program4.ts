var input:string;
var dis, amt, net:number;
net=2499;
input='D';
if(net<=2500){
    if(input=='L'){
        amt=net;
        console.log('your price for product:'+amt);
    }
    else if(input=='D'){
        dis=net*0.05;
        amt=net-dis;
        console.log('your price for product:'+amt)
    }
    else{
        console.log('Access from Laptop or Desktop')
    }
}
else if(net>=57000 && net<=25001){
    if(input=='L'){
        dis=net*0.05;
        amt=net-dis;
        console.log('your price for product:'+amt);
    }
    else if(input=='D'){
        dis=net*0.075;
        amt=net-dis;
        console.log('your price for product:'+amt)
    }
    else{
        console.log('Access from Laptop or Desktop')
    }
}
else if(net>=57001 && net<=100000){
    if(input=='L'){
        dis=net*0.075;
        amt=net-dis;
        console.log('your price for product:'+amt);
    }
    else if(input=='D'){
        dis=net*0.10;
        amt=net-dis;
        console.log('your price for product:'+amt)
    }
    else{
        console.log('Access from Laptop or Desktop')
    }
}
else if(net>100000){
    if(input=='L'){
        dis=net*0.10;
        amt=net-dis;
        console.log('your price for product:'+amt);
    }
    else if(input=='D'){
        dis=net*0.15;
        amt=net-dis;
        console.log('your price for product:'+amt)
    }
    else{
        console.log('Access from Laptop or Desktop')
    }
}
else{
    console.log('Your Purchase value is not fit in discount offers');
}
