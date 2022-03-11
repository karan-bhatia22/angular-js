import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent implements OnInit {
  @Input() field: string;
  @Input() value: string | null;
  constructor() {}

  ngOnInit(): void {}
}
