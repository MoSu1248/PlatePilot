import { Component } from '@angular/core';
import { BottomBanner } from '../../shared/components/bottom-banner/bottom-banner';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-about',
  imports: [Footer, BottomBanner],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true,
})
export class AboutComponent {
  about__info_1 = [
    {
      title: 'Whole ingredients first.',
      text: 'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.',
    },
    {
      title: 'Flavor without compromise.',
      text: 'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.',
    },
    {
      title: 'Sustainable choices.',
      text: 'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly',
    },
  ];

  about__info_2 = [
    {
      title: 'Cut through the noise.',
      text: 'The internet is bursting with recipes, yet most busy cooks still default to take-away orpackaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.',
    },
    {
      title: 'Empower home kitchens.',
      text: 'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.',
    },
    {
      title: 'Make healthy look good.',
      text: ' High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.',
    },
  ];

  beyond_list = [
    {
      text: 'Encourage family dinners and social cooking.',
    },
    {
      text: 'Reduce reliance on single-use packaging and delivery waste.',
    },
    {
      text: 'Spark curiosity about seasonal produce and local agriculture.',
    },
  ];
}
