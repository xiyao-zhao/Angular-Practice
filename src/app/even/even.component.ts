import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
    @Input() even;
  constructor() { }

  ngOnInit(): void {
  }

  @Input() evenArray: Array<number>;
}
