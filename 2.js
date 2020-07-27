// Drugi zadatak
let N = 6
let W = 9

for(let i = 1; i < N; i++){
    let levo = ' '.repeat(Math.ceil(W / 2) - i + 1) + '*'.repeat(i)
    let desno = '*'.repeat(i - 1)
    console.log(levo + desno)
}

let sredina = '*'.repeat(Math.ceil(W/2)) + ' ' + '*'.repeat(Math.ceil(W/2))
console.log(sredina)

for(let i = N - 1; i > 0; i--){
    let levo = ' '.repeat(Math.ceil(W / 2) - i + 1) + '*'.repeat(i)
    let desno = '*'.repeat(i - 1)
    console.log(levo + desno)
}