import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  task1: Task = {
    title: "",
    complete: false,
    Day: 1
  };
  taskObject: Task[] = [];
  congratulations:string = "";
  present: number = new Date(Date.now()).getDay();
  i:number = 0;
  data:Task[] = [];
  key:string;
  db;

  constructor(){
    this.key = 'Task';
    this.db = localStorage.getItem(this.key);
    if(this.db != null){
      this.taskObject = JSON.parse(this.db);
      if(!this.taskObject || this.taskObject.length < 1 ){
        this.data = [
            this.task1
        ];
      } 
    }
  }
  add(): void {
    if(this.task1.title!= ""){
      this.task1.Day = new Date(Date.now()).getDay();
      this.taskObject.push({...this.task1});
      this.task1.title = "";
      this.task1.Day = 1;
      this.present = new Date(Date.now()).getDay();
      this.i++;
      this.save();
    }
  }

  remove(task:string): void {
    this.taskObject = this.taskObject.filter(i => i.title != task);
    this.save();
    console.log(this.data);
  }

  removeAll(): void {
    this.taskObject = [];
    this.save();
  }

  complete(id:number): void {
    this.taskObject[id].complete = !this.taskObject[id].complete ;

    let res = this.taskObject.some(task => !task.complete);

    if(!res){
      this.congratulations = "Felicidades has completado todas las tareas!"

      setTimeout(() => {
        this.congratulations = "";
        
      }, 5000);
    }
    this.save();
  
  }

  completeAll(): void {
    if(this.taskObject.length != 0){
      this.taskObject.forEach(task => {
        task.complete = true;
      })
  
      this.congratulations = "Felicidades has completado todas las tares"
  
      setTimeout(() => {
        this.congratulations = ""; 
      }, 5000);
    }

    this.save()
    
  }

  filterToDay(): void {
    let today: number = new Date(Date.now()).getDay();
    this.taskObject = this.taskObject.filter(task => task.Day == today);
    this.save()
  }

  save(){
    localStorage.setItem('Task', JSON.stringify(this.taskObject));
  }

}

export interface Task{
  "title": string,
  "complete": boolean,
  "Day": number;
}
