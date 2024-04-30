import { Component, OnInit } from '@angular/core';

import { CartServicesService } from '../../services/cartservices.service';
import { ApiService } from '../../services/api.service';
import { Product } from '../../Dtos/Productos.dto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})

export class CatalogoComponent implements OnInit{

  public productos: Product[] = [];

  constructor(
    private apiService: ApiService,
    private cartServicesService: CartServicesService
  ){ }

  ngOnInit(): void {
    this.apiService.getProducts()
      .subscribe((res: any) => {
        this.productos = res;
      }); 
  }


  addToCart(product:any){
    this.cartServicesService.addProduct(product);
    console.log(product);    
    console.log(this.cartServicesService.getProducts());
  }

  products = [
    {
      id:1,
      name: 'Bike_1',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:2,
      name: 'Bike_2',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:3,
      name: 'Bike_3',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:4,
      name: 'Bike_4',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:5,
      name: 'Bike_5',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:6,
      name: 'Bike_6',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:7,
      name: 'Bike_7',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:8,
      name: 'Bike_8',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:9,
      name: 'Bike_9',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:19,
      name: 'Bike_10',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
  ] 
}
