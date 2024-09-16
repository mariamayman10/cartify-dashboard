import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenubarComponent {
  showFiller = false;
}
