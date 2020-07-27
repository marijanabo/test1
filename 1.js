// Prvi zadatak
let kolicina = 9
let cenaPoKomadu = 180
let godine = 21

if(kolicina > 0 && cenaPoKomadu > 0 && godine > 0){
    if(godine >= 18){
        let racun = cenaPoKomadu * kolicina
        console.log(`Racun u kafani iznosi ${racun} dinara.`)

        if(godine % 7 === 0){
            let popust = racun - (racun * (15/100))
            console.log(`Racun sa popustom od 15% iznosi ${popust} dinara.`)
        }
        if(godine % 11 === 0){
            let popust = racun - (racun * (25/100))
            console.log(`Racun sa popustom od 25% iznosi ${popust} dinara.`)
        }
    }
    else{
        console.log('Racun se ne ispisuje osobama mladjim od 18 godina.')
    }
}
else{
    console.log('Neodgovarajuci unos pocetnih vrednosti.')
}