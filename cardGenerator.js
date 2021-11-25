window.addEventListener('DOMContentLoaded', (e) =>{

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
        this.color = (()=>{
            if (suit === "D" || suit === 'H') return 'red'
            else return 'black'
        })()

        this.id = `${value}${suit}`;
        this.faceup = 'false';
    }
}

const createDeck = () => {
    let suitOptions = ['C','D','S','H'];
    let valueOptions = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    let allCards = []
    suitOptions.forEach(suit => {
        valueOptions.forEach(value => {
            let newCard = new Card(value, suit)
            allCards.push(newCard)
        })
    })
    return allCards
}

const unshuffledDeck = createDeck()
const shuffleDeck = (startDeck) => {
    let resultDeck =[]
    while (startDeck.length > 0) {
        let randomIndex = Math.floor(Math.random() * startDeck.length)
        resultDeck.push(startDeck.splice(randomIndex, 1))
    }
    return resultDeck
}

const drawCard = (deck) => {
    let cardElement = document.createElement('div');
    let cardObject = deck.pop();
    console.log(cardObject);
    for (let property in cardObject[0]) {
        cardElement.dataset[property] = cardObject[0][property]
    }
    console.log(cardElement)
    cardElement.draggable = true;
    cardElement.classList.add('card');
    cardElement.style.backgroundImage = `url(./assets/card-backs/${cardObject[0].id}.svg)`
    let pileToAdd = document.querySelector('#pile1')
    pileToAdd.appendChild(cardElement);

}

let shuffledDeck = shuffleDeck(unshuffledDeck);
console.log(shuffleDeck(unshuffledDeck).length);

let drawPile = document.getElementById('downpile')
    drawPile.addEventListener('click', () => {
        drawCard(shuffledDeck);
    })

})
