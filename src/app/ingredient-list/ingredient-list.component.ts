import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent implements OnInit {
  @Input() items;
  @Input() label;
  @Input() allowMultiple = true;
  @Output() added = new EventEmitter();

  selected = [];

  constructor() {}

  select(a) {
    this.added.emit(a)
  }

  ngOnInit(): void {}
}
