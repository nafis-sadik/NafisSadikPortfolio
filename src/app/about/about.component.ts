import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from "../navbar/navbar-service.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public navbarService: NavbarServiceService) { }

  ngOnInit(): void {
  }

}
