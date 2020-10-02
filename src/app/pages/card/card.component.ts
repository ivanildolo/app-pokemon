import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CardModel, CardsModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public card: CardModel = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.http
      .get<CardsModel>(`https://api.pokemontcg.io/v1/cards?id=${id}`)
      .subscribe((response: CardsModel) => {
        const [card] = response.cards;
        this.card = card;
        console.log(card);
      });
  }
}
