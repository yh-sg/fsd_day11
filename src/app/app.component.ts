import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() testVal:string;
  // title = 'hello-world';
  value: string = "Hello, this is Kenneth";
}
