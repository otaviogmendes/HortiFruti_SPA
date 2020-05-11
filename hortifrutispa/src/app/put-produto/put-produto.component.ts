import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/produtos.service';
import { Postagem } from '../model/Postagem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  key = 'data'
  reverse = true

  listaProdutos: Produto []
  produto: Produto = new Produto ()
 
 
  constructor(private postagemService: PostagemService, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }
  findById(id:number)
  {
    this.produtosService.getByIdPostagem(id).subscribe((resp: Produto)=>{this.produto = resp})
  }

  salvar()
  {
    this.produtosService.putPostagem(this.produto).subscribe((resp: Produto)=>{this.produto = resp})
    this.router.navigate(['/loja'])
    location.assign('/loja')
  }
}