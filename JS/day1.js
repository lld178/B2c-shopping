console.log('hello');
let a;
a = 22;
let b = true;
// 元组
let h;
h = ['hello', 123];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i;
i = {
    name: 'hhj',
    gender: Gender.Male
};
export {};
