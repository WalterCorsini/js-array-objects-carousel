# SVOLGIMENTO
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione 
Creare un carosello come nella foto allegata.
Milestone 1:
Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

## INPUT 
- creo array di object "images"
- creo contatore indice per le foto e per i thumbnails
- mi aggancio al container delle immagini
- mi aggancio al container dei thumbnails
## LOGIC ## OUTPUT
- creo ciclo forEach per scorrere l'array
    - concateno nel container immagini e nel container thumbnails gli elementi degli object nell'array
- creo un array per le immagini create in pagina "slides" e un array per le thumbnails create in pagina "thumbs"
- do la classe active alla prime foto di slides e thumbs tramite l'indice "index" impostato a 0
- mi aggancio al pulsante con classe "my-next" e al pulsante "my-previous"
- gli aggiungo un EventListener al click invocando a sua volta la loro corrispondente funzione "next()" e "previous()"
- creo le variabili da associare al set interval del bottone "start" e del bottone "invert order"  chiamate "startInterval" e "invertInterval"
- creo due variabili "startCount" e "invertCount" per controllare lo stato dei bottini se attivo o in pausa
- mi aggancio ai due bottoni
- gli do un event listener al click.
- al click sul bottone start
    - stoppo nel caso fosse attivo il bottone "invert order" tramite la sua variabile "invertInterval"
    -azzero il contatore del bottone invert order
    - controllo il contatore del bottone start
    se il resto mi da 0
        - avvio setInterval con la funzione "next" e timer di 2 secondi
    altrimenti
        - stoppo setInterval con la variabile "startInterval"
    incremento il suo contatore.
- al click sul bottone invert order
    -stoppo il bottone start nel caso fosse attivo
    - azzero il contatore del bottone start
    - controllo il contatore del bottone invert order
    se il resto mi da 0
        - avvio setInterval con la funzione "previous" e timer di 2 secondi
    altrimenti
        - stoppo setInterval con la variabile "invertInterval
    incremento il suo contatore


## FUNZIONI

### NEXT
1. rimuovo la classe active alla slides e al thumbs indicato in pagina
2. controllo l'indice
se è minore della lunghezza dell'array delle slides meno 1 elemento
    - incremento l'indice
altrimenti
    - riporto l'indice a 0
aggiungo la classe active alla slides e al thumbs con l'indice aggiornato
riporto il valore dell'indice aggiornato nello script.



### PREVIOUS
1. rimuovo la classe active alla slides e al thumbs indicato in pagina
2. controllo l'indice
se è maggiore di 0
    - decremento l'indice
altrimenti
    - riporto l'indice a slides.length meno 1
aggiungo la classe active alla slides e al thumbs con l'indice aggiornato
riporto il valore dell'indice aggiornato nello script.



