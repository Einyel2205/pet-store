import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{

// creacion del Input que recibe del compoente padre el array de productos
@Input()  product = {
  name: '',
  price: 0,
  description: '',
  inventory: 0,
  image: '',
  cantidad: 0
};

//1. Agregar Output
@Output() addToCart = new EventEmitter();


cantidad: number = 0;
soldOut: boolean = false;


//fin objeto de producto.
  constructor() { }

  ngOnInit() {
  }


  //esta funcion permite agregar productos, si la cantidad actual es menor a la del inventario lafuncion establece "this.soldOut" en "false" permitiendo incrementar la cantidad agregada, de lo contrario se establecerá en true, lo que indica que el producto está agotado en el inventario y no permitirá agregar mas prodcutos 
  addProduct() {
    if(this.cantidad < this.product.inventory){
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }

  //Esta funcion verifica si la cantidad del producto es mayor a cero para asegurarse de que solo se eliminen productos de donde se esté haciendo el incremento. Si la cantidad es mayor a cero, la funcion "this.soldOut" en "false", diciendo que el producto no está agotado y se puede continuar eliminando. Luego la funcion decrementa la cantidad del producto en uno.
  removeProduct() {
    if(this.cantidad > 0){
      this.soldOut = false;
      this.cantidad--;
    }
  }

  addToCartHandler(){//2. Crear metodo
    if(this.cantidad > 0){//3. Validar si tiene una cantidad de producto 
      this.product['cantidad'] = this.cantidad;//4. asigna la cantidad a pedir 
      this.addToCart.emit(this.product);//5. enviar la informacion por el event emiter del output
    }
    return null;
  }
}


