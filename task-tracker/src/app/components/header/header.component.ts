import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Tracker'; //Title variable is called on the header.component.html
  showAddTask: boolean = false; //THe Add/Close button is displayed on the basis of the boolean value of showAddTask variable
  subscription: Subscription;
  constructor(private uiService:UiService, private router: Router){
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask=value)); //Receives the boolean value of showAddTask from observable Subject which returns the showAddTask variable value of ui.services.ts. 
  }
  ngOnInit(): void {}
  toggleAddTask(){ //Executed when onClick() function on button.component.ts is called. It inverts the boolean value of showAddTask
    this.uiService.toggleAddTask();
  }
  hasRouter(route:string){ //Makes sure the button component is only visible on the home page by comparing the current link with the home page link paseed as parameter. 
    return this.router.url === route;
  }
}
