import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  status:boolean = false;
  addStyle() {
    this.status = !this.status;
    console.log('status:', this.status);
  }
}
