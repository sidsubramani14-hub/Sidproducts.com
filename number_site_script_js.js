const ADMIN_PASSWORD = "POKEMON";
let total = Number(localStorage.getItem("combinedTotal")) || 0;

function submitNumber() {
  const val = Number(document.getElementById("userNumber").value);
  if (isNaN(val)) {
    document.getElementById("submitMsg").innerText = "Please enter a valid number.";
    return;
  }
  total += val;
  localStorage.setItem("combinedTotal", total);
  document.getElementById("submitMsg").innerText = "Number submitted!";
  document.getElementById("userNumber").value = "";
}

function login() {
  const pass = document.getElementById("adminPass").value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById("adminSection").style.display = "block";
    document.getElementById("totalDisplay").innerText = total;
  } else {
    alert("Wrong password");
  }
}

function logout() {
  document.getElementById("adminSection").style.display = "none";
  document.getElementById("adminPass").value = "";
}
