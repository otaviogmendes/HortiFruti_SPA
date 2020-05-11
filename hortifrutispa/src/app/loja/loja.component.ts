import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  key = 'data';
  reverse = true;

  listaProdutos: Produto []

  produto: Produto = new Produto ()

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProduto()
  }

  findAllProduto ()
  {
    this.produtosService.getAllProduto().subscribe((resp: Produto[])=>{this.listaProdutos = resp})
  }
  
  salvar()
  {
    this.produtosService.putPostagem(this.produto).subscribe((resp: Produto)=>{this.produto = resp})
    this.router.navigate(['/loja'])
    location.assign('/loja')
  }
}
