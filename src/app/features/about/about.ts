import { Component } from '@angular/core';
import { BottomBanner } from '../../shared/components/bottom-banner/bottom-banner';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-about',
  imports: [Footer, BottomBanner],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {}
