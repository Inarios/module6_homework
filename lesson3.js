//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
function numb1(a) {
    return function numb2(b) {
        return a + b;
    };
};

console.log(numb1(2)(3))