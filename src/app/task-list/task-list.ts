import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
  standalone: true,
  imports: []
})
export class TaskList {
  tasks = [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' },
    { id: 3, title: 'C' }
  ];
//  tasks: { id: number, title: string }[] = [];

  viderListe() {
    this.tasks = []; 
  }
}