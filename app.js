var btn = document.querySelector("button");
var area = document.querySelector(".area");
var currency1 = "USD";
var currency2 = "GBP";
var currency3 = "EUR";

fetch("./local.json")
  .then((res) => res.json())
  .then((data) => {
    btn.addEventListener("click", function () {
      let output = `
          <ul>
              <li>United States Dollars: ${data.bpi[currency1].symbol}${data.bpi[currency1].rate} </li>
              <li>Great Britain Pounds: ${data.bpi[currency2].symbol}${data.bpi[currency2].rate}</li>
              <li>Euro: ${data.bpi[currency3].symbol}${data.bpi[currency3].rate}</li>
          </ul>`;

      area.innerHTML = output;
    });
  });
