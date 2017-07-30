import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SService } from './services/s.service';
import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

@NgModule({
  declarations: [
    AppComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { counter: counterReducer }
    )
  ],
  providers: [
    SService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
