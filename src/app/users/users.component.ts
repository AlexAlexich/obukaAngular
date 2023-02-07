import { User } from './../../const/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  changedName: string;
  changedLastname: string;
  counter: number;
  allUsers: Array<User>;
  textToOutput: string = "Here";
  constructor() { }

  user: User;
  ngOnInit(): void {
    this.populateUsers();
  }
  populateUsers(): void {

    this.allUsers = new Array<User>();
    let user = new User();
    user.id = 1;
    user.name = 'Sale';
    user.lastname = 'Salic';
    this.allUsers.push(user);
    user = new User();
    user.id = 2;
    user.name = 'Cile';
    user.lastname = 'Cilic';
    this.allUsers.push(user);
    user = new User();
    user.id = 3;
    user.name = 'Dragan';
    user.lastname = 'Dragic';
    this.allUsers.push(user);
  }
  showChangeUser(user: User) {
    this.user = JSON.parse(JSON.stringify(user));
  }
  showAddUser() {
    this.user = new User();
  }
  cancelUserChange() {
    this.user = null;
  }
  saveUser(user: User): void {
    if (user.id) {
      this.updateUser(user);
      return;
    }
    this.user.id = Math.random()
    this.allUsers.push(this.user)
    this.user = null;
  }

  private updateUser(user: User): void {
    let userIndex = this.allUsers.findIndex((item) => item.id === user.id);
    let newUser = JSON.parse(JSON.stringify(user));
    this.allUsers[userIndex] = newUser;
    this.user = null;
  }

  editTextToOutput(newText: string): void {
    this.textToOutput = newText
  }
}
