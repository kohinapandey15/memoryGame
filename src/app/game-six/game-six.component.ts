// game-twelve.component.ts
import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-game-six',
  templateUrl: './game-six.component.html',
  styleUrls: ['./game-six.component.scss']
})
export class GameSixComponent implements OnInit {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  moveCount: number = 0;
  missCount: number = 0;
  roundCount: number = 0;
numCards: any;


  ngOnInit() {
    this.initializeCards();
  }

  initializeCards() {
    const imageUrls = [
      'assets/images/micheal.jpg',
      'assets/images/dwight.jpg',
      'assets/images/pam.jpg',
      'assets/images/micheal.jpg',
      'assets/images/dwight.jpg',
      'assets/images/pam.jpg',
      
      
    ];

    
    const shuffledImageUrls = this.shuffleArray(imageUrls);

    
    this.cards = shuffledImageUrls.map((imageUrl, index) => ({
      id: index,
      imageUrl,
      isFlipped: false,
      isMatched: false
    }));
  }

  flipCard(card: Card) {
    if (!card.isFlipped && this.flippedCards.length < 2) {
      card.isFlipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        this.moveCount++;
        this.checkMatch();
      }
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;

    if (card1.imageUrl === card2.imageUrl) {
      
      card1.isMatched = true;
      card2.isMatched = true;
    } else {
      
      this.missCount++;
     
      setTimeout(() => {
        card1.isFlipped = false;
        card2.isFlipped = false;
      }, 1000);
    }

    
    if (!this.isGameCompleted()) {
      console.log(`Moves: ${this.moveCount}, Misses: ${this.missCount}, Rounds: ${this.roundCount}`);
    }

    this.flippedCards = [];
  }

  isGameCompleted(): boolean {
    return this.cards.every(card => card.isMatched);
  }
  resetGame() {
    this.cards.forEach(card => {
      card.isFlipped = false;
      card.isMatched = false;
    });

    this.moveCount = 0;
    this.missCount = 0;
    this.roundCount++;
  }


  private shuffleArray(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
