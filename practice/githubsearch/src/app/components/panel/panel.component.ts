import { Component, Input, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/Stats';
import { User } from 'src/app/models/User';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  faGithub = faGithub;
  @Input() user: User;
  @Input() stats: Stats;
  constructor() {}

  ngOnInit(): void {}
}
