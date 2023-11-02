export class MoneyDataModel {

    public creditCard: number;
    public currentAcount: number;
    public currentGlobalDebt: number;

    constructor(creditCardDebt: number, currentAccount: number, currentGlobalDebt: number) {
        this.creditCard = creditCardDebt;
        this.currentAcount = currentAccount;
        this.currentGlobalDebt = currentGlobalDebt
    }
}