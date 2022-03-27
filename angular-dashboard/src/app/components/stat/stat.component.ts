import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
})
export class StatComponent implements OnInit {
  @Input() icon: any;
  @Input() class: string = '';
  @Input() figure: string = '';
  @Input() figureLabel: string = '';
  constructor() {}

  ngOnInit(): void {}
}
