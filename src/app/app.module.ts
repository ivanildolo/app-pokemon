import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './pages/cards/cards.component';
import { CardComponent } from './pages/card/card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ActivityIndicatorComponent } from './components/activity-indicator/activity-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    NotFoundComponent,
    SortByPipe,
    ActivityIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
