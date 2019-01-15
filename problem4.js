// ### Problem 4:
// Create a Bank class with the the name and balance attributes.
// Afterwards, create an object of the class and follow the instructions below:
//     - Creates an account named "Matt's account" with the balance of 1000
// - Creates an account named "My account" with the balance of 0
// - Withdraws 100.0 from Matt's account
// - Deposits 100.0 to My account
// - Prints both accounts

class Bank  //making a class
{
    constructor(name, balance)
    {
        this.name = name;
        this.balance = balance;
    }
    withdraws()  //a function that takes the balance and subtracts 100 specifically
    {
        this.balance = this.balance - 100
    }
    deposits()
    {
        this.balance = this.balance + 100
    }                                 //a function that takes the balance and adds 100 specifically. if needed i could change the 100 to "amount instead"
    printbalance()
   {
    console.log(this.balance +" " + "in " + this.name);
   }
// functions that prints the result

}

var mattsaccount = new Bank("Matts account", 1000);
var myaccount = new Bank("My account", 0); //im making accounts as requested



mattsaccount.printbalance();// prints the original balance
myaccount.printbalance();

mattsaccount.withdraws();//uses the withdraw function to take away 100
myaccount.deposits();//uses the deposit function to add 100

mattsaccount.printbalance();//prints the new balance
myaccount.printbalance();