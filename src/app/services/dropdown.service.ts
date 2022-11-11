import { Injectable } from '@angular/core';

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
    this.dropdowns.push({ id, open: false });
    console.log(this.dropdowns);
  }

  isDropdownOpen() {
    return true;
  }

  toggleModal() {
    
  }
}
