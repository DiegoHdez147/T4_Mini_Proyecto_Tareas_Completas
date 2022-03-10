import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    public favoriteTasks: string[];
  
    constructor(private taskService:TaskserviceService) {
      this.favoriteTasks = this.taskService.getFavoriteTasks();
    }
    
    public removeFavoriteTask(pos : number){
      this.taskService.degradeFavoriteTask(pos);
      this.favoriteTasks = this.taskService.getFavoriteTasks();
    }
    
    public completeFTask(pos : number){
      this.taskService.completeFavoriteTask(pos);
      this.favoriteTasks = this.taskService.getFavoriteTasks();
    }
}

