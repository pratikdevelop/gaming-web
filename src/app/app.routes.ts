import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'game', loadChildren:() => import('./game/game-routes').then(m => m.routes) },
    { path: 'payment', component: PaymentComponent },
];
