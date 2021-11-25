const { create } = require("domain");

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
        this.color = (()=>{
            if (suit === "D" || suit === 'H') return 'red'
            else return 'black'
        })()

        this.id = `${suit}${value}`;
        this.faceup = 'false';
    }
}

let suitOptions = ['C','D','S','H'];
let valueOptions = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let allCards = []

const createDeck = () => {
    suitOptions.forEach(suit => {
        valueOptions.forEach(value => {
            let newCard = new Card(value, suit)
            allCards.push(newCard)
        })
    })
    console.log(allCards)
}

createDeck()
