import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title:string;
  formSubmitted: boolean = false;
  constructor(
    private ts: TaskService
    , private msg: MessageService
  ) { }

  ngOnInit(): void {
  }

  Add(e){
    this.formSubmitted = true;
    e.preventDefault();
    console.log('this.title', this.title);
    this.ts.addTask(this.title).subscribe(
      (data) => {
        console.log('task added: ');        
        this.title = '';
        this.formSubmitted = true;
        this.msg.setMessage('Somthing happen');

      }
    );

    
  }

}
