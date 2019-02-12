import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent implements OnInit {

  @Input()
  items = [];

  @Input()
  editItemIndex = -1;

  @Output()
  editItemClick = new EventEmitter<number>();

  @Output()
  removeItemClick = new EventEmitter<number>();

  @Output()
  updateItemClick = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  editItem(index: number) {
    this.editItemClick.emit(index);
  }

  removeItem(index: number) {
    this.removeItemClick.emit(index);
  }

  isActive(index: number) {
    return {cssGanzSchlecht: index === this.editItemIndex};
  }

}
