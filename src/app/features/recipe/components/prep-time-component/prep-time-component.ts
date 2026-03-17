import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prep-time-component',
  standalone: true,
  templateUrl: './prep-time-component.html',
  styleUrl: '../shared/shared.scss',
  imports: [CommonModule],
})
export class PrepTimeComponent {
  @Output() prepTimeChanged = new EventEmitter<number>();
  @Output() clearFilter = new EventEmitter<void>();

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  setFilter(minutes: number) {
    this.prepTimeChanged.emit(minutes);
  }

  clear() {
    this.clearFilter.emit();
  }
}
