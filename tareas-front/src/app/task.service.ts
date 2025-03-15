import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import TaskType from './types/TaskType';
import TaskResponseType from './types/TaskResponseType';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiurl = 'http://localhost:5243/api/tareas'

  constructor(private http: HttpClient) {}

  createTask(task: TaskType):Observable<TaskResponseType> {
    return this.http.post<TaskResponseType>(this.apiurl, task)
  }
  getTasks():Observable<TaskResponseType> {
    return this.http.get<TaskResponseType>(this.apiurl)
  }
  checkTask(id:number):Observable<boolean> {
    return this.http.get<boolean>(this.apiurl)
  }
  deleteTask(id: number):Observable<boolean> {
    return this.http.get<boolean>(this.apiurl)
  }
}
