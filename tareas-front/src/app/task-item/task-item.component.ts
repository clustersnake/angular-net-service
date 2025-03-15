import { Component, input } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule, JsonPipe } from '@angular/common';
import TaskType from '../types/TaskType';


@Component({
  selector: 'app-task-item',
  imports: [JsonPipe, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  task = input.required<TaskType>();

  constructor(private taskService:TaskService){ }

  checkDone(id:number){
    //this.taskService.checkDone(id).subscribe()
    alert('done: ' + id)
  }

  delete(id:number){
    alert('delete: ' + id)

  }


}
