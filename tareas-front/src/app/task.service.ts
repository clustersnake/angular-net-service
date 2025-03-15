import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import TaskType from './types/TaskType';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiurl = 'http://localhost:5243/api/tareas'

  constructor(private http: HttpClient) {}

  createTask(task: TaskType):Observable<TaskType> {
    return this.http.post<TaskType>(this.apiurl, task)
  }
  getTasks():Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.apiurl)
  }
  checkDone(id:number, task: TaskType):Observable<boolean> {
    return this.http.put<boolean>(`${this.apiurl}/${id}`, {
        ...task,
        completada: true
    })
      .pipe(
        map(() => true),
        catchError((error: HttpErrorResponse) => {
          if(error.status === 204){
            return of(true)
          }
          return of(false)
        }
      ));
  }
  deleteTask(id: number):Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiurl}/${id}`)
      .pipe(
        map(() => true),
        catchError((error: HttpErrorResponse) => {
          if(error.status === 204){
            return of(true)
          }
          return of(false)
        }
      ));
  }
}
