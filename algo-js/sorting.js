function swap(element1, element2){
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}

let arraySize = document.querySelector("#sizeInput");

arraySize.addEventListener('click', function(){
    console.log(arraySize.value, typeof(arraySize.value));
});

let delay = 260;
let sortingSpeed = document.querySelector('#speedInput') ;
sortingSpeed.addEventListener('click', function () {
    console.log(sortingSpeed.value, typeof (sortingSpeed.value));
    delay = 320 - parseInt(sortingSpeed.value);
});

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled =true;
    document.querySelector(".insertionSort").disabled =true; 
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

function enableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

function disableSizeSliderbtn(){
    document.querySelector("#sizeInput").disabled =true ;
}

function enableSizeSliderbtn() {
    document.querySelector("#sizeInput").disabled = false;
}

function disableNewArraybtn() {
    document.querySelector("#newArrayGen").disabled = true;
}

function enableNewArraybtn() {
    document.querySelector("#newArrayGen").disabled = false;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

createNewArray();

function createNewArray(newArraySize = 10){
    // Deleting the existing array
    deleteArray() ;
    
    //Creating a new array in JS
    newArray = [];
    for(let i = 0;i < newArraySize; ++i){
        newArray.push(Math.floor(Math.random()*250)+1); 
    }
    console.log(newArray);
    
    //Adding this array to html
    const array = document.querySelector("#array") ;
    for(let i = 0; i < newArraySize; ++i){
        const bar = document.createElement("div") ;
        bar.style.height = 2 * newArray[i] + "px"; 
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add('barNo${i}');
        array.appendChild(bar);
    }
}

function deleteArray(){
    const array = document.querySelector("#array");
    array.innerHTML = "";
}

const newArrayGen = document.querySelector("#newArrayGen");
newArrayGen.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSliderbtn();
    createNewArray(arraySize.value);
})
