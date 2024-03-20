import { Component } from '@angular/core';
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-getstudents',
  templateUrl: './getstudents.component.html',
  styleUrl: './getstudents.component.css'
})
export class GetstudentsComponent {
  students:any=[];
  constructor(private service:StudentService,private activatedRoute:ActivatedRoute,
              private router:Router) {
  }
  ngOnInit(){
this.getStudents();
  }
  getStudents(){
    this.service.getStudents().subscribe((res)=>{
      this.students=res;
    })
  }
  deleteStudent(id:number) {
    this.service.deleteStudent(id).subscribe((res)=>{
      this.getStudents();
    })
  }
}
