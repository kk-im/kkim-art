const form = document.querySelector("form")

const send = function (amount) {
  alert("We're sending this amount of money " + amount)
}

if (window.ethereum) {
  form.classList.add("has-eth");
}



form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (window.ethereum) {
    const input = document.querySelector("input");
    send(input.value);
  } else {
    alert("Please install a wallet")
  }
})
