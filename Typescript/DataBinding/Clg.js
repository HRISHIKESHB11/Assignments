"use strict";
exports.__esModule = true;
var Teacher_1 = require("./Teacher");
var clg = /** @class */ (function () {
    function clg() {
    }
    clg.prototype.show = function () {
        var a = new Teacher_1.teacher();
        a.welcome();
    };
    return clg;
}());
var A = new clg;
A.show();
