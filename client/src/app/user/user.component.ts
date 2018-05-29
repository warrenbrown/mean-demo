import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  user = {};
  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.http.post('http://localhost:3000/api/user', this.user)
      .subscribe(res => {
        const id = res['_id'];
        this.router.navigate(['users/']);
      }, (err) => {
        console.log(err);
      }
    );
  }

  refreshEmployeelist() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
