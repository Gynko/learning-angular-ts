import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroTextComponent } from './hero-text/hero-text.component';
import { ButtonPrimaryComponent } from './buttons/buttons.component';
import { DropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroTextComponent,
    ButtonPrimaryComponent,
    DropdownPageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    HeaderComponent,
    HeroTextComponent,
    DropdownPageComponent,
    ButtonPrimaryComponent,
  ],
})
export class ComponentsModule {}
