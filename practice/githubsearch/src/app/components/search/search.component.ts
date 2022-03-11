import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  searchQuery: string = '';
  @Output() onSearch = new EventEmitter();
  ngOnInit(): void {}
  onKeyUp(val: string): void {
    this.searchQuery = val;
  }
  onBtnClick(): void {
    this.onSearch.emit(this.searchQuery);
  }
}
