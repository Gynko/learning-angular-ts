import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() buttonType: string = '';
  @Input() name: string = '';

  primary = false;
  secondary = false;
  tertiary = false;

  constructor() {}

  ngOnInit(): void {
    this.primary = this.buttonType === 'primary';
    this.secondary = this.buttonType === 'secondary';
    this.tertiary = this.buttonType === 'tertiary';
  }
}
