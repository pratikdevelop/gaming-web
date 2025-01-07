import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lucky-spin',
  imports: [CommonModule],
  templateUrl: './lucky-spin.component.html',
  styleUrl: './lucky-spin.component.css'
})
export class LuckySpinComponent {
  betAmount: number = 0;
  spinStyle: string = '';
  result: string | null = null;
  prizes = ['₹100', '₹500', '₹1000', '2x Bet', '5x Bet', 'Try Again!'];

  setBet(amount: number) {
    this.betAmount = amount;
    this.result = null; // Clear result
  }

  spinWheel() {
    if (this.betAmount === 0) {
      alert('Please select a bet amount!');
      return;
    }

    const randomDegree = Math.floor(Math.random() * 360) + 720;
    this.spinStyle = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
      const prizeIndex = Math.floor(Math.random() * this.prizes.length);
      this.result = this.prizes[prizeIndex];
    }, 1000); // Match animation duration
  }
}
