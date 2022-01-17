let array =[1,4,6,7,8,0];
function deleteElement(array,index) {
    for (let i=index;i<array.length;i++){
        array[i]=array[i+1];
    }
}