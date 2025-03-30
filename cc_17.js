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