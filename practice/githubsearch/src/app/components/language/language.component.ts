import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {
  @Input() language: string;
  @Input() percentage: number | undefined;
  width: string = '45%';
  constructor() {}

  ngOnInit(): void {
    this.width = `${this.percentage}%`;
  }
}
