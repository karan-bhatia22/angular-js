import { Component, Input, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/Stats';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  @Input() user: User;
  @Input() stats: Stats;
  constructor() {}

  ngOnInit(): void {}
}
