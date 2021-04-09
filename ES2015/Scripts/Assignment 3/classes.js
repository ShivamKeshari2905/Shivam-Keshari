"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BalanceOfAllAccounts = [];
var Account = /** @class */ (function () {
    function Account(Id, name, balance) {
        this.Id = Id;
        BalanceOfAllAccounts.push(balance);
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(Id, name, balance, interest) {
        return _super.call(this, Id, name, balance) || this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(Id, name, balance, cashCredit) {
        return _super.call(this, Id, name, balance) || this;
    }
    return CurrentAccount;
}(Account));
var c1 = new CurrentAccount(1, "a", 1000, 400);
var c2 = new CurrentAccount(2, "b", 2000, 400);
var c3 = new CurrentAccount(3, "c", 5000, 400);
var c4 = new CurrentAccount(4, "d", 4000, 400);
var c5 = new CurrentAccount(5, "e", 6000, 400);
var s1 = new SavingAccount(6, "p", 10000, 5);
var s2 = new SavingAccount(6, "q", 6000, 5);
var s3 = new SavingAccount(6, "r", 8000, 5);
var s4 = new SavingAccount(6, "s", 5000, 5);
function totalBalanceInBank() {
    console.log(BalanceOfAllAccounts.reduce(function (a, b) { return a + b; }, 0));
}
totalBalanceInBank();
//# sourceMappingURL=classes.js.map