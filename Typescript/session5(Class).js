var emp = /** @class */ (function () {
    function emp() {
    }
    emp.prototype.details = function (a, b, c) {
        console.log('ID:' + a + ", Name:" + b + ", Class:" + c);
    };
    ;
    return emp;
}());
var cemp = new emp();
cemp.details(101, 'hrishi', 1);
