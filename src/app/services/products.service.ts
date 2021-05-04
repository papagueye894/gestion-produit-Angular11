import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({providedIn: 'root'})
export  class ProductsService {
  constructor (private http:HttpClient) {

  }

  getAllProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products");
  }

  getSelectedProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }

  getAvailableProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }

  searchProducts(keyword:string):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }

  select(product:Product):Observable<void>{
    let host=environment.host;
    product.selected=!product.selected;
    // @ts-ignore
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }

  deleteProduct(product:Product):Observable<Product>{
    let host=environment.host;
    product.selected=!product.selected;
    // @ts-ignore
    return this.http.delete<void>(host+"/products/"+product.id);
  }

  save(product:Product):Observable<void>{
    let host=environment.host;
    // @ts-ignore
    return this.http.post<Product>(host+"/products",product);
  }

  // @ts-ignore
  getProduct(id:number):Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/products/"+id);
  }

  // @ts-ignore
  updateProduct(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }

}
