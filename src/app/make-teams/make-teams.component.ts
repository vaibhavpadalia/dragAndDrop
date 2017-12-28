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

  this.service.getDetails().subscribe(res => {
     if (JSON.parse(res.text()).success === true) {
      this.employeeList = JSON.parse(res.text()).response;
     } else {
      alert('No employees found');
     }
  });

  dragulaService.drop.subscribe((value) => {
    let remobj;
    if (value[3].id === 'employee') {
      const index = this.employeeList.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      remobj = this.employeeList.splice(index, 1);
      // console.log(remobj[0].email);
      // console.log(this.employeeList);
    } else
    if (value[3].id === 'team1') {
      const index = this.team1.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      this.team1.splice(index, 1);
      console.log(this.employeeList);
    } else
    if (value[3].id === 'team2') {
      const index = this.team2.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      this.team2.splice(index, 1);
    } else
    if (value[3].id === 'team3') {
      const index = this.team3.map(function (e) {
        return e.email;
      }).indexOf(value[1].firstChild.data);
      this.team3.splice(index, 1);
    }
    if (value[2].id === 'employee') {
      this.employeeList.push({email: value[1].firstChild.data, name: remobj[0].name});
    } else
    if (value[2].id === 'team1') {
      this.team1.push({email: value[1].firstChild.data, name: remobj[0].name});
    } else
    if (value[2].id === 'team2') {
      this.team2.push({email: value[1].firstChild.data, name: remobj[0].name});
    } else
    if (value[2].id === 'team3') {
      this.team3.push({email: value[1].firstChild.data, name: remobj[0].name});
    }
    // console.log(this.employeeList);

    // console.log(this.team1);
    // console.log(this.team2);
    // console.log(this.team3);
   // this.onDrop(value.slice(1));
  });
  }


  ngOnInit() {
  }

removeItem(item: any, list: Array < any >) {
  const index = list.map(function (e) {
    return e.name;
  }).indexOf(item.name);
  list.splice(index, 1);
}

}


// value[1].firstChild.data - Element that is transferred
// sender - value[1].id value[3].id
// receiver - value[4].id value[2].id
