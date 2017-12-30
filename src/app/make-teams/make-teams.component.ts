import { Component, OnInit } from '@angular/core';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import { UserService } from '../user.service';

@Component({
  selector: 'app-make-teams',
  templateUrl: './make-teams.component.html',
  styleUrls: ['./make-teams.component.css']
})
export class MakeTeamsComponent implements OnInit {
  employeeList = [];
  team1 = [];
  team2 = [];
  team3 = [];
  options: any = {
  removeOnSpill: true
};
  constructor(private service: UserService, private dragulaService: DragulaService) {

  if (localStorage.getItem('employee') === null) {
  this.service.getDetails().subscribe(res => {
     if (JSON.parse(res.text()).success === true) {
      this.employeeList = JSON.parse(res.text()).response;
     } else {
      alert('No employees found');
     }
  });
} else {
  this.employeeList = JSON.parse(localStorage.getItem('employee'));
  this.team1 = JSON.parse(localStorage.getItem('team1'));
  this.team2 = JSON.parse(localStorage.getItem('team2'));
  this.team3 = JSON.parse(localStorage.getItem('team3'));
}
  dragulaService.drop.subscribe((value) => {
    let remobj;
    if (value[3].id === 'employee') {
      const index = this.employeeList.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      remobj = this.employeeList.splice(index, 1);
    } else
    if (value[3].id === 'team1') {
      const index = this.team1.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      remobj = this.team1.splice(index, 1);
    } else
    if (value[3].id === 'team2') {
      const index = this.team2.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      remobj = this.team2.splice(index, 1);
    } else
    if (value[3].id === 'team3') {
      const index = this.team3.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      remobj = this.team3.splice(index, 1);
    }
    if (value[2].id === 'employee') {
      console.log(remobj);
      this.employeeList.push({email: value[1].firstChild.data, name: remobj[0].name, _id: remobj[0]._id});
    } else
    if (value[2].id === 'team1') {
      this.team1.push({email: value[1].firstChild.data, name: remobj[0].name, _id: remobj[0]._id});
    } else
    if (value[2].id === 'team2') {
      this.team2.push({email: value[1].firstChild.data, name: remobj[0].name, _id: remobj[0]._id});
    } else
    if (value[2].id === 'team3') {
      this.team3.push({email: value[1].firstChild.data, name: remobj[0].name, _id: remobj[0]._id});
    }
    console.log(remobj);
    // console.log(this.employeeList);

    // console.log(this.team1);
    // console.log(this.team2);
    // console.log(this.team3);
   // this.onDrop(value.slice(1));
  });
  }


  ngOnInit() {
  }

  saveData() {
    localStorage.setItem('employee', JSON.stringify(this.employeeList));
    localStorage.setItem('team1', JSON.stringify(this.team1));
    localStorage.setItem('team2', JSON.stringify(this.team2));
    localStorage.setItem('team3', JSON.stringify(this.team3));
  }

  removeData() {
    localStorage.removeItem('employee');
    localStorage.removeItem('team1');
    localStorage.removeItem('team2');
    localStorage.removeItem('team3');
  }
}
