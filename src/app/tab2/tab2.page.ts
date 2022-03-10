import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public taskComplete : String []

  constructor(private taskService:TaskserviceService){
    this.taskComplete = this.taskService.getCompletedTasks();
  }

  public removeCompletedTask(pos : number){
    this.taskService.removeCompleteTask(pos);
    this.taskService.getCompletedTasks();
  }

  public unCompleteTask(pos : number){
    this.taskService.unCompleteTask(pos)
    this.taskService.getCompletedTasks();
  }
}
