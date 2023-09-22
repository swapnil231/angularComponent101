import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counterprogress: number = 0;
  totalcountdown = 15;
  title = 'angularComponent101';
  updatepregress($event: any) {
    this.counterprogress =
      ((this.totalcountdown - $event) / this.totalcountdown) * 100;
  }
  coundownfinish() {
    console.log('countdown has finished');
  }
}
