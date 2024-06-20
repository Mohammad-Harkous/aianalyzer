import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup2',
  standalone: true,
  templateUrl: './signup2.component.html',
  styleUrl: './signup2.component.css',
  imports: [NavbarComponent, FormsModule, CommonModule],
})
export class Signup2Component {
  selectedOption: string = '';
}
