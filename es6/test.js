const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]


// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing

let heroesNotEvils = heroes.filter((hero) =>  hero.isEvil === false ? hero : "")
console.log(heroesNotEvils)

//not sure
let unique = new Set(heroes.map(fam => fam.family))
console.log(unique)

let heroesName = heroes.map((hero) => "Sir " + hero.name)
console.log(heroesName)


//map example
let map1 = new Map()
map1.set("Superman", "5.5")
map1.set("An Vu", "5.5")



//promise
function promiseFunc(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                "status" : 200,
                "msg" : "ES6 success"
            })
        }, 2000);
            
        setTimeout(() => {
            reject({
                "status" : 404,
                "msg" : "ES6 Failed"
            })
        }, 3000);
    })
}

promiseFunc().then((data, err)=>{
    console.log("Then ", data)
}).catch((err)=>{
    console.log("Catch ", err)
}).finally((data)=>console.log("Finally", data))


async function asyncFunc() { 
    console.log('calling async');

    await promiseFunc()
        .then((data, err)=>{
            console.log("Then", data)
        })
        .catch((data,err)=>{
            console.log("catch", data)
        })
        .finally(()=>console.log("Finally"));
    
}

asyncFunc();