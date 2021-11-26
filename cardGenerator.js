window.addEventListener('DOMContentLoaded', (e) =>{

let suitOptions = ['C', 'D', 'S', 'H'];
let valueOptions = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

//defines relevant card properties
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
        // this.accepts = []
    }
    };


//initializes a deck of cards with complete value range
    const createDeck = () => {
        let allCards = []
        suitOptions.forEach(suit => {
            valueOptions.forEach(value => {
                let newCard = new Card(value, suit)
                allCards.push(newCard)
            })
        })
        return allCards
    };

    const unshuffledDeck = createDeck();


//accepts a deck and pulls one card out at random and assigns to a new deck
    const shuffleDeck = (startDeck) => {
        let resultDeck = []
        while (startDeck.length > 0) {
            let randomIndex = Math.floor(Math.random() * startDeck.length)
            resultDeck.push(startDeck.splice(randomIndex, 1))
        }
        return resultDeck
    };

let shuffledDeck = shuffleDeck(unshuffledDeck);

//selects the top card in a given deck

const dealCard = (deck, pileID, facing = 'down') => {
    //create a new div
    let cardElement = document.createElement('div');

    //get the top card in the shuffled array
    let cardObject = deck.pop()[0];
    cardElement.id = cardObject.id;

    //assign the background image
    if (facing === 'up') {
        //set upturned card behavior
        cardElement.style.backgroundImage = `url(./assets/card-fronts/${cardObject.id}.svg)`
        cardObject.faceup = 'true'
        cardElement.draggable = 'true'
    } else {
        //set downturned card behavior
        cardElement.style.backgroundImage = `url(./assets/lite-card-back.svg)`
        cardElement.draggable = 'false'
    };

    // assign all card attrubutes
    for (let property in cardObject) {
        cardElement.dataset[property] = cardObject[property]
    }

    cardElement.classList.add('card');


    //add to specified pile
    let pileToAdd = document.getElementById(pileID)
    pileToAdd.appendChild(cardElement);

}


let drawPile = document.getElementById('downpile')


drawPile.addEventListener('click', () => {
        dealCard(shuffledDeck, 'uppile', 'up');
})


    document.querySelectorAll('.pile').forEach(pile => {
        let dealCount = parseInt(pile.id[pile.id.length - 1])
        for (let i = 1; i < dealCount; i++) {
            dealCard(shuffledDeck, pile.id, 'up')
        }
    }
)

})
