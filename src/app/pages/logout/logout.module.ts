import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoutPageRoutingModule } from './logout-routing.module';

import { LogoutPage } from './logout.page';
import { HelloComponent } from './hello.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoutPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LogoutPage, HelloComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogoutPageModule {}
