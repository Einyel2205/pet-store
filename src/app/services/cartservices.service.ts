import { Injectable } from '@angular/core';

//Definimos la interfaz para representar un producto
export interface Product{
  id: number,
  name: string,
  price: number,
  description: string,
  image:  string
}

@Injectable({
  providedIn: 'root'
})

export class CartServicesService {

  //Array para almacenar los productos del carrito
  private cart: Product[] = [];

  constructor() { }
  //Crear metodo para añadir un producto al carrito
  addProduct(product:Product):void{
    this.cart.push(product);
  }

  // Crear Método para eliminar un producto del carrito por su ID
  removeProductById(productId: number): void{
    this.cart.filter( product => product.id !== productId);
  }

  //Crear metodo para obtener todos los prodcutos de carrito
  getProducts(): Product[]{
    return this.cart;
  }

  //Crear metodo para calcular el precio total de los productos en el carrito
  getTotalPrice(): number{
    return this.cart.reduce((total, product)=> total + product.price ,0) ;  
  }

  //Crear metodo para vaciar el carrito
  clearCart():void{
    this.cart=[];
  }
}
