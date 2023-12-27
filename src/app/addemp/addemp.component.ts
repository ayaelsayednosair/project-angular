import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

Employee!:Employee[];
empserve:EmployeeService = inject (EmployeeService);
Employeeform! : FormGroup;

constructor(private formBuilder: FormBuilder) {

  this.Employeeform =  this.formBuilder.group({
    name:['' ],
    age :[''],
    email:[''],
    add:[''],
    password:[''],
    phone:[''],

  })

  this.Employee =  this.empserve.getallemp();

}
addemployee(){

  const user :Employee = this.Employeeform.value;
  this.empserve.createuser(user);
  console.log(user);
    }
}
