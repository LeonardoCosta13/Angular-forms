import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
      <app-data-biding></app-data-biding>
  -->
    <!-- <app-diretivas-estruturais><router-outlet></router-outlet> -->
    <!--
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributo</h1>
      <h3>The end</h3>
    </app-diretivas-atributos>
    -->
    <!-- <app-diretivas-atributos>
    <h1>Good morning</h1>
    <h3>O gera bebê</h3>
  </app-diretivas-atributos>
  -->
  <!--
  <app-new-component></app-new-component>
  <app-title></app-title>
  <app-diretivas-atributos> </app-diretivas-atributos>-->

  <!-- <app-input [contador]="addValue"></app-input>
  <br><br>
  <button (click) = "Add()"> Add </button>
  <router-outlet></router-outlet> 
  
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>

  
  <app-output (enviarDados)="setDados($event)"></app-output>
  
  <app-food-add></app-food-add>

  -->

  <app-forms></app-forms>
  
  <app-food-list></app-food-list>

      `

})
export class AppComponent implements OnInit {

  public getDados: {
    nome: String, idade: number} | undefined ;
  public Add(){
    this.addValue += 1;
  }
  public addValue: number = 0;
  constructor(){
  }
   
  ngOnInit(): void {
    
  }

  public setDados(event: {nome: String, idade: number}){
    this.getDados = event;
  }

}
