import { Component } from '@angular/core';
import { BottomBanner } from '../../shared/components/bottom-banner/bottom-banner';
import { Footer } from '../../shared/components/footer/footer';
@Component({
  selector: 'app-home',
  imports: [BottomBanner, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
