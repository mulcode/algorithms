function linearSearch(array, targetValue){
    for(let i = 0; i < array.length; i++){
        if(array[i] === targetValue){
            return i;
        }
    }
    return -1
}

console.log(linearSearch([2,3,4,5,12,15,23,25,26,29],5));