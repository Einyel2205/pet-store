import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class TestNameComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(){
    console.log('1. Primero sucederá esto');
  }

  ngOnInit(): void {
    console.log('2. Luego esto');
  }

  ngAfterViewInit(): void {
    console.log('3. Seguido de esto');
  }

  ngOnDestroy(): void {
    console.log('4. Finalmente esto (cuando el componente sea destruido)');
  }

}
