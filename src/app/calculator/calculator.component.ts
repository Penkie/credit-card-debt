import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public creditCardInput: number = 0;
  public currentAccountInput: number = 0;
  
  public calculatedDebt: number = 0;

  public ngOnInit(): void {
    const storedCreditCardInput = localStorage.getItem('creditCardInput');
    const storedCurrentAccountInput = localStorage.getItem('currentAccountInput');
    if (storedCreditCardInput && storedCurrentAccountInput) {
      this.creditCardInput = Number(storedCreditCardInput);
      this.currentAccountInput = Number(storedCurrentAccountInput);

      this.changeValue();
    }
  }

  public changeValue(): void {
    this.calculatedDebt = this.currentAccountInput - this.creditCardInput;

    // save to localStorage
    localStorage.setItem('creditCardInput', this.creditCardInput.toString());
    localStorage.setItem('currentAccountInput', this.currentAccountInput.toString());
  }
}
