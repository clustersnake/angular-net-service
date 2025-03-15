import { Component, input, output } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import TaskType from '../types/TaskType';


@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  task = input.required<TaskType>();

  onUpdatedTask = output<boolean>();


  constructor(private taskService:TaskService){ }

  checkDone(id:number, task: TaskType){
    this.taskService.checkDone(id,task).subscribe(response => {
      this.onUpdatedTask.emit(response);
    })
  }

  delete(id:number){
    this.taskService.deleteTask(id).subscribe(response => {
      this.onUpdatedTask.emit(response);
    })
  }


}
