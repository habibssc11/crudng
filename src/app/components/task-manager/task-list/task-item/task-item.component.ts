import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()task:Task
  constructor( 
    private ts: TaskService
    , private msg: MessageService
    ) { }

  ngOnInit(): void {
  }

  Delete(){
    console.log(this.task.id);
    this.ts.deleteTask(this.task.id).subscribe((data) =>{

      //console.log('data', data);
      console.log('Task Deleted :', data.id);
      this.msg.setMessage('Somthing happen');

      
    } );
  }



}
