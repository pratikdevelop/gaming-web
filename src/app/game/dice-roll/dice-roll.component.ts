import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-roll',
  imports: [CommonModule],
  templateUrl: './dice-roll.component.html',
  styleUrl: './dice-roll.component.css'
})
export class DiceRollComponent {
  betAmount: number = 0;
  diceResult: number | null = null;
  guess: number = 1; // Default guess

  setBet(amount: number) {
    this.betAmount = amount;
    this.diceResult = null; // Clear previous result
  }

  rollDice() {
    if (this.betAmount === 0) {
      alert('Please select a bet amount!');
      return;
    }

    this.diceResult = Math.floor(Math.random() * 6) + 1; // Dice roll (1-6)
  }
}
