import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit{
  listaPizzas: any[] = [
    nome: 'Pizza de Frango com Catupiry',
    
  ]

  constructor() {}

  ngOnInit(): void {}
}
