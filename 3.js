// Treci zadatak
let K = 3
let N = 35

let zbir = 0
let proizvod = 1
let count = 0

if(K > N){
    let tmp = K
    K = N
    N = tmp
}

for(i = K; i <= N; i++){
    if(i % 3 === 0){
        zbir += i
    }
    if(i % 3 !== 0 && i % 7 === 0){
        proizvod *= i
    }
}
console.log(zbir, proizvod)