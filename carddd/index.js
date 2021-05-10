

window.onload =() =>{
    document.querySelector('.mid').classList.add(generaPintaRandom());
    document.querySelector('.mid').innerHTML = generaNumeroRandom() ;
}
let generaNumeroRandom= () =>{
    let num = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let indexNume = Math.floor(Math.random()* num.length);
    
    return num[indexNume];
}
let generaPintaRandom = () =>{
let pinta = ["spades","clubs","hearts","diams"];
let indexPinta = Math.floor(Math.random()* pinta.length);

   return pinta[indexPinta];
}