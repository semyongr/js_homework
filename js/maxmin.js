
const count = Number(prompt("Введите кол-во элементов массива"))
const array = [] 

pushArr(count)

function pushArr(count){
    for (let i = 1; i <= count; i++){
        const myNumber = Number(prompt(`Введите число №${i}:`))
        array.push(myNumber)
    }
    alert(`Массив: ${array}`)
    const maxEl = Math.max(...array)
    const minEl = Math.min(...array)
    alert(`Максимальное число:  ${maxEl}, минимальное число:  ${minEl} `) 

    return array
}