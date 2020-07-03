import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  server:string = 'http://localhost:8000/';
  // public httpOptions = new HttpHeaders({
  //     'enctype': 'multipart/form-data',
  //     'content-type': 'application/json',
  //     'X-Requested-With': 'XMLHttpRequest'      
  //   });
  
  public httpOptions = {
    headers: new HttpHeaders({
      'enctype': 'multipart/form-data',
      'content-type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'my-auth-token'
    })
  };
  

  constructor(
    private http: HttpClient
    //, private headers: HttpHeaders
    ) { 
      // this.headers.append('enctype', 'multipart/form-data');
      // this.headers.append('content-type', 'application/json');
      // this.headers.append('X-Requested-With', 'XMLHttpRequest');

    }


  addTask(title):Observable<Task>{

    const newTask = new Task(title);
    console.log('newTask', newTask);

    return this.http.post<Task>(this.server+'add', newTask);
  }

  getTasks():Observable<Task>{
    return this.http.get<Task>(this.server+'get');
  }

  deleteTask(no):Observable<Task>{

    const newTask = {
      id: no,
      title: 'not set',
      status: false,
      date: new Date()
    }

    return this.http.post<Task>(this.server+'delete', newTask );
  }

  getOne(no):Observable<Task>{
    const newTask = {
      id: no,
      title: 'not set',
      status: false,
      date: new Date()
    }

    return this.http.post<Task>(this.server+'getone', newTask );
  }

}