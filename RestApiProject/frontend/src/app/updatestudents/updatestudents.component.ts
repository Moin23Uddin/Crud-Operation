import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../student.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-updatestudents',
  templateUrl: './updatestudents.component.html',
  styleUrl: './updatestudents.component.css'
})
export class UpdatestudentsComponent {
  updateStudentForm !: FormGroup;
  id:number=this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute:ActivatedRoute,
          private service : StudentService,
              private fb:FormBuilder,
              private router:Router) {
  }
  ngOnInit(){
    this.updateStudentForm = this.fb.group(
      {firstname: [null,Validators.required],
        lastName: [null, [Validators.required,Validators.email]],
        email: [null,Validators.required],
      })
  this.getStudentBYId();
  }
  getStudentBYId(){
    this.service.getStudentBYId(this.id).subscribe((res)=>{
      this.updateStudentForm.patchValue(res);
    })
  }
  updateStudent(){
    this.service.updateStudent(this.id,this.updateStudentForm.value).subscribe((res)=>{
      this.router.navigateByUrl("");
    })
  }
}
