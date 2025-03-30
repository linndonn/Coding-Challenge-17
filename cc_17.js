//Task 1: Create a Customer Class
// set Properties: name, age, email
class Customer {
    constructor(name, email) {
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
    constructor (name, email, vipLevel = 'Platinum') {
        super(name, email);
        this.vipLevel  = vipLevel;
    }
//Add a method to add a 10% loyalty bonus
    getTotalSpent () { 
        const totalSpent = super.getTotalSpent(); 
        return totalSpent * 1.1; 
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
        }}
}

//Test Logs
const customer1 = new Customer('Patrick Joseph', 'PJoseph@stoogeco.com',); 
customer1.addPurchase(794); 

const customer2 = new Customer('Jemella Bascus', 'jmbascus@skyboxx.com'); 
customer2.addPurchase(1334); 

const customer3 = new VIPCustomer('Shaquille Harrigan', 'ShaquilleHarrigan@gmail.com', 'Platinum'); 
customer3.addPurchase(7134);

const salesRep1 = new SalesRep('Maggie Jones'); 
salesRep1.addClient(customer1); 
salesRep1.addClient(customer2); 
salesRep1.addClient(customer3); 
 


//Task 4: Build a Client Report System
// Calculate total revenue from all clients 
const totalRevenue = salesRep1.clients.reduce((total, client) => total + client.getTotalSpent(), 0); 
const highSpendingCustomers = salesRep1.clients.filter(client => client.getTotalSpent() > 500); 
// Create a report of all clients with their total spent
const customerReport = salesRep1.clients.map(client => ({ 
    name: client.name, 
    totalSpent: client.getTotalSpent(),  
}));
// Print the report to the console
console.log(`Total Revenue All Customers: $${totalRevenue}`);
console.log(`High Spending Customers: ${highSpendingCustomers.map(client => client.name).join(', ')}`);
console.log('Customer Report:'); 
// Print each customer's name and total spent
customerReport.forEach(client => {  
console.log(`Name: ${client.name}, Total Spent: $${client.totalSpent.toFixed(2)}`);  
});




