import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardsModel, CardModel } from 'src/app/models/card-model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public cards: CardModel[] = [];
  public searchChanged: Subject<string> = new Subject<string>();
  public loading: boolean = false;
  constructor(private http: HttpClient) {}

  public onChangeSearch(event: any) {
    console.log(event.target.value);
    this.searchChanged.next(event.target.value);
  }

  public getCards(searchName: string) {
    this.loading = true;
    this.http
      .get<CardsModel>(`https://api.pokemontcg.io/v1/cards?name=${searchName}&page=1&pageSize=100`)
      .subscribe((response: CardsModel) => {
        this.cards = response.cards;
        console.log(this.cards);
        this.loading = false;
      });
  }

  ngOnInit(): void {
    this.searchChanged
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((searchName: string) => {
        this.getCards(searchName);
      });
    this.getCards('');
  }
}
