import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

const usersUrl = "https://jsonplaceholder.typicode.com/users";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private messageService: MessageService) {
    
  }
  
  // still testing yo chill
  async getUsers(): Promise<Observable<object[]>> {
    const res = axios.get(usersUrl);
    const {data} = await res;
    console.log("data in user service", data)
    data.map(() => {
      this.messageService.add("a message for each user");
    })
    return data;
  }
}
