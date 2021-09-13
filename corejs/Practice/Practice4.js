
function Person(){
    this.name = "An Vu"
    this.age = "23"
    this.job = "Student"
    this.address = "Somewhere in us"
}


var personObject = new Person();

personObject.EmpId = "123456789"
personObject.EmpName = "An Vu"
personObject.Designation = "Programmer"
personObject.GetSalary = function(){
    console.log("The salary is 50k per year")
}
personObject.GetPromotionDetails = function(){
    console.log("Bonus promotion is 10k per year")
}
personObject.GetAddress = function(){
    console.log(`The address is: ${personObject.address}`)
}

personObject.GetSalary()
personObject.GetPromotionDetails()
personObject.GetAddress()