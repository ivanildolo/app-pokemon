import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CardsModel, CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cards: CardModel[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get<CardsModel>("https://api.pokemontcg.io/v1/cards")
      .subscribe((response: CardsModel)=>{
        this.cards = response.cards;
        console.log(this.cards);
        
        
      });

  }

}
