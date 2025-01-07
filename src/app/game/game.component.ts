import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  // randomNumber: number;
  // userGuess!: number;
  // resultMessage: string;

  // constructor() {
  //   this.randomNumber = Math.floor(Math.random() * 100) + 1;
  //   this.resultMessage = '';
  // }

  // checkGuess(): void {
  //   if (this.userGuess === this.randomNumber) {
  //     this.resultMessage = 'Congratulations! You guessed the correct number!';
  //   } else {
  //     this.resultMessage = 'Sorry! Try again.';
  //   }
  // }

  betAmount: number = 0;
  spinStyle: string = '';
  result: string | null = null;
  prizes = ['₹100', '₹500', '₹1000', '2x Bet', '5x Bet', 'Better Luck Next Time!'];
  resultMessage!: string;

  setBet(amount: number) {
    this.betAmount = amount;
    this.result = null; // Clear previous result
  }

  spinWheel() {
    if (this.betAmount === 0) {
      alert('Please select a bet amount!');
      return;
    }

    // Randomize spin
    const randomDegree = Math.floor(Math.random() * 360) + 720; // 2 full spins + random
    this.spinStyle = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
      // Determine Prize
      const prizeIndex = Math.floor(Math.random() * this.prizes.length);
      this.result = this.prizes[prizeIndex];

      if (this.result === 'Better Luck Next Time!') {
        this.resultMessage = `You lost ₹${this.betAmount}. Try again!`;
      } else if (this.result.includes('x')) {
        const multiplier = parseInt(this.result[0]);
        const winnings = this.betAmount * multiplier;
        this.resultMessage = `Congratulations! You won ₹${winnings}!`;
      } else {
        const winnings = parseInt(this.result.replace('₹', ''));
        this.resultMessage = `You won ₹${winnings}!`;
      }
    }, 1000); // Match the spin animation duration
  }
}
