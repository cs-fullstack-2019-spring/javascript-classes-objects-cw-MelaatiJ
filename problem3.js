// ### Problem 3:
// Create a Person class with three attributes: name, weight, and height.
//     Create a method that can calculate the BMI of a person using the formula below.
//     Create an object of the class and use the function.
//
// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.


class Person // creating a class called person
{
    constructor(name, weight, height)
    {//whats inside the class you have to make it equal to new attributes
        this.name = name;
        this.weight = weight
        this.height = height
    }
    calculatetheBMI(theperson)
    {
        console.log((this.weight / (this.height *this.height)) * 703)
    }
}
var melaati = new Person("Melaati" , 180 , 62) // made an object using myself as an example
melaati.calculatetheBMI(melaati)