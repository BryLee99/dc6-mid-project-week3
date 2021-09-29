import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  getLists() {
    return [
      {name:'Dapitilla, Glenn', gender:'male', age:21},
      {name:'Cruel, Melko', gender:'male', age:21},
      {name:'Corage, R.A. Patricia', gender:'female', age:21},
      {name:'Blantucas, Hanna Jane', gender:'female', age:21},
      {name:'Ladeza, Jethro', gender:'male', age:21},
      {name:'Caduyac, Andy', gender:'male', age:20},
      {name:'Pabriga, Lordson', gender:'male', age:21},
      {name:'Jabal, Angel', gender:'female', age:21},
      {name:'Alombro, Athena Marie', gender:'female', age:21},
      {name:'Dupa, Ian Gabriel', gender:'male', age:21},
    ];
  }
}