let correctPin = "1234";
let balance = 5000;
let maxAttempts = 3;

// Login using a loop
let loggedIn = false;

for (let i = 0; i < maxAttempts; i++) {
    let pin = prompt("Enter your 4-digit PIN:");

    if (pin === correctPin) {
        alert("Login successful!");
        loggedIn = true;
        break;
    } else {
        alert(`Incorrect PIN. Attempts left: ${maxAttempts - i - 1}`);
    }
}

if (!loggedIn) {
    alert("Maximum attempts reached. Account locked.");
} else {
    // Banking system loop
    let continueBanking = true;

    while (continueBanking) {
        let choice = prompt(
            "Choose an option:\n1. Deposit\n2. Withdraw\n3. Check Balance"
        );

        if (choice === "1") {
            let amount = parseFloat(prompt("Enter deposit amount (max ₹10000):"));
            if (amount > 0 && amount <= 10000) {
                balance += amount;
                alert(`₹${amount} deposited. New balance: ₹${balance}`);
            } else {
                alert("Invalid amount. Must be between ₹1 and ₹10,000.");
            }

        } else if (choice === "2") {
            let amount = parseFloat(prompt("Enter withdrawal amount (max ₹10000):"));
            if (amount > 0 && amount <= 10000) {
                if (amount <= balance) {
                    balance -= amount;
                    alert(`₹${amount} withdrawn. Remaining balance: ₹${balance}`);
                } else {
                    alert("Insufficient balance.");
                }
            } else {
                alert("Invalid amount. Must be between ₹1 and ₹10,000.");
            }

        } else if (choice === "3") {
            alert(`Your current balance is ₹${balance}`);

        } else {
            alert("Invalid option. Please choose 1, 2, or 3.");
        }

        let next = prompt("Press C to continue or E to exit").toUpperCase();
        if (next !== "C") {
            continueBanking = false;
        }
    }

    alert("Thank you for banking with us!");
}