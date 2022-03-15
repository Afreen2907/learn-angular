import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //-> use this to add multiple styles 
  // styles: [`
  //   h3{
  //     color: dodgerblue;
  //   }
  // `] -> use this if there are very few styles to add
})
export class AppComponent {
  name = 'my-first-app';
}
