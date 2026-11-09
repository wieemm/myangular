import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html', //hada kandiroh comme balise f app.html
  styleUrl: './header.scss',
  standalone: true, 
  imports: []
})
export class Header {
  title= 'TaskFlow';
  canDelete = false;

deleteCount = 0;

  rename() {
    this.title = 'wiam';
  }

  delete() {
    if (this.title.includes('wiam')) {
      this.title = '';
      this.deleteCount++; 
    }
  }
}