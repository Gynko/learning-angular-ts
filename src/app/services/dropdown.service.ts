import { Injectable } from '@angular/core';

/*
Id is used to know which dropdown is open, which can be used to update the adress bar
*/

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private open = false;

  constructor() {}

  isDropdownOpen() {
    return this.open;
  }

  toggleDropdown() {
    this.open = !this.open;
  }
}
