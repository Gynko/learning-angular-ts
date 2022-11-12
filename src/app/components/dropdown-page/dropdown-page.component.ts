import { Component, Input, OnInit } from '@angular/core';
import { DropdownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.scss'],
})
export class DropdownPageComponent implements OnInit {
  @Input() dropdownID = '';
  @Input() dropdownTitle = '';
  constructor(public dropdown: DropdownService) {}

  ngOnInit(): void {
    this.dropdown.register('drop1');
    this.dropdown.register('drop2');
    this.dropdown.register('drop3');
  }

  closeDropdown() {
    this.dropdown.toggleDropdown(this.dropdownID);
  }
}
