import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCurrency'
})
export class ReplaceCurrency implements PipeTransform {
  transform(value: any): string {
    if (value == null) return '';
    // Formatte en XOF puis remplace par FCFA
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', maximumFractionDigits: 0 }).format(value)
           .replace('XOF', 'FCFA');
  }
}
