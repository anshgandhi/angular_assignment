import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  username: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  emptyUserString(){
    if (this.username === "") {
      return true
    }
    return  false
  }
}
