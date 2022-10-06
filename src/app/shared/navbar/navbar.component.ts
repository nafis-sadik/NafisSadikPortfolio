import { Component, OnInit } from '@angular/core';
import {NavbarService} from "./navbar.service";

@Component({
  selector: 'app-navbar-new',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public navbarService: NavbarService) { }

  ngOnInit(): void {
  }

  toggleNavbarExpansion = () => { this.navbarService.expanded = !this.navbarService.expanded; }
}
