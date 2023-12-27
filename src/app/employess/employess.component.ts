import { EmployeeService } from './../employee.service';
import { Component,inject } from '@angular/core';
import {faEdit,faEye,faTrash }from'@fortawesome/free-solid-svg-icons';
import { Employee } from '../employee';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent {
icon1=faTrash;
icon2=faEdit;
icon3=faEye;
Employees:Employee[]=[];
empserve:EmployeeService = inject (EmployeeService);

constructor(){

  this.Employees =this.empserve.getallemp()


  }
  DeletUser(id:number){
    this.empserve.DeletEmp(id)
  }

}
