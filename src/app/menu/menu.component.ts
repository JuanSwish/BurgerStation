import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() ingredients;
  selected = [];


  constructor() {}

  ngOnInit(): void {}

  add(a) {
    const dup = this.selected.find((item) => item.id == a.id);
    if (!dup) {
      this.selected.push(a);
    }
  }

  cancel(a) {
    const arr = this.selected.filter((item) => item.id != a);
    this.selected = arr;
  }

  getTotal() {
    return this.selected.reduce((a, i) => (a += i.price), 0);
  }

  submit() {
    const pay = prompt('Enter your budget');
    const cost = this.getTotal();

    if (pay) {
      if (pay >= cost) {
        alert(`Payment successful! Your change is P ${+pay - cost}`);
        this.selected = []
      } else {
        alert('Oops! You dont have enough money')
      }
    }

  }
}
