import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  register() {

  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
