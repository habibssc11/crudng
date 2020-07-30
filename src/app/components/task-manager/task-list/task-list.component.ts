import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any = [];
  //tasks;

  constructor(private taskServices: TaskService, private msg: MessageService) { }

  ngOnInit(): void {
    this.getAllTask();
    this.msg.getMessage().subscribe( (data) => {
      console.log('message data', data);
      this.getAllTask();
    });
  }

  getAllTask(){
     this.taskServices.getTasks().subscribe((all) => {
        this.tasks = all;
        console.log('this.tasks', this.tasks);
     }); 
  }



}
