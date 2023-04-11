function takeNum(x){
    return function(y){
        let result = x + y ;
        console.log(result);
    }
}
let add =  takeNum(5);
add(10); // result is 15 
