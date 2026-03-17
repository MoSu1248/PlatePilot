import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../shared/icons/logo/logo';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
})
export class NavbarComponent {}
