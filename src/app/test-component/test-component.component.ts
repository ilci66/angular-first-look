import { Component, OnInit } from '@angular/core';

type User = {id: Number, name: string}

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.sass']
})
export class TestComponentComponent implements OnInit {
  users: User[] = [];
  currentUser: User | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
