import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  imports: [CommonModule],
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.css'
})
export class BlackjackComponent {
  deck: string[] = [];
  playerCards: string[] = [];
  dealerCards: string[] = [];
  playerScore: number = 0;
  dealerScore: number = 0;
  gameResult: string | null = null;
  gameStarted: boolean = false;

  // Create a deck of cards
  createDeck() {
    const suits = ['♥', '♦', '♣', '♠'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.deck = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        this.deck.push(`${rank}${suit}`);
      }
    }
    this.shuffleDeck();
  }

  // Shuffle the deck
  shuffleDeck() {
    this.deck.sort(() => Math.random() - 0.5);
  }

  // Get the value of a card
  getCardValue(card: string): number {
    const rank = card.slice(0, -1);
    if (['J', 'Q', 'K'].includes(rank)) return 10;
    if (rank === 'A') return 11; // Ace can be 1 or 11 (adjusted later)
    return parseInt(rank);
  }

  // Start a new game
  startGame() {
    this.createDeck();
    this.playerCards = [this.deck.pop()!, this.deck.pop()!];
    this.dealerCards = [this.deck.pop()!, this.deck.pop()!];
    this.playerScore = this.calculateScore(this.playerCards);
    this.dealerScore = this.calculateScore(this.dealerCards);
    this.gameResult = null;
    this.gameStarted = true;
  }

  // Calculate the score of a hand
  calculateScore(cards: string[]): number {
    let score = 0;
    let aces = 0;

    for (let card of cards) {
      const value = this.getCardValue(card);
      score += value;
      if (value === 11) aces++;
    }

    // Adjust for Aces if score exceeds 21
    while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    }

    return score;
  }

  // Player hits (draws a card)
  playerHit() {
    this.playerCards.push(this.deck.pop()!);
    this.playerScore = this.calculateScore(this.playerCards);

    if (this.playerScore > 21) {
      this.gameResult = 'You busted! Dealer wins.';
    }
  }

  // Player stands (dealer's turn)
  playerStand() {
    while (this.dealerScore < 17) {
      this.dealerCards.push(this.deck.pop()!);
      this.dealerScore = this.calculateScore(this.dealerCards);
    }

    if (this.dealerScore > 21 || this.playerScore > this.dealerScore) {
      this.gameResult = 'You win!';
    } else if (this.playerScore < this.dealerScore) {
      this.gameResult = 'Dealer wins!';
    } else {
      this.gameResult = 'It\'s a tie!';
    }
  }
}
