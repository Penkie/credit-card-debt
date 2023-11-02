import { Component, OnInit } from '@angular/core';
import { MoneyDataModel } from './money-data.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public creditCardInput: number = 0;
  public currentAccountInput: number = 0;
  public currentGlobalDebtInput: number = 0;
  
  public calculatedDebt: number = 0;

  public ngOnInit(): void {
    const rawData = localStorage.getItem('saveData');
    if (rawData) {
      const data: MoneyDataModel = JSON.parse(rawData);
      this.creditCardInput = data.creditCard;
      this.currentAccountInput = data.currentAcount;
      this.currentGlobalDebtInput = data.currentGlobalDebt;
      this.calculatedDebt = this.calculate();
    }
  }

  public changeValue(): void {
    // calculate debt
    this.calculatedDebt = this.calculate();
    // validate inputs
    this.validateInputs();

    // save to localStorage
    const saveData = new MoneyDataModel(this.creditCardInput, this.currentAccountInput, this.currentGlobalDebtInput);
    localStorage.setItem('saveData', JSON.stringify(saveData));
  }

  public validateInputs(): void {
    if (!this.creditCardInput) this.creditCardInput = 0;
    if (!this.currentAccountInput) this.currentAccountInput = 0;
    if (!this.currentGlobalDebtInput) this.currentGlobalDebtInput = 0;
  }

  public calculate(): number {
    return this.currentAccountInput - this.creditCardInput - this.currentGlobalDebtInput;
  }
}
