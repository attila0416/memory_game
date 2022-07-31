import React from "react";
import logo from '../logo.svg';

const NUMBER_OF_PAIRS = 6;
let firstCard = null;
let secondCard = null;


export function createBoardHtml() {
    const items = []
    const randomOrderPairs = getPairsInRandomOrder()
    for (let i = 0; i < NUMBER_OF_PAIRS * 2; i++) {
        items.push(
            <div className={"card"} key={i}>
                <p className={"card_front"}>{randomOrderPairs[i]}</p>
                <img className={"card_back"} draggable="false" src={logo} alt="React logo" width="100" height="100"/>
            </div>
        )
    }

    return (
        <section className={"board"}>
            {items}
        </section>
    )
}

export function createCardsEventListeners() {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", flipCard);
    }
}

function resetSelectedCards() {
    firstCard = null
    secondCard = null
}

function removeSelectedCardEventListeners() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function checkIfCardsMatch() {
    if (firstCard.firstChild.innerText !== secondCard.firstChild.innerText) {
        setTimeout(() => {
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
            resetSelectedCards()
        }, 1000);
    } else {
        removeSelectedCardEventListeners()
        resetSelectedCards()
    }
}

function flipCard() {
    if (secondCard != null) {
        return
    }

    if (firstCard == null) {
        firstCard = this
    } else if (secondCard == null) {
        secondCard = this
        checkIfCardsMatch()
    }


    this.classList.add("flip")
}

function getPairsInRandomOrder() {
    let pairs = []
    for (let i = 0; i < NUMBER_OF_PAIRS; i++) {
        pairs.push(i + 1, i + 1)
    }
    return shuffleArray(pairs)
}

function shuffleArray(ary) {
    return ary.sort(() => Math.random() - 0.5);
}