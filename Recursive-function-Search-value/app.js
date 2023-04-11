let arr = [ 1 , 2 , 3 , 4 ,5 ]
function valueCheck(arr , val){    
if (!arr.length) {
      return false;
    } 
else if(arr[0] === val ){
    return true;
}
else {
    return valueCheck(arr.slice(1) , val)
}
}
console.log(valueCheck(arr , 2));

