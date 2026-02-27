import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() placeholder = 'Buscar...';
  @Output() searchTerm = new EventEmitter<string>();

  private searchSubject = new Subject<string>();
  value = '';

  constructor() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((term) => {
      this.searchTerm.emit(term);
    });
  }

  onInput(): void {
    this.searchSubject.next(this.value);
  }
}
