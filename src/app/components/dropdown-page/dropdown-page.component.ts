import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DropdownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.scss'],
})
export class DropdownPageComponent implements OnInit {
  @Input() dropdownID = '';
  @Input() dropdownTitle = '';

  constructor(public dropdown: DropdownService, public el: ElementRef) {}

  ngOnInit(): void {
    this.dropdown.register('drop1');
    this.dropdown.register('drop2');
    this.dropdown.register('drop3');
    this.dropdown.register('drop4');
    this.dropdown.register('drop5');
  }

  closeDropdown($event: Event) {
    this.dropdown.toggleDropdown(this.dropdownID);
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
