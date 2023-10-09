//exercicio 1 ok entendido
function calcPct(n1, n2){
    return (n2/n1)*100
}

let x = 80
let y = 40
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`)

//exercicio 2
function calcularImovel(metragem, quartos){
    let m2 = 3000
    let preco = 0

    switch(quartos){
        case 1:
            preco = metragem*m2
            break
        case 2:
            preco = metragem*(m2*1.2)
            break
        case 3:
            preco = metragem*(m2*1.5)
            break
        default:
            alert("Não permitido")
            break
    }
    return preco
}

let quartos = 3
let metragem = 200
let precoImovel = calcularImovel(metragem, quartos)
console.log(`O preço do imóvel com metragem ${metragem}, ${quartos} quartos é R$${precoImovel}`)

//exercicio 3

const somar = (x, y) => x+y

let n1 = 80;
let n2 = 70;

console.log(`${n1} + ${n2} = ${somar(n1, n2)}`)