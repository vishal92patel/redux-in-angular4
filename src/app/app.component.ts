import { Component, OnInit } from '@angular/core';
import { SService } from './services/s.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  template: `
  app.component
  <button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>
    <hr>
    <app-b></app-b>
  `
})

export class AppComponent{
  counter: Observable<any>;

	constructor(private store: Store<AppState>) {
		this.counter = store.select<any>('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}
