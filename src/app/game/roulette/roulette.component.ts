import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-roulette',
  imports: [
    CommonModule
  ],
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent {
  numbers = Array.from({ length: 37 }, (_, i) => ({
    value: i,
    color: i === 0 ? 'green' : i % 2 === 0 ? 'black' : 'red'
  })); // Numbers 0-36 with colors
  chips = [1, 10, 100, 500]; // Chip denominations
  selectedChip: number = 0;
  bets: { [key: number]: number } = {};
  spinning: boolean = false;
  winningNumber: number = 0;
  balance: number = 1000; // Player's initial balance
  message: string | null = null;

  // Select a chip
  selectChip(chip: number) {
    this.selectedChip = chip;
  }

  // Place a bet
  placeBet(number: number) {
    if (this.selectedChip === null) {
      alert('Select a chip to place a bet!');
      return;
    }
    if (this.balance < this.selectedChip) {
      alert('Insufficient balance!');
      return;
    }
    this.bets[number] = (this.bets[number] || 0) + this.selectedChip;
    this.balance -= this.selectedChip;
  }

  // Spin the wheel
  spinWheel() {
    if (Object.keys(this.bets).length === 0) {
      alert('Place at least one bet!');
      return;
    }
    this.spinning = true;
    this.winningNumber = 0;

    setTimeout(() => {
      this.winningNumber = Math.floor(Math.random() * 37); // Random number between 0-36
      this.spinning = false;
      this.calculateResult();
    }, 2000); // Simulate spinning duration
  }

  // Calculate result
  calculateResult() {
    const winAmount = (this.bets[this.winningNumber] || 0) * 35; // Payout is 35x the bet
    if (winAmount > 0) {
      this.message = `You win ₹${winAmount}! 🎉`;
      this.balance += winAmount;
    } else {
      this.message = 'You lose! Better luck next time.';
    }
    this.bets = {}; // Reset bets
  }}
