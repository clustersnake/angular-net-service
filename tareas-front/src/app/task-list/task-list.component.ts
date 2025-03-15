import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../task.service';
import TaskType from '../types/TaskType';
import TaskModel from '../models/TaskModel';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, TaskFormComponent],
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
 onTaskAdded(newTask: TaskModel) {
    this.taskService.createTask(newTask).subscribe(() => {
      this.fetchTasks(); // Recarga la lista de tareas
    });
  }

}
