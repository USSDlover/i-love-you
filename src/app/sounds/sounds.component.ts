import {Component, Input, OnInit, EventEmitter, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {interval, of, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.scss']
})
export class SoundsComponent implements OnInit, OnDestroy {
  @Input() sayILoveYou = new EventEmitter();
  @ViewChild('iLoveYou', {static: true}) iLoveYou: ElementRef;
  @ViewChild('relaxing', {static: true}) relaxing: ElementRef;
  @ViewChild('heartBeat', {static: true}) heartBeat: ElementRef;

  private iLoveYouSub: Subscription;

  played: boolean;

  constructor() { }

  ngOnDestroy(): void {
    if (this.iLoveYouSub) {
      this.iLoveYouSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.onSayILoveYou();
  }

  onPlaySounds(): void {
    if (!this.played) {
      this.relaxing.nativeElement.play();
      this.heartBeat.nativeElement.play();
    } else {
      this.relaxing.nativeElement.pause();
      this.heartBeat.nativeElement.pause();
    }

    this.played = !this.played;
  }

  onSaidILoveYou(): void {
    this.relaxing.nativeElement.volume = .8;
    this.heartBeat.nativeElement.volume = .8;
  }

  private onSayILoveYou(): void {
    this.iLoveYouSub = this.sayILoveYou
      .subscribe(() => {
        this.relaxing.nativeElement.volume = .2;
        this.heartBeat.nativeElement.volume = .2;
        this.iLoveYou.nativeElement.play();
      });
  }

  // FIXME
  private changeVolumeSmoothly(from: number, to: number): void {
    let currVal = from;
    interval(450)
      .pipe(takeUntil(of(currVal = to)))
      .subscribe(() => {
        if (from < to) {
          currVal += 0.1;
        } else {
          currVal -= 0.1;
        }
        this.relaxing.nativeElement.volume = currVal;
        this.heartBeat.nativeElement.volume = currVal;
      });
  }

}
