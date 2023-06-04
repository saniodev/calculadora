import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  n1: any = '';
  n2: any = '';
  result: any = '';

  constructor() {

  }

  myObject = {

    sum(n1: number, n2: number): number {
      return n1 + n2;
    },
    sub(n1: number, n2: number): number {
      return n1 - n2;
    },

    multi(n1: number, n2: number): number {
      return n1 * n2;
    },

    div(n1: number, n2: number): number {
      return n1 / n2;
    },
  }

}
