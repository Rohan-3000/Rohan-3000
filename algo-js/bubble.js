async function bubbleSortFunc(){
    const array1 = document.querySelectorAll(".bar") ;
    for(let i = 0; i < array1.length - 1; ++i){
        for(let j = 0; j < array1.length - i - 1; ++j){
            array1[j].style.background= "blue";
            array1[j+1].style.background= "blue";
            if(parseInt(array1[j].style.height) > parseInt(array1[j+1].style.height)){
                await waitforme(delay) ;
                swap(array1[j], array1[j+1]) ;
            }
            array1[j].style.background ='cyan'; 
            array1[j+1].style.background = 'cyan';
        }
        array1[array1.length-1-i].style.background = 'green' ;
    }    
    array1[0].style.background = 'green' ;
}
const bubbleSortButton = document.querySelector('.bubbleSort');
bubbleSortButton.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSliderbtn();
    disableNewArraybtn();
    await bubbleSortFunc();
    enableSortingBtn();
    enableSizeSliderbtn();
    enableNewArraybtn();
})
