import { Component, OnInit } from '@angular/core';

declare function iniciar(): void;
declare function start(tipo: number): void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    iniciar();
    start(0);

    
  }

}




