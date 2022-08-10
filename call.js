var obj={
    num:2
}

var addToThis=function(a,b,c){
    return this.num +a+b+c;
}

// we can see there is no relation between the function and the object we have as obj
//if we want to do any actio on obj nums, we use a call function
addToThis.call(obj, 3)   //functionname.call(object we calling on to , argument the function need which we are calling)

console.log(addToThis.call(obj,1,2,3));    // 8