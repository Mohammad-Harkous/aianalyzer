import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [FormsModule, CommonModule, NavbarComponent],
})
export class HomepageComponent {
  selectedOption: string = '';

  constructor(private router: Router) {}
  onSelectionChange() {
    if (this.selectedOption === 'startup') {
      this.router.navigate(['signup2']);
    }
  }
}
