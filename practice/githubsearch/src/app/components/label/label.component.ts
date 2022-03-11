import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
})
export class LabelComponent implements OnInit {
  @Input() value: number;
  @Input() label: string;
  @Input() bg: string;
  @Input() color: string;
  constructor() {}

  ngOnInit(): void {}
}
