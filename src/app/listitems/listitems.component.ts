import { Component, OnInit } from '@angular/core';
import { information } from '../information';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent implements OnInit {
  information=information;


  constructor() { }

  ngOnInit(): void {
  }

}
