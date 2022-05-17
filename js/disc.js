alert("Решение дискриминанта для уравнения ax^2 + bx + c = 0")
const a = Number(prompt("Введите a"))
const b = Number(prompt("Введите b"))
const c = Number(prompt("Введите c"))
alert(`Уравнение: ${a}x^2 + ${b}x + ${c} = 0`)

const Discr = Number(disc(a,b,c))

function disc(a, b, c){

    const d = Number(b**2 - (4*a*c))
    alert(`Дискриминант = ${d}`)
    if (d > 0){
        const x1 = (-b + Math.sqrt(d))/(2*a)
        const x2 = (-b -  Math.sqrt(d))/(2*a)
        alert(`x1 = ${x1}, x2 = ${x2}`)
    }
    if (d === 0){
        const x = -b/(2*a)
        alert(`x = ${x}`)
    } 
    if (d < 0){
        alert("Корней нет")
    } 
    return d
}

