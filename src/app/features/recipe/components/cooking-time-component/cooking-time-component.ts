import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cooking-time-component',
  standalone: true,
  templateUrl: './cooking-time-component.html',
  styleUrl: '../shared/shared.scss',
})
export class CookingTimeComponent {
  @Output() cookTimeChanged = new EventEmitter<number>();
  @Output() clearFilter = new EventEmitter<void>(); // optional clear button

  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  setFilter(minutes: number) {
    this.cookTimeChanged.emit(minutes);
  }

  clear() {
    this.clearFilter.emit();
  }
}
