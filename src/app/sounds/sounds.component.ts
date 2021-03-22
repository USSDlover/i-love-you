import {Component, Input, OnInit, EventEmitter, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.scss']
})
export class SoundsComponent implements OnInit, OnDestroy {
  @Input() sayILoveYou = new EventEmitter();
  @ViewChild('iLoveYou', {static: true}) iLoveYou: ElementRef;

  private iLoveYouSub: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    if (this.iLoveYouSub) {
      this.iLoveYouSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.sayILoveYou
      .subscribe(() => {
        this.iLoveYou.nativeElement.play();
        console.log('say i love you');
      });
  }

}
