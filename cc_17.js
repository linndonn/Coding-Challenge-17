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

//Task 3 Create a VIPCustomer Class - adjustment-
//
class VIPCustomer extends Customer {
    constructor (name, email, vipLevel = 'Gold', 'Platinum') {
        super(name, email);
        this.isVIP = isVIP;
    }
//Add a method to add a 10% loyalty bonus
    getTotalSpent () { 
        const totalSpent = super.getTotalSpent(); 
        return totalSpent * 1.1; 
    }
}

//Task 2: Create a SalesRep Class
// Set Properties: name, clients
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

// Add a method to add a client to the clients array
    addClient(customer) {
        this.clients.push(customer);
    }
//Finds client by name and returns total spent
    clientGetTotal (name) {
        const client = this.clients.find(client => client.name === name);
        if (client) {
            return client.getTotalSpent();
        } else {
            return `Client does not exist.`;
        }
    }
}

//Task 4: Build a Client Report System
const totalRevenue = salesRep1.clients.reduce((total, client) => total + client.getTotalSpent(), 0); 
const highSpendingCustomers = salesRep1.clients.filter(client => client.getTotalSpent() > 500); 

const customerReport = salesRep1.clients.map(client => ({ 
    name: client.name, 
    totalSpent: client.getTotalSpent(),  
}));

console.log(`Total Revenue All Customers: $${totalRevenue}`);
console.log(`High Spending Customers: ${highSpendingCustomers.map(client => client.name).join(', ')}`);
console.log('Customer Report:'); 

customerReport.forEach(client => {  
console.log(`Name: ${client.name}, Total Spent: $${client.totalSpent.toFixed(2)}`);  
});

