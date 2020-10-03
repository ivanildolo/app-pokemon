import { Component, OnInit } from '@angular/core';
import { CardsModel, CardModel } from 'src/app/models/card-model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
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
  public loading: boolean = false;
  constructor(private httpService: HttpService) {}

  public onChangeSearch(event: any) {
    console.log(event.target.value);
    this.searchChanged.next(event.target.value);
  }

  public getCards(searchName: string) {
    let filter = {
      name: searchName,
      page: 1,
      pageSize: 100
    }
    this.loading = true;
    this.httpService.getCards(filter)
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
