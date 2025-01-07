import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slots',
  imports: [
    CommonModule
  ],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent {
  symbols: string[] = ['🍒', '🍋', '🍊', '🍇', '⭐', '🔔'];
  reels: string[] = ['', '', ''];
  spinning: boolean = false;
  gameResult: string | null = null;
  betAmount: number = 0;

  // Start the spin
  spinReels() {
    if (this.betAmount === 0) {
      alert('Please place a bet!');
      return;
    }

    this.spinning = true;
    this.gameResult = null;

    setTimeout(() => {
      this.reels = [
        this.symbols[Math.floor(Math.random() * this.symbols.length)],
        this.symbols[Math.floor(Math.random() * this.symbols.length)],
        this.symbols[Math.floor(Math.random() * this.symbols.length)]
      ];

      this.spinning = false;
      this.checkResult();
    }, 1000); // Simulates spinning duration
  }

  // Check the result of the spin
  checkResult() {
    if (this.reels[0] === this.reels[1] && this.reels[1] === this.reels[2]) {
      this.gameResult = `You win ₹${this.betAmount * 10}! 🎉`;
    } else {
      this.gameResult = 'Better luck next time! 🙁';
    }
  }

  // Set bet amount
  setBet(amount: number) {
    this.betAmount = amount;
    this.gameResult = null; // Clear previous result
  }
}
