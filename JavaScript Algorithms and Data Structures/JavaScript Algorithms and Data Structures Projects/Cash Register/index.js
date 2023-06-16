function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let change = cash - price;
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    const currency = cid[i][0];
    const currencyAmount = cid[i][1];
    cidTotal += currencyAmount;
  }

  if (cidTotal < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal === change) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    let result = [];

    for (let i = 0; i < cid.length; i++) {
      const currency = cid[i][0];
      let currencyAmount = cid[i][1];
      const currencyValue = currencyValues[currency];
      let currencyCount = 0;

      while (change >= currencyValue && currencyAmount > 0) {
        change -= currencyValue;
        change = Math.round(change * 100) / 100;
        currencyAmount -= currencyValue;
        currencyCount += currencyValue;
      }

      if (currencyCount > 0) {
        result.push([currency, currencyCount]);
      }
    }

    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: result };
  }
}
const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

console.log(checkCashRegister(19.5, 20, cid));
