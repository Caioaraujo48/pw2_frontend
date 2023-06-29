import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit{

  listaPizzas: any[] =
  [
    {
      idTop: 1,
      nome: 'Pizza de Frango com Catupiry',
      foto: 'img/assets/frango-catupiry.jpeg',
      telefone: '+55 11 2906-0591',
      descricao: 'A pizza apresentada é considerada a melhor, por ser aquela que consegue combinar o delicioso sabor da carne com o queijo leve. Tornando assim uma iguaria equilibrada que enche bem.'
    },
    {
      idTop: 2,
      nome: 'Pizza de Calamussa',
      foto: 'img/assets/calamussa.jpeg',
      telefone: '+55 11 2909-1503',
      descricao: 'A pizza apresentada é uma coisa maravilhosa, pois combina o sabor mais vendido da calabresa com o queijo da mussarela.'
    },
    {
      idTop: 3,
      nome: 'Pizza de Calabresa',
      foto: 'img/assets/calabresa.jpeg',
      telefone: '+55 11 2901-3319',
      descricao: 'Pizza tradicional e adorada por muitos brasileiros é essa maravilha mostrada!'
    },
    {
      idTop: 4,
      nome: 'Pizza de Pepperoni',
      foto: 'img/assets/pepperoni.jpeg',
      telefone: '+55 11 2977-0200',
      descricao: 'Uma versão extremamente parecida com a de calamussa, porém com um gosto mais forte na escolha de carne'
    },
    {
      idTop: 5,
      nome: 'Pizza de Mussarela',
      foto: 'img/assets/mussarela.jpeg',
      telefone: '+55 11 2099-3668',
      descricao: 'Pizza mais tradicional e perfeita para todos os gostos, apenas tendo problema com os intolerante a lactose.'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
