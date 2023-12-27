import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-edite',
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.css']
})
export class EditeComponent {

  updateemoform! : FormGroup;
  empid!:number;
  constructor( private formbuilder:FormBuilder ,private empserve :EmployeeService ,private route:ActivatedRoute ){

    this.updateemoform =  this.formbuilder.group({
      name:['' ],
      age :[''],
      email:[''],
      add:[''],
      password:[''],
      phone:[''],

    })


  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empid = +params['id'];
      this.loadempDetails();
    });
  }
  loadempDetails() {
    const useeee = this.empserve.getEmpById(this.empid);

    if (useeee) {
      this.updateemoform.patchValue(useeee);
    } else {
      // Redirect to the product list if the product is not found

    }
  }
  updateEmployee() {
    if (this.updateemoform.valid) {
      const updateEmployee: Employee = {
        id: this.empid,
        ...this.updateemoform.value
      };

      this.empserve.updateEmployee(this.empid, updateEmployee);

    }
  }

}
