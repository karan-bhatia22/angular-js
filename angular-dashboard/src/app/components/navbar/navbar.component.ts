import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  faEnvelope = faEnvelope;
  faCommentAlt = faCommentAlt;
  faCalendar = faCalendar;
  faClipboardList = faClipboardList;
  faStar = faStar;
  faMoon = faMoon;
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faBell = faBell;
  userName: string = 'John Doe';
  userRole: string = 'Admin';
  ngOnInit(): void {}
}
