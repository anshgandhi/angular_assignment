import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles : [`
    .white_color {
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'assignment3';
  display_toggle = false;
  events: string[]= []

  onClickDisplayDetails(){
    this.display_toggle = !this.display_toggle
    var a = Date.now().toString()
    this.events.push(a)
  }

  getStyle(item: string){
    return this.events.indexOf(item) >= 5 ? 'blue' : 'green'
  }

  getClass(item: string){
    return this.events.indexOf(item) >= 5 ? true : false
  }
}
