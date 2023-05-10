import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(private taskService:TaskService){}
  tasks: Task[] = [];
  ngOnInit():void{
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks=tasks;
    });
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks=this.tasks.filter(t=>t.id !== task.id);
    });
  }
  toggleTask(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
