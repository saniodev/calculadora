import {Component, OnInit} from '@angular/core';
import { CalculatorService } from "../../services/calculator.service";

@Component({
  selector: 'app-caculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  n1: any;
  n2: any;
  result: any;

  constructor(private calculatorService: CalculatorService) {

  };

  ngOnInit(): void {
  };

  sum(): any {

    this.result = this.calculatorService.myObject.sum(this.n1, this.n2);
  }

  sub(): any {
    this.result = this.calculatorService.myObject.sub(this.n1, this.n2);
  }

  multi(): any {
    this.result = this.calculatorService.myObject.multi(this.n1, this.n2);
  }

  div(): any {
    this.result = this.calculatorService.myObject.div(this.n1, this.n2);
  }

}
