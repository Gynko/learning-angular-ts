import { Injectable } from '@angular/core';

/*
Id is used to know which dropdown is open, which can be used to update the adress bar
*/
interface IDropdown {
  id: string;
  open: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private dropdowns: IDropdown[] = [];

  constructor() {}

  register(id: string) {
    this.dropdowns.push({
      id,
      open: false,
    });
  }

  isDropdownOpen(id: string): boolean {
    return !!this.dropdowns.find((element) => element.id === id)?.open;
  }

  toggleDropdown(id: string) {
    const dropdown = this.dropdowns.find((element) => element.id === id);
    if (dropdown) dropdown.open = !dropdown.open;
    //this.open = !this.open;
  }
}
