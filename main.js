let balances = { BTC: 0.542, ETH: 4.20, USDT: 12000 };

function updateWallet() {
  document.getElementById("btcBal").children[1].innerText = balances.BTC.toFixed(3);
  document.getElementById("ethBal").children[1].innerText = balances.ETH.toFixed(3);
  document.getElementById("usdtBal").children[1].innerText = balances.USDT.toFixed(2);
}

function deposit() {
  let c = coinSelect.value;
  let a = parseFloat(amount.value);
  if (a > 0) balances[c] += a;
  updateWallet();
}

function withdraw() {
  let c = coinSelect.value;
  let a = parseFloat(amount.value);
  if (a > 0 && balances[c] >= a) balances[c] -= a;
  updateWallet();
}
// Fake price updates
setInterval(() => {
  document.querySelectorAll(".price").forEach(price => {
    let value = parseFloat(price.innerText);
    let change = (Math.random() - 0.5) * 50;
    price.innerText = (value + change).toFixed(2);
  });

  document.getElementById("btcTicker").innerText =
    "$" + (68000 + Math.random() * 1000).toFixed(2);
}, 3000);

// Login modal
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function fakeLogin() {
  alert("Login successful (demo)");
  closeLogin();
}
function approveAll(){
  alert("All withdrawals approved");
}

function closeAdmin(){
  adminPanel.style.display = "none";
}