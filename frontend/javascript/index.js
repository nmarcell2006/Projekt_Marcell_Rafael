const response = await fetch('/api/szavak');
const szavak = await response.json()

const response1 = await fetch('api/betuk')
const betuk = await response1.json()

document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementsByTagName("body")[0]

    const kep = document.getElementById('img')
    const kitalalandoSzo = document.getElementById('szo')
    const betuGomb = document.getElementById('betuk')


    function betuGombok(){
        betuGomb.innerHTML = '';
        betuk.split('').forEach(betu => {
            const gomb = document.createElement("button")
            gomb.textContent = betu
            gomb.addEventListener('click', ()=> tipp(betu))
            betuGomb.appendChild(gomb)
        });

    }
    
    let szavakSzama = 0
    for(let i = 0; i < szavak.length; i++){
        szavakSzama++;
    }
})


function tipp(betu){
    
}



const MaxHiba = 6
let szo = ""
let tippeltBetuk = []
let hibak = 0

function jatek(){
    szo = szavak[Math.floor(Math.random()*szavakSzama)]
    tippeltBetuk = []
    hibak = 0;
    betuGombok()
}
