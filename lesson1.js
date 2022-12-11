let arr = [1, 2, 3, 'Kotik', true, null, 0];
function getEvenOrOdd () {
    let even = 0;
    let odd = 0;
    let zero = 0;
    let other = 0;
    for (let i = 0; i<arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                zero++;
            }
            else if (arr[i] % 2 === 0) {
                even++;
            }
            else odd++;
        }
        else if (isNaN(arr[i])) {
            other++;
        }
        else other++;
    }
    console.log(`Четных - ${even}, Нечетных - ${odd}, Нулевых - ${zero}, Не чисел - ${other}`)
}

getEvenOrOdd()