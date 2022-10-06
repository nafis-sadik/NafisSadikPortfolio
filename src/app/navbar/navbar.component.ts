import { Component, OnInit } from '@angular/core';
import {NavbarServiceService} from "./navbar-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public navbarService: NavbarServiceService) { }

  ngOnInit(): void {
  }

  toggleNavbarExpansion = () => { this.navbarService.expanded = !this.navbarService.expanded; }

}
