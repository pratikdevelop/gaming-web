import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
openLoginModal() {
throw new Error('Method not implemented.');
}
openRegisterModal() {
throw new Error('Method not implemented.');
}
  balance = 5000;

  newGames = [
    { title: 'Sweet Bonanza', image: '/assets/sweet-bonanza.jpg' },
    { title: 'Gates of Olympus', image: '/assets/gates-of-olympus.jpg' },
    { title: 'Big Bass Bonanza', image: '/assets/big-bass.jpg' },
    { title: 'Starlight Princess', image: '/assets/starlight.jpg' },
    { title: 'Sugar Rush', image: '/assets/sugar-rush.jpg' },
  ];

  diceGames = [
    { title: 'Sic Bo', image: '/assets/sic-bo.jpg' },
    { title: 'Lucky Dice', image: '/assets/lucky-dice.jpg' },
    { title: 'Wild Dice', image: '/assets/wild-dice.jpg' },
    { title: 'Sugar Dice', image: '/assets/sugar-dice.jpg' },
    { title: 'Dice Million', image: '/assets/dice-million.jpg' },
  ];

  providers = [
    { name: 'Evolution Gaming', year: 1997, crypto: 'Yes' },
    { name: 'XPG', year: 2000, crypto: 'Yes' },
    { name: 'Pragmatic Play', year: 2001, crypto: 'No' },
  ];
}
