import { Component } from '@angular/core';
import { BottomBanner } from '../../shared/components/bottom-banner/bottom-banner';
import { Footer } from '../../shared/components/footer/footer';
import { HomeCardComponent } from './components/home-card/home-card';

@Component({
  selector: 'app-home',
  imports: [BottomBanner, Footer, HomeCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  featureCards = [
    {
      imgSrc: 'assets/images/icon-whole-food-recipes.svg',
      title: 'Whole-food recipes',
      text: 'Each dish uses everyday, unprocessed ingredients.',
    },
    {
      imgSrc: 'assets/images/icon-minimum-fuss.svg',
      title: 'Minimum fuss',
      text: 'All recipes are designed to make eating healthy quick and easy.',
    },
    {
      imgSrc: 'assets/images/icon-search-in-seconds.svg',
      title: 'Search in seconds',
      text: 'Filter by name or ingredient and jump straight to the recipe you need.',
    },
  ];
}
