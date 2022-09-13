import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = 'Leonardo';
  public idade: number = 28;
  public idade1: number = 3;
  public trabalho: string = "Gestart";
  public funcao: string = 'Programador';

  public jack: boolean = false;
  public imgSrc: string = 'https://img.elo7.com.br/product/main/35DBE84/quadro-jesus-cristo-christ-akiane-kramarik-tela-45x60cm-christ.jpg';

  public position: {x: number, y: number} = {x: 0, y: 0}

  constructor() { }

  ngOnInit(): void { }

  public alertInfo(valor: MouseEvent){
    console.log(valor);
    
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
