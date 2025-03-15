import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import TaskModel  from '../models/TaskModel';
// import TaskType from '../types/TaskType';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskForm: FormGroup;
  taskAdded = output<TaskModel>(); // Signal para emitir la tarea creada

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.minLength(4)],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: TaskModel = {
        titulo: this.taskForm.value.titulo,
        descripcion: this.taskForm.value.descripcion,
        completada: false,
      };
      this.taskAdded.emit(newTask); // Emite la tarea creada
      this.taskForm.reset();
    }
  }
}
