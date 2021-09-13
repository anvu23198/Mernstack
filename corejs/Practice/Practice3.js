function exampleStackFunction(){
    exampleStackFunction2()
    console.log("This is the first on stack and should print last")
}

function exampleStackFunction2(){
    exampleStackFunction3();
    console.log("This is the second on stack and should print after function 3")
}

function exampleStackFunction3(){
    // call this function and it will blow up the stack
    // exampleStackFunction();

    console.log("This is the last on stack and should print first")
}

exampleStackFunction();