import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  @ViewChild('myForm', {static: true}) myForm: NgForm;
  advanced = 'advanced';
  submitted = false;
  myEmail: string;
  myPassword: string;
  myLevel: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.myForm) {
      console.log('form working')
      this.myEmail = this.myForm.value.email;
      this.myPassword = this.myForm.value.password;
      this.myLevel = this.myForm.value.level;
    } else {
      console.log('Form not working')
    }

    console.log(this.myForm);
  }

}
