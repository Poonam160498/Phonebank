// ===== PRICE DATA =====
const PRICES = {
  "iPhone 15 Pro":   { "128GB": 520, "256GB": 580, "512GB": 650 },
  "iPhone 15":       { "128GB": 420, "256GB": 470 },
  "iPhone 14":       { "128GB": 330, "256GB": 375 },
  "iPhone 13":       { "128GB": 250, "256GB": 290 },
  "Samsung S24":     { "128GB": 380, "256GB": 430 },
  "Samsung S23":     { "128GB": 290, "256GB": 330 },
  "Google Pixel 8":  { "128GB": 270, "256GB": 310 }
};

const CONDITION_MULTIPLIER = { "A": 1.0, "B": 0.8, "C": 0.6 };

// ===== ELEMENTS =====
const modelEl = document.getElementById("model");
const storageEl = document.getElementById("storage");
const conditionEl = document.getElementById("condition");
const resultEl = document.getElementById("result");
const priceEl = document.getElementById("price");

// Model dropdown ko data se bharo
for (const model of Object.keys(PRICES)) {
  modelEl.innerHTML += `<option value="${model}">${model}</option>`;
}

// Model badle toh storage options update karo
modelEl.addEventListener("change", () => {
  storageEl.innerHTML = `<option value="">Choose storage…</option>`;
  if (PRICES[modelEl.value]) {
    for (const s of Object.keys(PRICES[modelEl.value])) {
      storageEl.innerHTML += `<option value="${s}">${s}</option>`;
    }
  }
  calculate();
});

storageEl.addEventListener("change", calculate);
conditionEl.addEventListener("change", calculate);

// ===== CALCULATION =====
function calculate() {
  const m = modelEl.value;
  const s = storageEl.value;
  const c = conditionEl.value;

  if (m && s && c && PRICES[m] && PRICES[m][s]) {
    const value = Math.round(PRICES[m][s] * CONDITION_MULTIPLIER[c]);
    priceEl.textContent = "£" + value;
    resultEl.style.display = "block";
  } else {
    resultEl.style.display = "none";
  }
}