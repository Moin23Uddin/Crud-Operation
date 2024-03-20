import { Component } from '@angular/core';
import {StudentService} from "../student.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-poststudents',
  templateUrl: './poststudents.component.html',
  styleUrl: './poststudents.component.css'
})
export class PoststudentsComponent {
  postStudentForm !: FormGroup;
  constructor(private studentService : StudentService,   private fb:FormBuilder ,
              private router:Router  ) {

  }
  ngOnInit(){
    this.postStudentForm = this.fb.group(
      {
        firstname: [null,Validators.required],
        lastName: [null, [Validators.required,Validators.email]],
        email: [null,Validators.required],
      }
    )
  }
  postStudent(){
    this.studentService.postStudent(this.postStudentForm.value).subscribe((res)=>{
      this.router.navigateByUrl('');
  })
  }
}

