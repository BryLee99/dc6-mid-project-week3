import { ListsService } from './../lists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor(service: ListsService) {
    this.person = this.lists = service.getLists();
  }
  person;
  lists;

  allLists() {
    this.person = this.lists;
  }
  gender(gender: string) {
    this.person = this.lists.filter(lists => lists.gender === gender)
  }

  ngOnInit(): void {
  }
}