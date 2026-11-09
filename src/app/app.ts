import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my-component/my-component';
import { Header } from './header/header';

@Component({
  imports: [RouterOutlet, MyComponent, Header],  
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true 
})
export class App {
  protected readonly title = signal('myangular');
}