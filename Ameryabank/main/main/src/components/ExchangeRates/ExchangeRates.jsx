import { useState } from "react";
import "./ExchangeRates.css";

// Փոխարժեքներ (AMD-ով). null = տվյալ չկա
const RATES = {
  cash: {
    USD: { buy: 357.5, sell: 362.5 },
    EUR: { buy: 392, sell: 406 },
    GBP: { buy: 467.5, sell: 487.5 },
    RUB: { buy: 4.13, sell: 4.45 },
    GEL: { buy: 133.5, sell: 144 },
  },
  noncash: {
    USD: { buy: 357.5, sell: 362.5 },
    EUR: { buy: 392, sell: 406 },
    GBP: { buy: 467.5, sell: 487.5 },
    RUB: { buy: 4.24, sell: 4.54 },
    GEL: null,
  },
};

// Նմուշային արժեքներ, փոխարինեք իրականով
const GOLD = [
  { name: "Ոսկե ձուլակտոր 1 գ", buy: 0, sell: 0 },
  { name: "Ոսկե ձուլակտոր 5 գ", buy: 0, sell: 0 },
  { name: "Ոսկե ձուլակտոր 10 գ", buy: 0, sell: 0 },
];

const CURRENCIES = ["AMD", "USD", "EUR", "GBP", "RUB", "GEL"];

const fmt = (n) =>
  n == null ? "" : n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function ExchangeRates() {
  const [tab, setTab] = useState("rates"); // rates | gold

  // Հաշվիչ
  const [mode, setMode] = useState("noncash"); // cash | noncash
  const [amount, setAmount] = useState("22222");
  const [from, setFrom] = useState("AMD");
  const [to, setTo] = useState("USD");

  const convert = () => {
    const value = parseFloat(amount);
    if (isNaN(value) || from === to) return from === to && !isNaN(value) ? value : "";

    const table = RATES[mode];

    // 1) from -> AMD (բանկը առնում է)
    let inAmd;
    if (from === "AMD") inAmd = value;
    else {
      if (!table[from]) return "";
      inAmd = value * table[from].buy;
    }

    // 2) AMD -> to (բանկը վաճառում է)
    if (to === "AMD") return inAmd;
    if (!table[to]) return "";
    return inAmd / table[to].sell;
  };

  const result = convert();

  return (
    <section className="fx">
      <div className="fx__inner">
        {/* ----- Ձախ՝ աղյուսակ ----- */}
        <div className="fx__left">
          <h2 className="fx__title">Տարադրամի փոխարժեքն այսօր</h2>
          <p className="fx__sub">
            Ծանոթացիր <a href="#">տարադրամի և ոսկու փոխարժեքին</a>։
          </p>

          <div className="fx__radios fx__radios--center">
            <label>
              <input
                type="radio"
                name="tab"
                checked={tab === "rates"}
                onChange={() => setTab("rates")}
              />
              ՓՈԽԱՐԺԵՔ
            </label>
            <label>
              <input
                type="radio"
                name="tab"
                checked={tab === "gold"}
                onChange={() => setTab("gold")}
              />
              ՈՍԿԻ
            </label>
          </div>

          {tab === "rates" ? (
            <div className="fx__table-wrap">
              <table className="fx__table">
                <thead>
                  <tr>
                    <th />
                    <th colSpan={2}>Կանխիկ</th>
                    <th colSpan={2}>Անկանխիկ</th>
                  </tr>
                  <tr>
                    <th />
                    <th>առք</th>
                    <th>վաճառք</th>
                    <th>առք</th>
                    <th>վաճառք</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(RATES.cash).map((cur) => (
                    <tr key={cur}>
                      <td className="fx__cur">{cur}</td>
                      <td>{fmt(RATES.cash[cur]?.buy)}</td>
                      <td>{fmt(RATES.cash[cur]?.sell)}</td>
                      <td>{fmt(RATES.noncash[cur]?.buy)}</td>
                      <td>{fmt(RATES.noncash[cur]?.sell)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="fx__table-wrap">
              <table className="fx__table">
                <thead>
                  <tr>
                    <th />
                    <th>առք</th>
                    <th>վաճառք</th>
                  </tr>
                </thead>
                <tbody>
                  {GOLD.map((g) => (
                    <tr key={g.name}>
                      <td className="fx__cur">{g.name}</td>
                      <td>{fmt(g.buy)}</td>
                      <td>{fmt(g.sell)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="fx__note">
            Քարտային փոխարժեքը սահմանվում է՝ գործարքի հաշվառման արժույթի անկանխիկ առքի
            փոխարժեքից նվազեցնելով 1 (մեկ) ՀՀ դրամ և անկանխիկ վաճառքի փոխարժեքին
            ավելացնելով 1 (մեկ) ՀՀ դրամ։
          </p>
        </div>

        {/* ----- Աջ՝ հաշվիչ ----- */}
        <div className="fx__right">
          <h2 className="fx__title">Տարադրամի հաշվիչ</h2>

          <div className="fx__radios">
            <label>
              <input
                type="radio"
                name="mode"
                checked={mode === "cash"}
                onChange={() => setMode("cash")}
              />
              ԿԱՆԽԻԿ
            </label>
            <label>
              <input
                type="radio"
                name="mode"
                checked={mode === "noncash"}
                onChange={() => setMode("noncash")}
              />
              ԱՆԿԱՆԽԻԿ
            </label>
          </div>

          <label className="fx__label">Ես ունեմ</label>
          <div className="fx__row">
            <input
              className="fx__input"
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              className="fx__select"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {CURRENCIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <label className="fx__label">Ինձ պետք է</label>
          <div className="fx__row">
            <input
              className="fx__input"
              type="text"
              readOnly
              value={result === "" ? "" : fmt(result)}
            />
            <select
              className="fx__select"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {CURRENCIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}