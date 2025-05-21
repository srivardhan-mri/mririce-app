// src/app/pages/not-found/not-found.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // To link back to home

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  // You can inject ActivatedRoute here if you want to display the path that was not found
  // import { ActivatedRoute } from '@angular/router';
  // constructor(private route: ActivatedRoute) {}
  // pathNotFound: string = '';
  // ngOnInit() {
  //   this.pathNotFound = this.route.snapshot.url.join('/');
  // }

  constructor() { }
}
