import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent implements AfterViewInit {
  @ViewChild('rainFrontRow', {static: true}) frontRow: ElementRef;
  @ViewChild('rainBackRow', {static: true}) backRow: ElementRef;

  private static getStem(randoHundo: number): HTMLDivElement {
    const stemEl = document.createElement('div');

    stemEl.classList.add('stem');

    stemEl.style.width = '1px';
    stemEl.style.height = '60%';
    stemEl.style.marginLeft = '7px';
    stemEl.style.background = 'linear-gradient(to bottom, rgb(19, 77, 222), rgba(19, 77, 222, 0.64))';
    stemEl.style.animation = 'stem 0.5s linear infinite';

    stemEl.style.animationDelay = `0.${randoHundo}s`;
    stemEl.style.animationDuration = `0.5${randoHundo}s`;

    return stemEl;
  }
  private static getSplat(randoHundo: number): HTMLDivElement {
    const splatEl = document.createElement('div');

    splatEl.classList.add('splat');

    splatEl.style.width = '15px';
    splatEl.style.height = '10px';
    splatEl.style.borderTop = '2px dotted rgba(19, 77, 222, 1)';
    splatEl.style.borderRadius = '50%';
    splatEl.style.opacity = '1';
    splatEl.style.transform = 'scale(0)';
    splatEl.style.animation = 'splat 0.5s linear infinite';

    splatEl.style.animationDelay = `0.${randoHundo}s`;
    splatEl.style.animationDuration = `0.5${randoHundo}s`;

    return splatEl;
  }
  private static getDrop(incrementNum: number, randoFiver: number, randoHundo: number, row: 'front' | 'back'): HTMLDivElement {
    const dropEl = document.createElement('div');

    dropEl.classList.add('drop');

    dropEl.style.position = 'absolute';
    dropEl.style.bottom = '100%';
    dropEl.style.width = '15px';
    dropEl.style.height = '120px';
    dropEl.style.pointerEvents = 'none';
    dropEl.style.animation = 'drop 0.5s linear infinite';

    row === 'front' ? dropEl.style.left = `${incrementNum}%` : dropEl.style.right = `${incrementNum}%`;
    dropEl.style.bottom = `${randoFiver + randoFiver - 1 + 100}%`;
    dropEl.style.animationDelay = `0.${randoHundo}s`;
    dropEl.style.animationDuration = `0.5${randoHundo}s`;

    dropEl.appendChild(RainComponent.getStem(randoHundo));
    dropEl.appendChild(RainComponent.getSplat(randoHundo));

    return dropEl;
  }

  ngAfterViewInit(): void {
    this.makeItRain();
  }

  private makeItRain(): void {
    this.frontRow.nativeElement.innerHTML = '';
    this.backRow.nativeElement.innerHTML = '';

    let increment = 0;
    const drops: HTMLDivElement[] = [];
    const backDrops: HTMLDivElement[] = [];

    while (increment < 100) {
      const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

      increment += randoFiver;

      drops.push(RainComponent.getDrop(increment, randoFiver, randoHundo, 'front'));
      backDrops.push(RainComponent.getDrop(increment, randoFiver, randoHundo, 'back'));
    }

    this.frontRow.nativeElement.append(...drops);
    this.backRow.nativeElement.append(...backDrops);
  }
}
