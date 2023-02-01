const balance = 1000; // starting balance

function checkBalance() {
  console.log(`Your balance is $${balance}.`);
}

function withdraw(amount) {
  if (amount > balance) {
    console.log(`Insufficient funds. Your balance is $${balance}.`);
  } else {
    balance -= amount;
    console.log(`You withdrew $${amount}. Your new balance is $${balance}.`);
  }
}

checkBalance();
withdraw(200);
checkBalance();
