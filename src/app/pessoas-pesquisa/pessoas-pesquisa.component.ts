import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas = [
    {
        codigo: 1,
        nome: 'Rafael',
        ativo: true,
        endereco: {
            logradouro: 'Rua Carijo',
            numero: 31,
            complemento: 'Universidade da Crianca',
            bairro: 'Sao Roque',
            cep: '26132-250',
            cidade: 'Queimados',
            estado: 'RJ'
        }
    },
    {
        codigo: 2,
        nome: 'Roumenique',
        ativo: false,
        endereco: {
            logradouro: 'Rua Sertao',
            numero: 154,
            complemento: '',
            bairro: 'Da Serra',
            cep: '126548-526',
            cidade: 'Taboao',
            estado: 'SP'
        }
    },
    {
        codigo: 3,
        nome: 'Adevando',
        ativo: false,
        endereco: {
            logradouro: 'Rua Taioba',
            numero: 11,
            complemento: '',
            bairro: 'Gerome',
            cep: '444528-152',
            cidade: 'Ruao',
            estado: 'MG'
        }
    },
    {
        codigo: 4,
        nome: 'Jeroquina',
        ativo: false,
        endereco: {
            logradouro: 'Rua Jattada',
            numero: 85,
            complemento: '',
            bairro: 'Leos',
            cep: '854632-251',
            cidade: 'Love',
            estado: 'RN'
        }
    },
    {
        codigo: 5,
        nome: 'Levi balanciaga',
        ativo: false,
        endereco: {
            logradouro: 'Rua do piruzao',
            numero: 24,
            complemento: 'Em frente a otica',
            bairro: 'Centro',
            cep: '242424-240',
            cidade: 'Taboa larga',
            estado: 'RJ'
        }
    },
    {
        codigo: 6,
        nome: 'Ana Joyce',
        ativo: true,
        endereco: {
            logradouro: 'Rua Heloisa',
            numero: 814,
            complemento: 'Fundos',
            bairro: 'Vila do Tingua',
            cep: '26320270',
            cidade: 'Queimados',
            estado: 'RJ'
        }
    },
    {
        codigo: 8,
        nome: 'Joel Jarel',
        ativo: true,
        endereco: {
            logradouro: 'Rua Zero',
            numero: 123,
            complemento: 'Lote 5',
            bairro: 'Vila Nova',
            cep: '26355558',
            cidade: 'Recife',
            estado: 'SP'
        }
    }
]

  ngOnInit() {
  }

}
