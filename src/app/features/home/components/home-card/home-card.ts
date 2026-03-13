import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  standalone: true,
  templateUrl: './home-card.html',
  styleUrl: './home-card.scss',
})
export class HomeCardComponent {
  @Input() card!: { title: string; text: string; imgSrc: string };
}