import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-chip',
  templateUrl: './type-chip.component.html',
  styleUrls: ['./type-chip.component.scss'],
})
export class TypeChipComponent {
  @Input() typeName!: string;
  @Input() color?: string;
}
