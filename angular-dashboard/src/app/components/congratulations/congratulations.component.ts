import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css'],
})
export class CongratulationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: string = 'John';
  medalType: string = 'gold';
  salesAmount: string = '$48.9k';
}
