import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../task.service';
import { JsonPipe } from '@angular/common';
import TaskType from '../types/TaskType';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, JsonPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: TaskType[] = [];
  constructor(private taskService:TaskService){}

  ngOnInit(){
      this.fetchTasks()
  }
  refreshTasks(shoudRefresh:boolean){
    if(shoudRefresh){
      this.fetchTasks()
    }
  }
  fetchTasks(){
    this.taskService.getTasks().subscribe(response => {
      this.tasks = response
    })
  }



}
