import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'padId' })
export class PadIdPipe implements PipeTransform {
  transform(value: number | string | null | undefined, length = 3): string {
    if (value == null) return '';
    const num = typeof value === 'string' ? parseInt(value, 10) : value;
    if (isNaN(num)) return String(value);
    return String(num).padStart(length, '0');
  }
}
