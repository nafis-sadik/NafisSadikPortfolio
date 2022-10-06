import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  public expanded: boolean = true;
  constructor() { }
}
