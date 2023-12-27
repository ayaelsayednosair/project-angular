import { Employee } from './employee';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getallemp():Employee[]{
    return this.Employees

  }

  getEmpById(id: number): Employee|undefined {
    return  this.Employees.find(emp => emp.id === id);


  }


  DeletEmp(id:number){

    const index=this.Employees.findIndex(emp => emp.id === id)
    this.Employees.splice(index,1);
  }
  nextid=5;
createuser(emp :Employee){
  emp.id=this.nextid++;
  this.Employees.push(emp);
}


updateEmployee(empid:number , updateduser: Employee ){

  const index  =  this.Employees.findIndex(  emp => emp.id === empid);

  this.Employees[index] = {...updateduser , id : empid   }


}

















  private Employees:Employee[]=[
    {

      id:1,
      name:"aya",
      age :'30',
      email:"ayaelsayed@gmail.com",
      password:"123",
     add:"tanta",
     phone:'01204042183',


    },
    {

      id:2,
      name:"asmaa",
      age :"30",
      email:"ayaelsayed@gmail.com",
      password:"123",
     add:"cairo",
     phone:'01204042183',

    },
    {

      id:3,
      name:"mona",
      age :"30",
      email:"ayaelsayed@gmail.com",
      password:"123",
     add:"tanta",
     phone:'01204042183',

    },
    {

      id:4,
      name:"Ahmed",
      age :"30",
      email:"ayaelsayed@gmail.com",
      password:"123",
     add:"tanta",
     phone:'01204042183',

    },


      ]







}
