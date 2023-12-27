import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  empserve = inject (EmployeeService);
  Employees:Employee | undefined;

  constructor() {
    const userID = Number(this.route.snapshot.params['id']);
    this.Employees = this.empserve.getEmpById(userID);
  }




}
