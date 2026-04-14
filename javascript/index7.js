const account = {
  accountName: "User",
  balance: 1000,

  getBalance: function() {
    alert("Balance: " + this.balance);
  },

  deposit: function(amount) {
    if (isNaN(amount) || amount <= 0) {
      this.accountError();
      return;
    }
    this.balance += amount;
    alert("Deposited: " + amount + ". New balance: " + this.balance);
  },

  withdrawal: function(amount) {
    if (isNaN(amount) || amount <= 0) {
      this.accountError();
      return;
    }
    if (!isNaN(amount) && amount > this.balance) {
      this.accountError();
      return;
    }
    this.balance -= amount;
    alert("Withdrawn: " + amount + ". New balance: " + this.balance);
  },

  getAccountName: function() {
    alert("Account holder: " + this.accountName);
  },

  accountError: function() {
    alert("Invalid input. Please try again.");
  },

  exitAccount: function() {
    alert("You have exited your account. Thank you for using our services!");
  }
};

function atm() {
  const message = parseFloat(
    prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit")
  );

  if (isNaN(message)) {
    account.accountError();
    return;
  }

  if (!isNaN(message) && (message < 1 || message > 5)) {
    account.accountError();
    return;
  }

  switch (message) {
    case 1:
      account.getBalance();
      break;
    case 2:
      const deposit = parseFloat(prompt("Enter amount to deposit:"));
      account.deposit(deposit);
      break;
    case 3:
      const withdrawal = parseFloat(prompt("Enter amount to withdraw:"));
      account.withdrawal(withdrawal);
      break;
    case 4:
      account.getAccountName();
      break;
    case 5:
      account.exitAccount();
      break;
  }
}

atm();