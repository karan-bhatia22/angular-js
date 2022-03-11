import { Component, Input, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/Stats';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css'],
})
export class UserStatsComponent implements OnInit {
  @Input() stats: Stats;
  constructor() {}
  ngOnInit(): void {}
}
