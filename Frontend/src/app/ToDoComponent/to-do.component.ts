import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  @Input() task: Task[] = []; 
  @Input() i:number = 0;
  @Input() present = 0;
  @Output() removeParent = new EventEmitter();
  @Output() completeParent = new EventEmitter();

  remove(event: string){
    console.log("Component");
    this.removeParent.emit(event);
  }

  complete(id:number){
    this.completeParent.emit(id);

  }

}
