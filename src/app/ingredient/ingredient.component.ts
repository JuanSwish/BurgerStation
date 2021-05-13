import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})

export class IngredientComponent implements OnInit {

  @Input() id: string
  @Input() name: string
  @Input() price: number
  @Input() image: string
  @Output() selected: EventEmitter<any> = new EventEmitter()

  isSelected

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    const { name, price, id} = this
    this.selected.emit({ name, price, id })
    this.isSelected = true;
  }
}
