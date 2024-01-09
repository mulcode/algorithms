function binarySearch(array,targetValue){
    let firstIndex = 0;
    let lastIndex = array.length - 1;

    while(firstIndex <= lastIndex){
        let midIndex = Math.floor((firstIndex + lastIndex)/2)
        if(array[midIndex] === targetValue){
            // found the value
            return midIndex;
        } 
        else if(array[midIndex] < targetValue){
            // continue searching to the right
            firstIndex = midIndex +1
        } 
        else
        { 

         //  search from the left
            lastIndex = midIndex -1
        }
    }
    // if value is not found
    return -1
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,13,35,46,55,61,78,85,94],46));

