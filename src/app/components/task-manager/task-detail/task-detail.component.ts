import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;
  constructor(
    private route: ActivatedRoute
    , private taskService: TaskService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log('data.id', data.id);
      this.taskService.getOne(data.id).subscribe((tsk) => {
        this.task = tsk;
        console.log('task title', this.task.title );
      });
    });



  }

}
