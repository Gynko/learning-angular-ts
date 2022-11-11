import { Component, OnInit } from '@angular/core';
import { DropdownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  truc = false;
  constructor(public dropdown: DropdownService) {}

  ngOnInit(): void {}

  closeDropdown() {
    this.dropdown.toggleDropdown();
    console.log('hey', this.dropdown);
  }
}
