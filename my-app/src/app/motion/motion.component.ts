import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.scss'],
})
export class MotionComponent implements OnInit, OnDestroy {
  /** Line width % — change in code or DevTools; CSS transition animates it */
  linePercent = 0;

  /** Tracks which configuration alert row is currently expanded. */
  activeAlertNewMatchesPanel: number | null = null;

  private timer?: ReturnType<typeof setTimeout>;

  /** One % per stop — edit these to move each step */
  readonly lifecycleSteps = [
    { type: 'large', percent: 6 },
    { type: 'dot', percent: 17 },
    { type: 'large', percent: 28 },
    { type: 'dot', percent: 39 },
    { type: 'large', percent: 50 },
    { type: 'dot', percent: 61 },
    { type: 'large', percent: 72 },
    { type: 'dot', percent: 83 },
    { type: 'active', percent: 94 },
  ];

  ngOnInit(): void {
    let i = 0;
    const next = () => {
      if (i < this.lifecycleSteps.length) {
        this.linePercent = this.lifecycleSteps[i].percent;
        i += 1;
        this.timer = setTimeout(next, 700);
      }
    };
    this.timer = setTimeout(next, 400);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  isFilled(index: number): boolean {
    return this.linePercent >= this.lifecycleSteps[index].percent;
  }

  toggleAlertNewMatches(panelIndex: number): void {
    this.activeAlertNewMatchesPanel =
      this.activeAlertNewMatchesPanel === panelIndex ? null : panelIndex;
  }

  isAlertNewMatchesOpen(panelIndex: number): boolean {
    return this.activeAlertNewMatchesPanel === panelIndex;
  }
}
