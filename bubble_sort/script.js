let array = [5,4,8,2,6,3,9,1,7]
bubbleSort(array);

function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                let temValue = array[j]
                array[j] = array[j+1]
                array[j+1] = temValue;
            }
        }
    }
    console.log(array);
}
