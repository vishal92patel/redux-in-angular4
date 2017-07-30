import { Component, OnInit } from '@angular/core';
import { SService } from '../services/s.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-b',
  template: 'b.component <b>{{counter | async}}</b>'
})
export class BComponent implements OnInit {
  counter;
  constructor(private store: Store<AppState>) {
    this.counter = store.select<any>('counter');
    store.subscribe(
      (res) => {
        console.log(res);
        this.load(res);
      }
    )

  }
  ngOnInit() {

  }
  load(res) {
    if (res.counter == '2' ){
      alert(res);
    }
  }

}
