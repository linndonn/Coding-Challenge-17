//Task 1: Create a Customer Class
// set Properties: name, age, email
class Customer {
    constructor(name, age, email) {
    this.name = name;
    this.purchaseHistory = [];
    this.email = email;
    }
//Add a purchase method that takes an amount and adds it to the purchaseHistory
    addPurchase (amount) { this.purchaseHistory.push(amount); 
    }
    getTotalSpent () { return this.purchaseHistory.reduce((total, amount) => total + amount, 0); 
}}