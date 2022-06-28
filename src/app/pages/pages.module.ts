import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { Page2Component } from './page2/page2.component';




@NgModule({
  declarations: [
    LoginComponent,
    Page2Component
  ],
  imports: [
    CommonModule,PagesRoutingModule,ComponentesModule
  ]
})
export class PagesModule { }
