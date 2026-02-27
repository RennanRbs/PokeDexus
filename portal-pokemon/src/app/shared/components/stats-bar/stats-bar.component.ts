import { Component, Input } from '@angular/core';

export interface StatItem {
  name: string;
  value: number;
}

@Component({
  selector: 'app-stats-bar',
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss'],
})
export class StatsBarComponent {
  @Input() stats: StatItem[] = [];
  @Input() maxValue = 255;
}
