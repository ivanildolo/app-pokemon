import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModel, CardsModel } from 'src/app/models/card-model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public card: Partial<CardModel> = {};
  public loading: boolean = false;
  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.loading = true;
      this.httpService.getCards({id})
        .subscribe((response: CardsModel) => {
          const [card] = response.cards;
          this.card = card;
          this.loading = false;
        });
  });
  }
}
