//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
function getInterval(start, end) {
     let current = start; 
     let timer = setInterval(function(){
        console.log(current);
        if (current == end) {
            clearInterval(timer);
        }
        current++;
     }, 1000);
}
getInterval(5, 15)
