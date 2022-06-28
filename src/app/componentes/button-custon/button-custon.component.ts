import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-custon',
  templateUrl: './button-custon.component.html',
  styleUrls: ['./button-custon.component.scss']
})
export class ButtonCustonComponent implements OnInit {
  @Input() nome: string=''
  constructor() { }

  ngOnInit(): void {
  }

}
