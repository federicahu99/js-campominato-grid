/*
 Consegna:
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
    azzurro ed emetto un messaggio in console con il numero della cella cliccata.
    Procediamo milestone per milestone senza invertire l'ordine.
    Cerchiamo di fare almeno un commit per ogni milestone!

 MILESTONE 1
    Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo 
    nell'immagine allegata.
 MILESTONE 2
    Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite 
    JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
 MILESTONE 3
    In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
 MILESTONE 4
    Al click sulla cella, stampiamo il numero della cella cliccata in console, poi 
    coloriamo la cella d'azzurro! 

 Esecuzione JS:
    1- al click del mio bottone la griglia si creerà (tramite ciclo For)
    2- ad ogni cella aggiungo il numero corrispondente da 1 a 100 (For)
    3- cliccando sulla cella stampo in console il numero corrispondente 
       e coloro la cella di azzurro 
*/

//prendo i miei elementi
const btn = document.getElementById('start-game'); 
let game = document.getElementById('game');

// functions
const createGridDifficultyOne = () => {
    let number= 1;
    // ripeto 100 volte, 1 per ogni griglia del gioco

    for( i = 1; i <= 10; i++) {
        //stampo i numeri all'interno dei rispettivi div
        for ( j = 1; j <= 10; j++) {
            // creo il div all'interno del html e gli aggiungo la classe
            let cell = document.createElement('div');
            cell.classList.add('cell')
        
            // porto nel dom
            game.appendChild(cell);

            cell.innerText = number;
            //incremento
            number++;
            
            //azione per colorare di blu cliccano sulla cella 
            cell.addEventListener('click', (event) => {
                event.target.classList.toggle('clicked')
                console.log(event.target.innerText)
            })
        }
    }
}

//azione al click del bottone 
btn.addEventListener('click',() => {       
    // creo griglie
    grid = createGridDifficultyOne();
})






