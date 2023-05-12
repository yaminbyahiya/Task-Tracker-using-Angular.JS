import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Tracker'; //Title variable is called on the header.component.html
  showAddTask: boolean = false; //THe Add/Close button is displayed on the basis of the boolean value of showAddTask variable
  subscription: Subscription;
  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask=value));
  }
  ngOnInit(): void {}
  toggleAddTask(){ //Executed when onClick() function on button.component.ts is called. It inverts the boolean value of showAddTask
    this.uiService.toggleAddTask();
  }
}
