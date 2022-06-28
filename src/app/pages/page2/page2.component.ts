import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  total_lista: number = 5;
  lista_iterada: Array<number> = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }
  gera_array(){
    this.lista_iterada=[];
    for(let i = 1; i<=this.total_lista;i++){
      this.lista_iterada.push(i);
    }
  }
}
