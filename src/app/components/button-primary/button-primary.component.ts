import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() buttonType: string = '';
  @Input() name: string = '';

  primary = false;
  secondary = false;

  constructor() {}

  ngOnInit(): void {
    this.primary = this.buttonType === 'primary';
    this.secondary = this.buttonType === 'secondary';
    console.log(this.buttonType, this.primary, this.secondary);
  }
}
