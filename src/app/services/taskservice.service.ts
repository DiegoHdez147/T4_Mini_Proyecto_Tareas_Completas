import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  private tasks: string[] = [];
  private completedTasks: string[] = [];
  private favoriteTasks: string[] = [];


  constructor() { 
    this.tasks.push("Tarea 1","Tarea 3");
    this.completedTasks.push("Tarea 2", "Tarea 4");
    this.favoriteTasks.push("Tarea 5");
  }

  public addTask(task:string){
    this.tasks.push(task);
  }

  public removeTask(pos: number){
    this.tasks.splice(pos, 1);
  }

  public getTasks(){
    return this.tasks;
  }

  public completeTask(pos: number){
    this.completedTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public getCompletedTasks(){
    return this.completedTasks;
  }

  public removeCompleteTask(pos:number){
    this.completedTasks.splice(pos,1)
  }

  public unCompleteTask(pos: number){
    this.tasks.push(this.completedTasks[pos]);
    this.removeCompleteTask(pos);
  }
}
