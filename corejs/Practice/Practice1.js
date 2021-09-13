var User = {
    name : "An Vu",
    age : 23,
    address: "Somewhere in US",
    exepertise: "Java Programming",
    accountName: "Chase Checking 1",
    accountNumber: "123456",
    accountBalance: "$5000",
    accountType: "Checking",
    branch: "JPMorgan Chase"
}

function printer(param){
    console.log(`Printer: ${JSON.stringify(param)}`)
}

function userDetails(name, age, address, exepertise, callBack){
    callBack({name, age, address, exepertise})
}

function accountDetails(accountName, accountNumber, accountBalance, accountType, branch, callBack){
    callBack({accountName, accountNumber, accountBalance, accountType, branch})
}


userDetails(User.name, User.age, User.address, User.exepertise, printer)

accountDetails(User.accountName, User.accountNumber, User.accountBalance, User.accountType, User.branch, printer)
