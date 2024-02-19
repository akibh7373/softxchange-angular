import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-platform-features-card',
  templateUrl: './platform-features-card.component.html',
  styleUrl: './platform-features-card.component.css',
})
export class PlatformFeaturesCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
