import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'card', component: CardComponent },
  { path: '**', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
