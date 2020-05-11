import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';
import {ProdutosService} from '../service/produtos.service'

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  // todo modulo criado colocar dentro do parenteses do construtor
  constructor( private http: HttpClient) { }

  /* 
  
  CRUD - Create = get, Read = post, Update = put e Delete = delete
  */

  // importar modulo de HTTP

getAllProduto()
{
  return this.http.get('http://31.220.57.121:9080/produtos/')
}

getByIdProduto(id:number)
{
  return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
}

}

postProduto(produto: Produto){
  return this.http.post('http://31.220.57.121:9080/produtos/', produto)
}

putProduto(produto: Produto)
{
  return this.http.put('http://31.220.57.121:9080/produtos/', produto)
}


