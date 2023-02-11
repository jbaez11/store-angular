import { Component } from '@angular/core';
import { Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'jonathan';
  age = 23;
  img ='https://cataas.com/cat'
  btnDisabled = true;
  names:string[]=['j','n','v','t']
  newName:string = '';
  register={
    name:'',
    email:'',
    password:''
  }

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/coca.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/coca.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/coca.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/coca.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/coca.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/coca.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.age += 1;
  }

  onScroll(event : Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  addName(){
    this.names.push(this.newName);
  }
  deleteB(index:number){
  this.names.splice(index,1)
  }
  onRegister(){
    console.log(this.register);
  }
}
