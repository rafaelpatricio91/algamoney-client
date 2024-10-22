import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos = [   {
    codigo: 12,
    descricao: 'Eletrônicos',
    dataVencimento: new Date(2022, 9, 15),
    dataPagamento: new Date(2019, 12, 30),
    valor: 2100.32,
    observacao: null,
    tipo: 'RECEITA',
    pessoa: 'Jeroquina'
  },
{
    codigo: 13,
    descricao: 'Instrumentos',
    dataVencimento: new Date(2020, 1, 2),
    dataPagamento: null,
    valor: 1040.32,
    observacao: null,
    tipo: 'DESPESA',
    pessoa: 'Leroy'
},
{
    codigo: 14,
    descricao: 'Café',
    dataVencimento: new Date(2019, 9, 27),
    dataPagamento: new Date(2016, 1, 9),
    valor: 4.32,
    observacao: null,
    tipo: 'DESPESA',
    pessoa: 'Paul Leroy'
},
{
    codigo: 15,
    descricao: 'Lanche',
    dataVencimento: new Date(2018, 6, 21),
    dataPagamento: null,
    valor: 10.20,
    observacao: null,
    tipo: 'DESPESA',
    pessoa: 'Kindi'
},
{
    codigo: 16,
    descricao: 'Uber',
    dataVencimento: new Date(2019, 5, 11),
    dataPagamento: null,
    valor: 45.00,
    observacao: null,
    tipo: 'RECEITA',
    pessoa: 'Joselia'
}]

  ngOnInit() {
  }

}
