import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  sendData(name: string, email: string) {
    this.service.createUser(name, email).subscribe(res => {
      if (JSON.parse(res.text()).success === true) {
        alert('Employee Added');
      } else {
        alert('Employee cannot be added');
      }
    });
  }
}
