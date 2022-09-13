import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array <{nome: string, idade: number}> = [
    {nome: "Leo Costa", idade: 28},
    {nome: "Juh Costa", idade: 38},
    {nome: "Alice Costa", idade: 0.11},
  ]
  constructor() { }

  ngOnInit(): void {
    }

    public getDados(event: number){
      this.enviarDados.emit(this.list[event]);
      
  }

}
