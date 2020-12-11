import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
//get your students from mock-students.ts file instead
  // student: Student = {
  //   id: 1,
  //   name: 'Renee',
  //   major: 'Computer Science',
  //   isCool: true
  // }

  students = STUDENTS;

  selectedStudent?: Student; //adding the selectedStudent variable with a ? bc it won't exist until a student is clicked

  constructor() { }

  ngOnInit(): void {  }

  onSelect(student: Student): void {  //adding the onSelect method
    this.selectedStudent = student;
  }
}
