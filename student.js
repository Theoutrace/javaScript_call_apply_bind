var student = {
    age:20
}


function age(){
    return this.age
}


//we are using bind
var bound = age.bind(student)

console.log( bound(0));
