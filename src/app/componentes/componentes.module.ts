import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FildCustonComponent } from './fild-custon/fild-custon.component';
import { ButtonCustonComponent } from './button-custon/button-custon.component';



@NgModule({
  declarations: [
    FildCustonComponent,
    ButtonCustonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FildCustonComponent,
    ButtonCustonComponent
  ]
  
  
})
export class ComponentesModule { }
