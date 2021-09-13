var vaccine = function(name, brand, efficay){
    this.name = name
    this.brand = brand
    this.efficay = efficay

    this.howToTake = function(){
        console.log("Should take 2 doses per year")
    }

    this.preservationDetails = function(){
        console.log("Stored in the refrigerator between 2°C and 8°C")
    }
}

var vaccineObject = new vaccine("Pfizer", "BioNTech", "average")
vaccineObject.howToTake();
vaccineObject.preservationDetails();