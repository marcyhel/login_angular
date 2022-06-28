import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fild-custon',
  templateUrl: './fild-custon.component.html',
  styleUrls: ['./fild-custon.component.scss']
})
export class FildCustonComponent implements OnInit {
  @Input() nameLabel: string = '';
  @Input() placeholder: string = '';
  @Output() value = new EventEmitter<string>();
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  
  keyUp(event:any){
    
    this.value.emit( event.target.value);
  }

}
