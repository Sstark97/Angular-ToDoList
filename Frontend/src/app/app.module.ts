import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoComponent } from './ToDoComponent/to-do.component';


//import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ToDoComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
