import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-2-practicing-databinding';

  username = '';

  resetString() {
    this.username = '';
  }
}
