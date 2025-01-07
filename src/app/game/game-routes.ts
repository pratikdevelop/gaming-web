


import { Routes } from '@angular/router';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { RouletteComponent } from './roulette/roulette.component';
import { SlotsComponent } from './slots/slots.component';
import { GameComponent } from './game.component';

export const routes: Routes = [
    {
        path: '',
        component: GameComponent,

    },
    { path: 'blackjack', component: BlackjackComponent },
    { path: 'slots', component: SlotsComponent },
    { path: 'roulette', component: RouletteComponent },
];
