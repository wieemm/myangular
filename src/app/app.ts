import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my-component/my-component';

@Component({
  imports: [RouterOutlet, MyComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myangular');
}
