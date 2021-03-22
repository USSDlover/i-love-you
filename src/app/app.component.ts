import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sayILoveYou = new EventEmitter();

  onSayILoveYou(): void {
    this.sayILoveYou.emit();
  }
}
