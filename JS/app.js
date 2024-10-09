System.register("day1", [], function (exports_1, context_1) {
    "use strict";
    var a, b, h, Gender, i;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            console.log('hello');
            a = 22;
            b = true;
            h = ['hello', 123];
            (function (Gender) {
                Gender[Gender["Male"] = 0] = "Male";
                Gender[Gender["Female"] = 1] = "Female";
            })(Gender || (Gender = {}));
            i = {
                name: 'hhj',
                gender: Gender.Male
            };
        }
    };
});
console.log('day2');
let a = 'you';
let b;
