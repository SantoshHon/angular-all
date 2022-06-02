import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Santosh Honrao';


  displayName()
  {
    return "Mindgate Solution Pvt Ltd";
  }
}

