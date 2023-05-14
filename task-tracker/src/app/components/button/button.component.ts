import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() text: string; //Passed as button text to button.component.html
  @Input() color: string; //Paseed as button background color to button.component.html
  @Output() btnClick = new EventEmitter(); //Passed to header.component.html which triggers the toggleAddTask() function.
  constructor(){}
  ngOnInit():void{}
  onClick(){
    this.btnClick.emit(); //When button is clicked onClick() is called which emits btnClick to header.component.html
  }
}
