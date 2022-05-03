import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

// don't know much about my users
type User = {}

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.sass']
})
export class TestComponentComponent implements OnInit {
  users: any;
  currentUser: User | undefined;
  
  constructor(private userService: UserService) {
    
  }
  
  ngOnInit(): void {
    this.getUsers();
  }
  
  async getUsers(): Promise<void> {
    (await this.userService.getUsers())
      .subscribe((users: any) => this.users = users);
  }
}
