import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SService {

  constructor() { }
  data: EventEmitter<any> = new EventEmitter();
  get() {
    return this.data;
  }
  set(v) {
    this.data.emit(this.data);
  }

}
