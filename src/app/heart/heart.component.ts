import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent implements OnInit {
  @Output() sayILoveYou = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
