import { Component, OnInit } from '@angular/core';
import { CardsModel, CardModel } from 'src/app/models/card-model';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public cards: CardModel[] = [];
  public searchChanged: Subject<string> = new Subject<string>();
  public filter = {
    name: '',
    page: 1,
    pageSize: 100
  }
  public loading: boolean = false;
  constructor(private httpService: HttpService) {}

  public onChangeSearch(event: any) {
    this.searchChanged.next(event.target.value);
  }

  public getCards(searchName: string) {
    this.filter.name = searchName;
    this.loading = true;
    this.httpService.getCards(this.filter)
      .subscribe((response: CardsModel) => {
        this.cards = response.cards;
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
