import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { update } from './actions/settings.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'material-table-demo';

  constructor(private store: Store) {}

  ngOnInit(): void {
    const columnOrder: string[] = JSON.parse(window.sessionStorage.getItem('column-order'));

    if (columnOrder) {
      this.store.dispatch(update({ order: columnOrder }))
    }
  }
}
